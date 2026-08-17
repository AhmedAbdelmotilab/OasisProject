import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin, removeCabinImage, uploadCabinImage } from "../../../services/apiCabins";
import { useCabinsStore } from "../store/useCabinsStore";
import type { CabinFormValues } from "./cabinSchema";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const setShowOpenModal = useCabinsStore((state) => state.setShowOpenModal);

  const { mutate: addNewCabin, isPending } = useMutation({
    mutationKey: ["createNewCabin"],
    mutationFn: async (data: CabinFormValues) => {
      const image = await uploadCabinImage(data.image[0]);
      try {
        return await createCabin({ ...data, image });
      } catch (error) {
        await removeCabinImage(image).catch((cleanupError) => {
          console.error("Failed to clean up orphaned image:", cleanupError);
        });
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Cabin was successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins-paginated"] });
      setShowOpenModal(false);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { addNewCabin, isPending };
}

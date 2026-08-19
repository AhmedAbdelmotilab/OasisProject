import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import i18n from "../../../i18n";
import { removeCabinImage, UpdateCabin, uploadCabinImage } from "../../../services/apiCabins";
import { useCabinsStore } from "../store/useCabinsStore";
import type { CabinFormValues } from "./cabinSchema";

export function useUpdateCabin(isEditSession: boolean, editId: number, currentImage: string) {
  const queryClient = useQueryClient();
  const setEditingCabinId = useCabinsStore((state) => state.setEditingCabinId);

  const { mutate: submitCabin, isPending } = useMutation({
    mutationKey: ["submitCabin"],
    mutationFn: async (data: CabinFormValues) => {
      if (!isEditSession) return;
      const file = data.image?.[0];
      if (!file) {
        return await UpdateCabin(editId, { ...data, image: currentImage });
      }
      const newImage = await uploadCabinImage(file);
      try {
        const updated = await UpdateCabin(editId, { ...data, image: newImage });
        await removeCabinImage(currentImage).catch(() => undefined);
        return updated;
      } catch (error) {
        await removeCabinImage(newImage).catch(() => undefined);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success(i18n.t("Cabin was successfully updated"));
      queryClient.invalidateQueries({ queryKey: ["cabins-paginated"] });
      setEditingCabinId(null);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { submitCabin, isPending };
}

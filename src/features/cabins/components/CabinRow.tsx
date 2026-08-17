import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { deleteCabinById } from "../../../services/apiCabins";
import { supabaseUrl } from "../../../services/supabase";
import { formatCurrency } from "../../../utils/helpers";
import type { Cabin } from "../../../utils/types";
import { useCabinsStore } from "../store/useCabinsStore";
import styles from "./CabinRow.module.css";

interface CabinRowProps {
  cabin: Cabin;
}

export default function CabinRow({ cabin }: CabinRowProps) {
  const { editingCabinId, setEditingCabinId, setShowOpenModal } = useCabinsStore();
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isPending } = useMutation({
    mutationKey: ["deleteCabin"],
    mutationFn: (id: number) => deleteCabinById(id),
    onSuccess: () => {
      toast.success(`Cabin Was Successfully Deleted`);
      queryClient.invalidateQueries({ queryKey: ["cabins-paginated"] });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });
  return (
    <>
      <div className={styles.row}>
        <img
          className={styles.img}
          src={
            cabin.image.startsWith("http")
              ? cabin.image
              : `${supabaseUrl}/storage/v1/object/public/${cabin.image}`
          }
          alt={cabin.name}
        />
        <div className={styles.cabin}>{cabin.name}</div>
        <div>{cabin.description}</div>
        <div className={styles.price}>{formatCurrency(cabin.regularPrice)}</div>
        <div className={styles.discount}>{formatCurrency(cabin.discount)}</div>
        <div className={styles.capacity}>{cabin.maxCapacity}</div>
        <div className={styles.actions}>
          <button
            className={`${styles.iconBtn}`}
            aria-label="Edit cabin"
            onClick={() => {
              const next = editingCabinId === cabin.id ? null : cabin.id;
              setEditingCabinId(next);
              setShowOpenModal(false);
            }}
          >
            <FaPen />
          </button>
          <button
            disabled={isPending}
            className={`${styles.iconBtn} ${styles.deleteBtn}`}
            aria-label="Delete cabin"
            onClick={() => deleteCabin(cabin.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </>
  );
}

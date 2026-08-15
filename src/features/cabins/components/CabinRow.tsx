import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { deleteCabinById } from "../../../services/apiCabins";
import { formatCurrency } from "../../../utils/helpers";
import type { Cabin } from "../../../utils/types";
import styles from "./CabinRow.module.css";

interface CabinRowProps {
  cabin: Cabin;
}

export default function CabinRow({ cabin }: CabinRowProps) {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isPending } = useMutation({
    mutationKey: ["deleteCabin"],
    mutationFn: (id: number) => deleteCabinById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: () => {},
  });
  return (
    <div className={styles.row}>
      <img className={styles.img} src={cabin.image} alt={cabin.name} />
      <div className={styles.cabin}>{cabin.name}</div>
      <div>{cabin.description}</div>
      <div className={styles.price}>{formatCurrency(cabin.regularPrice)}</div>
      <div className={styles.discount}>{formatCurrency(cabin.discount)}</div>
      <div className={styles.capacity}>{cabin.maxCapacity}</div>
      <button disabled={isPending} className={styles.deleteBtn} onClick={() => deleteCabin(cabin.id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

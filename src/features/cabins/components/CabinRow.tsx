import { FaTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../../../utils/helpers";
import type { Cabin } from "../../../utils/types";
import styles from "./CabinRow.module.css";

interface CabinRowProps {
  cabin: Cabin;
}

export default function CabinRow({ cabin }: CabinRowProps) {
  return (
    <div className={styles.row}>
      <img className={styles.img} src={cabin.image} alt={cabin.name} />
      <div className={styles.cabin}>{cabin.name}</div>
      <div>{cabin.description}</div>
      <div className={styles.price}>{formatCurrency(cabin.regularPrice)}</div>
      <div className={styles.discount}>{formatCurrency(cabin.discount)}</div>
      <div className={styles.capacity}>{cabin.maxCapacity}</div>
      <FaTrashAlt className={styles.deleteBtn} />
    </div>
  );
}

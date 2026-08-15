import type { Cabin } from "../../../utils/types";
import styles from "./CabinRow.module.css";

interface CabinRowProps {
  cabin: Cabin;
}

export default function CabinRow({ cabin }: CabinRowProps) {
  const { name, regularPrice, discount, image, description, maxCapacity } = cabin;

  return (
    <div className={styles.row}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.cabin}>{name}</div>
      <div>{description}</div>
      <div className={styles.price}>{regularPrice}</div>
      <div className={styles.discount}>{discount}</div>
      <div className={styles.price}>{maxCapacity}</div>
    </div>
  );
}

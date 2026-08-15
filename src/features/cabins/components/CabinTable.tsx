import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../../services/apiCabins";
import CabinRow from "./CabinRow";
import styles from "./CabinTable.module.css";

export default function CabinTable() {
  const { data: cabins } = useQuery({ queryKey: ["cabins"], queryFn: getAllCabins });
  return (
    <div className={styles.table}>
      <header className={styles.header}>
        <div>Image</div>
        <div>Cabin</div>
        <div>Description</div>
        <div>Price</div>
        <div>Discount</div>
        <div>maxCapacity</div>
      </header>
      {cabins?.map((cabin) => (
        <CabinRow key={cabin.name} cabin={cabin} />
      ))}
    </div>
  );
}

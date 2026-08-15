import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { Spinner } from "../../../components/Spinner";
import { getAllCabins } from "../../../services/apiCabins";
import { useCabinsStore } from "../store/useCabinsStore";
import CabinRow from "./CabinRow";
import styles from "./CabinTable.module.css";

export default function CabinTable() {
  const { cabins, setCabins } = useCabinsStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });
  useEffect(() => {
    if (data) setCabins(data);
  }, [data, setCabins]);
  if (isError && !isLoading) {
    return <p>error while fetching the data 📈 </p>;
  }
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.table}>
      <header className={styles.header}>
        <div>Image</div>
        <div>Cabin</div>
        <div>Description</div>
        <div>Price</div>
        <div>Discount</div>
        <div>maxCapacity</div>
        <div className={styles.addButton}>
          <button className={styles.button}>
            <FaPlus /> Add
          </button>
        </div>
      </header>
      {cabins?.map((cabin) => (
        <CabinRow key={cabin.name} cabin={cabin} />
      ))}
    </div>
  );
}

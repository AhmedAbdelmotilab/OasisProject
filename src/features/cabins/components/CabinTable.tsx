import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { Spinner } from "../../../components/Spinner";
import { getAllCabins } from "../../../services/apiCabins";
import CabinRow from "./CabinRow";
import styles from "./CabinTable.module.css";

export default function CabinTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });

  if (isError && !isLoading) {
    return toast.error("error while fetching the data 📈");
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
      {data?.map((cabin) => (
        <CabinRow key={cabin.name} cabin={cabin} />
      ))}
    </div>
  );
}

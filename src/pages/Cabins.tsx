import AddCabin from "../features/cabins/components/AddCabin";
import CabinTablePaginated from "../features/cabins/components/CabinTableInfiniteScroll";
import CabinTableOperations from "../features/cabins/components/CabinTableOperations";
import styles from "./Cabins.module.css";

function Cabins() {
  return (
    <>
      <AddCabin />
      <div className={styles.horizontal}>
        <h1 className={`${styles.heading} ${styles.h1}`}>All cabins</h1>
        <CabinTableOperations />
      </div>
      <div className={styles.vertical}></div>
      <CabinTablePaginated />
    </>
  );
}

export default Cabins;

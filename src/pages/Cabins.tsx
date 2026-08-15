import CabinTable from "../features/cabins/components/CabinTable";
import styles from "./Cabins.module.css";

function Cabins() {
  return (
    <>
      <div className={styles.horizontal}>
        <h1 className={`${styles.heading} ${styles.h1}`}>All cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <div className={styles.vertical}></div>
      <CabinTable />
    </>
  );
}

export default Cabins;

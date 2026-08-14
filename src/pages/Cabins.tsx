import { useEffect } from "react";
import { CabinTable } from "../features/cabins/CabinTable";
import { getAllCabins } from "../services/apiCabins";
import styles from "./Cabins.module.css";

function Cabins() {
  useEffect(() => {
    getAllCabins().then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className={styles.horizontal}>
        <h1 className={`${styles.heading} ${styles.h1}`}>All cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <div className={styles.vertical}>
        <CabinTable cabins={[]} />
      </div>
    </>
  );
}

export default Cabins;

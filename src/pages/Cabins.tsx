import { useEffect } from "react";
import { getAllCabins } from "../services/apiCabins";
import styles from "./Cabins.module.css";

function Cabins() {
  useEffect(() => {
    getAllCabins().then((data) => console.log(data));
  }, []);
  return (
    <div className={styles.horizontal}>
      <h1 className={`${styles.heading} ${styles.h1}`}>All cabins</h1>
      <p>TEST</p>
      <img
        src="https://zfgaikbajldphnmrdphg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="cabin"
      />
    </div>
  );
}

export default Cabins;

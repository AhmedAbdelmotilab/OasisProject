import { useTranslation } from "react-i18next";
import AddCabin from "../features/cabins/components/AddCabin";
import CabinTablePaginated from "../features/cabins/components/CabinTableInfiniteScroll";
import CabinTableOperations from "../features/cabins/components/CabinTableOperations";
import styles from "./Cabins.module.css";

function Cabins() {
  const { t } = useTranslation();

  return (
    <>
      <AddCabin />
      <div className={styles.horizontal}>
        <h1 className={`${styles.heading} ${styles.h1}`}>{t("All cabins")}</h1>
        <CabinTableOperations />
      </div>
      <CabinTablePaginated />
    </>
  );
}

export default Cabins;

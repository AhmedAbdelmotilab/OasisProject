import { useTranslation } from "react-i18next";
import styles from "./Bookings.module.css";

function Bookings() {
  const { t } = useTranslation();

  return (
    <div className={styles.horizontal}>
      <h1 className={`${styles.heading} ${styles.h1}`}>{t("All bookings")}</h1>
    </div>
  );
}

export default Bookings;

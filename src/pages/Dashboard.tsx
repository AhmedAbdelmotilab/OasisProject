import { useTranslation } from "react-i18next";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className={styles.horizontal}>
      <h1 className={`${styles.heading} ${styles.h1}`}>{t("Dashboard")}</h1>
    </div>
  );
}

export default Dashboard;

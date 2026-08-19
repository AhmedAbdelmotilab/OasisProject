import { useTranslation } from "react-i18next";
import styles from "./Settings.module.css";

function Settings() {
  const { t } = useTranslation();

  return (
    <h1 className={`${styles.heading} ${styles.h1}`}>{t("Update hotel settings")}</h1>
  );
}

export default Settings;

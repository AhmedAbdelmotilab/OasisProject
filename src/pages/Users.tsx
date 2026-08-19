import { useTranslation } from "react-i18next";
import styles from "./Users.module.css";

function NewUsers() {
  const { t } = useTranslation();

  return (
    <h1 className={`${styles.heading} ${styles.h1}`}>{t("Create a new user")}</h1>
  );
}

export default NewUsers;

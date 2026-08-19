import { useTranslation } from "react-i18next";
import { FaBars, FaGlobe } from "react-icons/fa";
import styles from "./Header.module.css";
import { useUIStore } from "./store/useUIStore";

export default function Header() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <header className={styles.header}>
      <button className={styles.menuBtn} onClick={toggleSidebar}>
        <FaBars />
      </button>
      {t("Header")}
      <button className={styles.langBtn} onClick={toggleLanguage} aria-label={t("Toggle Language")}>
        <FaGlobe />
        <span className={styles.langLabel}>{i18n.language === "en" ? "AR" : "EN"}</span>
      </button>
    </header>
  );
}

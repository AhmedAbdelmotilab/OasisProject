import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaGlobe } from "react-icons/fa";
import styles from "./Header.module.css";
import { useUIStore } from "./store/useUIStore";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function Header() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <button className={styles.menuBtn} onClick={toggleSidebar}>
        <FaBars />
      </button>
      {t("Header")}
      <div className={styles.langWrapper} ref={ref}>
        <button
          className={styles.langBtn}
          onClick={() => setOpen((o) => !o)}
          aria-label={t("Toggle Language")}
        >
          <FaGlobe />
          <span>{currentLang.label}</span>
        </button>
        {open && (
          <ul className={styles.langList}>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`${styles.langOption} ${lang.code === i18n.language ? styles.langOptionActive : ""}`}
                  onClick={() => handleSelect(lang.code)}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

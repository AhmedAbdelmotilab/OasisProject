import { FaBars } from "react-icons/fa";
import { useUIStore } from "./store/useUIStore";
import styles from "./Header.module.css";

export default function Header() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <header className={styles.header}>
      <button
        className={styles.menuBtn}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>
      Header
    </header>
  );
}

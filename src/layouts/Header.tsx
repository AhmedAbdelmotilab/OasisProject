import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className={styles.header}>
      <button
        className={styles.menuBtn}
        onClick={onToggleSidebar}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>
      Header
    </header>
  );
}

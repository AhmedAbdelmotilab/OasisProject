import Logo from "./Logo";
import MainNav from "./MainNav";
import styles from "./SideBar.module.css";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
  return (
    <aside className={`${styles.sideBar} ${isOpen ? styles.open : ""}`}>
      <Logo />
      <MainNav onNavigate={onClose} />
    </aside>
  );
}

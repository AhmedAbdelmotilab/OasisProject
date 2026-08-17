import Logo from "./Logo";
import MainNav from "./MainNav";
import { useUIStore } from "./store/useUIStore";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);

  return (
    <aside className={`${styles.sideBar} ${sidebarOpen ? styles.open : ""}`}>
      <Logo />
      <MainNav />
    </aside>
  );
}

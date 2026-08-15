import Logo from "./Logo";
import MainNav from "./MainNav";
import styles from "./SideBar.module.css";
export default function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Logo />
      <MainNav />
    </aside>
  );
}

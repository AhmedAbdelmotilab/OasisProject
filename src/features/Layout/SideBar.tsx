import Logo from "../../Components/Logo";
import MainNav from "../../Components/MainNav";
import styles from "./SideBar.module.css";
export default function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Logo />
      <MainNav />
    </aside>
  );
}

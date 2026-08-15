import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Header from "./Header";
import SideBar from "./SideBar";
export default function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <SideBar />
      <main className={styles.main}>
        <div className={styles.div}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

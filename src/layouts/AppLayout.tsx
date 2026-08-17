import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { useUIStore } from "./store/useUIStore";

export default function AppLayout() {
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const closeSidebar = useUIStore((s) => s.closeSidebar);

  return (
    <div className={styles.container}>
      <Header />
      <SideBar />
      {sidebarOpen && <div className={styles.overlay} onClick={closeSidebar} />}
      <main className={styles.main}>
        <div className={styles.div}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

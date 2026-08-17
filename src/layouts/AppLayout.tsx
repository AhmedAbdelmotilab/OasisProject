import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Header from "./Header";
import SideBar from "./SideBar";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header onToggleSidebar={() => setSidebarOpen((sidebarOpen) => !sidebarOpen)} />
      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}
      <main className={styles.main}>
        <div className={styles.div}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

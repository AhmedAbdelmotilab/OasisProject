import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUIStore } from "./store/useUIStore";
import styles from "./MainNav.module.css";

function MainNav() {
  const closeSidebar = useUIStore((s) => s.closeSidebar);
  const { t } = useTranslation();

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineHome />
            <span>{t("Home")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineCalendarDays />
            <span>{t("Bookings")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineHomeModern />
            <span>{t("Cabins")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineUsers />
            <span>{t("Users")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineCog6Tooth />
            <span>{t("Settings")}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;

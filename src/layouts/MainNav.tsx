import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useUIStore } from "./store/useUIStore";
import styles from "./MainNav.module.css";

function MainNav() {
  const closeSidebar = useUIStore((s) => s.closeSidebar);

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
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;

import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <HiOutlineHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
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

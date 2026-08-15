import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.div}>
      <img className={styles.div} src="logo-light.png" alt="Logo" />
    </div>
  );
}

export default Logo;

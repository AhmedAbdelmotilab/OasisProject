import styles from "./TodayActivity.module.css";

function TodayActivity() {
  return (
    <div className={`${styles.box} ${styles.today}`}>
      <div className={styles.horizontal}>
        <h2 className={`${styles.heading} ${styles.h2}`}>Today</h2>
      </div>
    </div>
  );
}

export default TodayActivity;

import styles from "./Account.module.css";

function Account() {
  return (
    <>
      <h1 className={`${styles.heading} ${styles.h1}`}>Update your account</h1>

      <div className={styles.vertical}>
        <h3 className={`${styles.heading} ${styles.h3}`}>Update user data</h3>
        <p>Update user data form</p>
      </div>

      <div className={styles.vertical}>
        <h3 className={`${styles.heading} ${styles.h3}`}>Update password</h3>
        <p>Update user password form</p>
      </div>
    </>
  );
}

export default Account;

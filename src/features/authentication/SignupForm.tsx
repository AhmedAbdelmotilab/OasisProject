import styles from "./SignupForm.module.css";

function SignupForm() {
  return (
    <form className={`${styles.form} ${styles.regular}`}>
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="fullName">
          Full name
        </label>
        <input className={styles.input} type="text" id="fullName" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="email">
          Email address
        </label>
        <input className={styles.input} type="email" id="email" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="password">
          Password (min 8 characters)
        </label>
        <input className={styles.input} type="password" id="password" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="passwordConfirm">
          Repeat password
        </label>
        <input
          className={styles.input}
          type="password"
          id="passwordConfirm"
        />
      </div>

      <div className={styles.formRow}>
        <button
          type="reset"
          className={`${styles.secondary} ${styles.medium}`}
        >
          Cancel
        </button>
        <button className={`${styles.primary} ${styles.medium}`}>
          Create new user
        </button>
      </div>
    </form>
  );
}

export default SignupForm;

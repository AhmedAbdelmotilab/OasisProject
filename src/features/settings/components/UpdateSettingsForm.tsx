import styles from "./UpdateSettingsForm.module.css";

function UpdateSettingsForm() {
  return (
    <form className={`${styles.form} ${styles.regular}`}>
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="min-nights">
          Minimum nights/booking
        </label>
        <input className={styles.input} type="number" id="min-nights" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="max-nights">
          Maximum nights/booking
        </label>
        <input className={styles.input} type="number" id="max-nights" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="max-guests">
          Maximum guests/booking
        </label>
        <input className={styles.input} type="number" id="max-guests" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="breakfast-price">
          Breakfast price
        </label>
        <input
          className={styles.input}
          type="number"
          id="breakfast-price"
        />
      </div>
    </form>
  );
}

export default UpdateSettingsForm;

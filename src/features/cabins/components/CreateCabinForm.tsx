import styles from "./CreateCabinForm.module.css";

function CreateCabinForm() {
  return (
    <form className={`${styles.form} ${styles.regular}`}>
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="name">
          Cabin name
        </label>
        <input className={styles.input} type="text" id="name" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="maxCapacity">
          Maximum capacity
        </label>
        <input className={styles.input} type="number" id="maxCapacity" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="regularPrice">
          Regular price
        </label>
        <input className={styles.input} type="number" id="regularPrice" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="discount">
          Discount
        </label>
        <input
          className={styles.input}
          type="number"
          id="discount"
          defaultValue={0}
        />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="description">
          Description for website
        </label>
        <textarea
          className={styles.textarea}
          id="description"
          defaultValue=""
        />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="image">
          Cabin photo
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className={styles.fileInput}
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
          Edit cabin
        </button>
      </div>
    </form>
  );
}

export default CreateCabinForm;

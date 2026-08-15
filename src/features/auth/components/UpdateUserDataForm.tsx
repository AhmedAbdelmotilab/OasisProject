import { useState } from "react";
import type { FormEvent } from "react";

import styles from "./UpdateUserDataForm.module.css";

import { useUser } from "../hooks/useUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState<File | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${styles.regular}`}
    >
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="email">
          Email address
        </label>
        <input className={styles.input} value={email} disabled id="email" />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="fullName">
          Full name
        </label>
        <input
          className={styles.input}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="avatar">
          Avatar image
        </label>
        <input
          className={styles.fileInput}
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files?.[0] ?? null)}
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
          Update account
        </button>
      </div>
    </form>
  );
}

export default UpdateUserDataForm;

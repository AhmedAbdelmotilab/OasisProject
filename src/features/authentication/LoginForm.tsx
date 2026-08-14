import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${styles.regular}`}>
      <div className={styles.formRowVertical}>
        <label className={styles.label} htmlFor="email">
          Email address
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.formRowVertical}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.formRowVertical}>
        <button className={`${styles.primary} ${styles.large}`}>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;

import { useMoveBack } from "../hooks/useMoveBack";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className={styles.fullPage}>
      <div className={styles.box}>
        <h1 className={`${styles.heading} ${styles.h1}`}>
          The page you are looking for could not be found 😢
        </h1>
        <button onClick={moveBack}>&larr; Go back</button>
      </div>
    </main>
  );
}

export default PageNotFound;

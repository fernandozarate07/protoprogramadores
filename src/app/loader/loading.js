import styles from "./loader.module.css";
// app/loading.js
export default function Loading() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
    </div>
  );
}

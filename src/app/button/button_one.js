import styles from "./button.module.css";
export default function Button_one({ content }) {
  return (
    <button className={styles.btn}>
      <span>{content}</span>
    </button>
  );
}

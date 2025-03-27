import styles from "./page.module.css";
import Footer from "../footer/footer";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Footer />
      </main>
    </div>
  );
}

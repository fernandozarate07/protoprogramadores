import styles from "./page.module.css";
import Footer from "../footer/footer";
import About_section from "../section/about/about";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <About_section />
        <Footer />
      </main>
    </div>
  );
}

import styles from "./page.module.css";
import Footer from "../footer/footer";
import Contact_section from "../section/contact/contact";

export default function Contact() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Contact_section />
        <Footer />
      </main>
    </div>
  );
}

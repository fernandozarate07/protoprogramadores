import styles from "./page.module.css";
import Hero from "./section/hero/hero";
import Services from "./section/service/services";
import Faq from "./section/faq/faq";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Services />
        <Faq />
      </main>
    </div>
  );
}

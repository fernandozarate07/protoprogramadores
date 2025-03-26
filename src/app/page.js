import styles from "./page.module.css";
import Hero from "./section/hero/hero";
import Services from "../app/section/service/services";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

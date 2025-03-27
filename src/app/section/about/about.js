import styles from "./about.module.css";
import { IoIosLink } from "react-icons/io";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.description_container}>
        <h2 className={styles.title}>Sobre Nosotros</h2>
        <h3 className={styles.logo}>Protoprogramadores</h3>
        <p className={styles.description}>
          Somos una agencia digital con sede en <span>San Juan, Argentina</span>. Nos especializamos en diseño,
          desarrollo y branding. Trabajamos con clientes de todo el mundo, creando sitios web y servicios digitales
          personalizados que potencian su <span>crecimiento</span>. Simplificamos cada etapa del proceso para ofrecer
          soluciones estratégicas y efectivas que <span>impulsan tus metas</span>.
        </p>
      </div>
      <div className={styles.description_links}>
        <a
          href="https://www.fernandozarate.website"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link_web}>
          www.fernandozarate.website <IoIosLink />
        </a>
      </div>
    </div>
  );
}

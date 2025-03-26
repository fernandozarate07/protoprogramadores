// import Image from "next/image";
import styles from "./services.module.css";
import Button_one from "../../button/button_one";

export default function Services() {
  return (
    <div className={styles.services}>
      <h2 className={styles.title}>Nuestro Servicios</h2>

      <div className={styles.card_container}>
        {/* card uno */}
        <div className={styles.card}>
          <h3 className={styles.card_title}>DISEÑO WEB</h3>
          <p className={styles.card_description}>
            Creamos experiencias digitales atractivas y funcionales, combinando diseño intuitivo con una navegación
            fluida para optimizar la interacción del usuario.
          </p>
        </div>
        {/* card dos */}
        <div className={styles.card}>
          <h3 className={styles.card_title}>BRANDING</h3>
          <p className={styles.card_description}>
            Damos vida a tu marca con identidad visual única y estrategias de posicionamiento, asegurando que destaque y
            se conecte con tu audiencia ideal.
          </p>
        </div>
        {/* card tres */}
        <div className={styles.card}>
          <h3 className={styles.card_title}>DESARROLLO WEB</h3>
          <p className={styles.card_description}>
            Construimos sitios y aplicaciones web escalables, optimizados para rendimiento, seguridad y SEO,
            garantizando una presencia digital eficiente y profesional.
          </p>
        </div>
      </div>

      <Button_one content={"Contáctanos"} />
    </div>
  );
}

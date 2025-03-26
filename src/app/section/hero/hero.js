import Image from "next/image";
import styles from "./hero.module.css";
import Button_one from "../../button/button_one";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text_container}>
        <h1 className={styles.text}>Vos tranqui, de tu web nos encargamos nosotros.</h1>
        <p className={styles.description}>
          Nuestro objetivo es
          <span className={styles.strong}> IMPULSAR el crecimiento de empresas y emprendedores </span>con una presencia
          online que destaque y los ayude a alcanzar sus metas.
        </p>
        <Button_one content={"Empezar"} />
      </div>
      <div className={styles.image_container}>
        <Image src="/image/hero/hero_img.svg" alt="imagen del hero" width={700} height={700} />
      </div>
    </div>
  );
}

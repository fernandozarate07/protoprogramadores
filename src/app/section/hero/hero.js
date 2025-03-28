import Image from "next/image";
import styles from "./hero.module.css";
import Button_one from "../../button/button_one";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text_container}>
        <h1 className={styles.text}>
          <span>Vos</span> tranqui, de tu web nos encargamos <span>nosotros</span>.
        </h1>
        <p className={styles.description}>
          Nuestro objetivo es
          <span className={styles.strong}> IMPULSAR </span>el crecimiento de empresas y emprendedores con una presencia
          online que destaque y los ayude a alcanzar sus<span className={styles.strong}> METAS</span>.
        </p>
        <Button_one content={"Empezar"} />
      </div>
      <div className={styles.image_container}>
        <Image
          src="/image/hero/hero_img.svg"
          alt="imagen del hero"
          width={600}
          height={600}
          className={styles.hero_img}
        />
      </div>
    </div>
  );
}

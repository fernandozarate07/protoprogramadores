import { RiInstagramFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import styles from "./footer.module.css";
import Image from "next/image";
import Button_one from "../button/button_one";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info_container}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>
            Has llegado al <span>sitio ideal </span>en el <span>momento justo</span>.
          </h2>
          <p className={styles.description_title}>
            Comunicate con nosotros , te presupuestamos tu web gratis en menos de 24hs.
          </p>
        </div>
        {/* box 2 */}
        <div className={styles.box}>
          <h3 className={styles.item_title}>EMAIL</h3>
          <p className={styles.item_description}>contacto@</p>
          <p className={styles.item_description}>protoprogramadores.com</p>
        </div>
        {/* box 3 */}
        <div className={styles.box}>
          <h3 className={styles.item_title}>TELÉFONO</h3>
          <p className={styles.item_description}>+54 264 6271151</p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.item_title}>UBICACIÓN</h3>
          <p className={styles.item_description}>San Juan, Argentina.</p>
        </div>
        <div className={styles.box}></div>
        <div className={styles.social_container}>
          <a
            className={styles.icon_container}
            href="https://www.instagram.com/protoprogramadores"
            target="_blank"
            rel="noopener noreferrer">
            <RiInstagramFill />
          </a>
          <a
            className={styles.icon_container}
            href="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!"
            target="_blank"
            rel="noopener noreferrer">
            <BiLogoGmail />
          </a>
        </div>
        <p className={styles.copy}>© 2025. Casi todos los derechos reservados</p>
      </div>
      <div className={styles.img_container}>
        <Image
          src="/image/logo.svg"
          alt="imagen de avatar de perfil"
          className={styles.hero_img}
          width={200}
          height={200}
        />
        <Button_one content={"Contáctanos"} />
      </div>
    </footer>
  );
}

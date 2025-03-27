"use client"; // Esto hace que el componente se ejecute en el lado del cliente

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css"; // Asegúrate de tener el archivo de estilos
import Toogle_dk from "../toggle_dk/toggle_dk";

const Nav = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpieza
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isBlurred ? styles.blurred : ""}`}>
      <Link href="/" className={styles.logo_container}>
        <Image src="/image/logo.svg" alt="imagen de avatar de perfil" className={styles.logo} width={80} height={80} />
        <span className={styles.logo_text}>Protoprogramadores</span>
      </Link>
      <div className={styles.nav_bar}>
        <Link href="/" className={styles.page}>
          Inicio
        </Link>
        <Link href="/about" className={styles.page}>
          Sobre Nosotros
        </Link>
        <Link href="/contact" className={styles.page}>
          Contacto
        </Link>
        <div className={styles.color_toggle}>
          <Toogle_dk />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

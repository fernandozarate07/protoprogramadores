"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";
import Toogle_dk from "../toggle_dk/toggle_dk";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav className={`${styles.nav} ${isBlurred ? styles.blurred : ""}`}>
      <Link href="/" className={styles.logo_container}>
        <Image src="/image/logo.svg" alt="imagen de avatar de perfil" className={styles.logo} width={50} height={50} />
        <span className={styles.logo_text}>Protoprogramadores</span>
      </Link>

      <div className={`${styles.nav_bar} ${isChecked ? styles.active : ""}`}>
        <div className={styles.color_toggle}>
          <Toogle_dk />
        </div>
        <Link href="/" className={styles.page} onClick={() => setIsChecked(false)}>
          Inicio
        </Link>
        <Link href="/about" className={styles.page} onClick={() => setIsChecked(false)}>
          Sobre Nosotros
        </Link>
        <Link href="/contact" className={styles.page} onClick={() => setIsChecked(false)}>
          Contacto
        </Link>
      </div>

      <label className={styles.hamburger}>
        <input type="checkbox" checked={isChecked} onChange={toggleMenu} />
        <svg viewBox="0 0 32 32">
          <path
            className={`${styles.line} ${styles.line_top_bottom}`}
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className={styles.line} d="M7 16 27 16"></path>
        </svg>
      </label>
    </nav>
  );
};

export default Nav;

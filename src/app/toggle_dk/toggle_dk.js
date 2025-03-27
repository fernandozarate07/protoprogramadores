"use client";

import { useState, useEffect } from "react";
import styles from "./toggle_dk.module.css";

export default function Toggle_dk() {
  const [isLight, setIsLight] = useState(false); // Modo oscuro por defecto

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "light";
    setIsLight(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (light) => {
    if (light) {
      document.body.style.background = "#ffffff";
      document.body.style.color = "#000000";
      document.body.style.transition = "ease .3s";
    } else {
      document.body.style.background = "";
      document.body.style.color = "";
    }
  };

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isLight} onChange={toggleTheme} />
      <span className={styles.slider}></span>
    </label>
  );
}

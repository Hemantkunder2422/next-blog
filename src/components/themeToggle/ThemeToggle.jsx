"use client";

import { ThemeContext } from "@/content/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "light"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#fff" }
      }
    >
      <Image
        src="/moon.png"
        alt="theme-icon"
        width={14}
        height={14}
        className={styles.toggleImg}
      />
      <div
        className={styles.themeToggleThumb}
        style={
          theme === "light"
            ? { right: "1px", backgroundColor: "#fff" }
            : { left: "1px", backgroundColor: "#0f172a" }
        }
      ></div>
      <Image
        src="/sun.png"
        alt="theme-icon"
        width={14}
        height={14}
        className={styles.toggleImg}
      />
    </div>
  );
};

export default ThemeToggle;

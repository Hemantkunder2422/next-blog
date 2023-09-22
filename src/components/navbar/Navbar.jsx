import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" height={24} width={24} />
        <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        <Image src="/tiktok.png" alt="instagram" height={24} width={24} />
        <Image src="/youtube.png" alt="youtube" height={24} width={24} />
      </div>
      <div className={styles.logo}>InkScribe</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          HomePage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

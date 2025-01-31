"use client";

import React, { useState } from "react";
import NavLink from "./nav-link";
import Link from "next/link";
import styles from "./main-header.module.css";

const MainHeader = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(styles.nav_toggle);
  console.log(toggleIcon);

  const toggleNav = () => {
    setActiveNav((open) => !open);
    setToggleIcon((style) =>
      style === styles.nav_toggle
        ? `${styles.nav_toggle} ${styles.toggle}`
        : styles.nav_toggle
    );
  };
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.title} href="/">
          Morabeza
        </Link>

        <nav className={styles.nav}>
          <ul
            className={
              activeNav
                ? `${styles.nav_menu} ${styles.active}`
                : `${styles.nav_menu}`
            }
          >
            <li className={styles.nav_item}>
              <NavLink href="/">Home</NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink href="/about">Sobre Nos</NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink href="/agua">A Agua-fix me!</NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink href="/contact">Contactos</NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink href="blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.nav_overlay}></div>
        <div onClick={toggleNav} className={toggleIcon}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;

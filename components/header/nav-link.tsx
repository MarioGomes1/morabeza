"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./nav-link.module.css";
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  return (
    <Link
      className={
        path === href ? `${styles.active} ${styles.link}` : styles.link
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;

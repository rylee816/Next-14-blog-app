"use client";
import React from "react";
import Link from "next/link";
import Styles from "../../navbar.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ route }) {
  const pathname = usePathname();
  return (
    <Link
      className={`Styles.navLinks ${route.path === pathname && Styles.active}`}
      href={route.path}
    >
      {route.title}
    </Link>
  );
}

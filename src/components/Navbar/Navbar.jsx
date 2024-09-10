import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import Styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={Styles.Navbar}>
      <div className="brand">
        <Link href="/">LOGO</Link>
      </div>
      <div className={Styles.navLinks}>
        <Links />
      </div>
    </div>
  );
}

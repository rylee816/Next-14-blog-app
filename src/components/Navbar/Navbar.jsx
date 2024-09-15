import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import Styles from './navbar.module.css'
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={Styles.Navbar}>
      <div className={Styles.brand}>
        <Link href="/">
          <Image className={Styles.image} src='/woozleimage.png' fill alt="woozle" priority={true} sizes={'100%'}/>
        </Link>
      </div>
      <div className={Styles.navLinks}>
        <Links />
      </div>
    </div>
  );
}

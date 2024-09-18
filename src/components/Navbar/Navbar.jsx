import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import Styles from './navbar.module.css'
import Image from "next/image";
import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className={Styles.Navbar}>
      <div className={Styles.brand}>
        <Link href="/">
          <Image className={Styles.image} src='/woozleimage.png' fill alt="woozle" priority={true} sizes={'100%'}/>
        </Link>
      </div>
      <div className={Styles.navLinks}>
        <Links session={session}/>
      </div>
    </div>
  );
}

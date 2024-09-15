"use client";
import NavLink from "./navLink/NavLink";
import React, { useState } from "react";
import Styles from "../navbar.module.css";
import Image from "next/image";

let routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Links() {
  const [isOpen, setIsOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = false;

  return (
    <div>
      <div className={Styles.navLinks}>
        {routes.map((route, idx) => (
          <NavLink key={idx} route={route} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink route={{ title: "Admin", path: "/admin" }} />}
            <button className={Styles.signoutBtn}>Sign Out</button>
          </>
        ) : (
          <NavLink path={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <div className={Styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <Image src={'/menu.png'} alt="" fill/>
      </div>
      {isOpen && (
        <div className={isOpen && Styles.mobileLinks}>
          {routes.map((route, idx) => (
            <NavLink key={idx} route={route} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLink route={{ title: "Admin", path: "/admin" }} />
              )}
              <button className={Styles.signoutBtn}>Sign Out</button>
            </>
          ) : (
            <NavLink path={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
}

import NavLink from "./navLink/NavLink";
import React from "react";
import Styles from '../navbar.module.css'

export default function Links() {

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

  // TEMPORARY
  const session = true;
  const isAdmin = false;

  return (
    <div className={Styles.navLinks}>
      {routes.map((route, idx) => 
      (
        <NavLink key={idx} route={route}/>
      ))}
      {session ? (
        <>
        {isAdmin && <NavLink route={{title: 'Admin', path: '/admin'}} />}
        <button className={Styles.signoutBtn}>Sign Out</button>
        </>
      ) : (
        <NavLink path={{title: 'Login', path: '/login'}}/>
      )
    }
    </div>
  );
}

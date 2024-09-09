"use client"
import Link from "next/link";
import React from "react";

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
      path: "blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];
  return (
    <div>
      {routes.map((route) => (
        <Link key={route.title} href={route.path}>
          {route.title}
        </Link>
      ))}
    </div>
  );
}

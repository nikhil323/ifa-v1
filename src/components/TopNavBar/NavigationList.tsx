"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

//css
import topStyle from "./topNavBar.module.css";

const NavigationList = () => {
  const pathname = usePathname();
  return (
    <nav className={topStyle.navigationLinkContainer}>
      <Link
        href="/"
        scroll={false}
        className={`${topStyle.navigationLink} ${
          pathname === "/" ? `${topStyle.activeLink}` : ""
        }`}
      >
        Home
      </Link>
      <Link
        scroll={false}
        href="/all-posts"
        className={`${topStyle.navigationLink} ${
          pathname.startsWith("/all-posts") ? `${topStyle.activeLink}` : ""
        }`}
      >
        All Posts
      </Link>
      <Link
        href="/about-us"
        className={`${topStyle.navigationLink} ${
          pathname.startsWith("/about-us") ? `${topStyle.activeLink}` : ""
        }`}
      >
        About Us
      </Link>
      <Link
        href="/contact-us"
        className={`${topStyle.navigationLink} ${
          pathname.startsWith("/contact-us") ? `${topStyle.activeLink}` : ""
        }`}
      >
        Contact Us
      </Link>
      <Link
        href="/login-register"
        className={`${topStyle.navigationLink} ${
          pathname.startsWith("/login-register") ? `${topStyle.activeLink}` : ""
        }`}
      >
        Login/Register
      </Link>
    </nav>
  );
};

export default NavigationList;

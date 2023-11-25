"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

//css
import topStyle from "./topNavBar.module.css";

const NavigationList = () => {
  const pathname = usePathname();
  const studentId = localStorage.getItem("studentId");
  const orgId = localStorage.getItem("orgId");
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
      {studentId && (
        <Link
          href="/std-profile"
          className={`${topStyle.navigationLink} ${
            pathname.startsWith("/std-profile") ? `${topStyle.activeLink}` : ""
          }`}
        >
          Profile
        </Link>
      )}

      {orgId && (
        <Link
          href="/add-vacancy"
          className={`${topStyle.navigationLink} ${
            pathname.startsWith("/add-vacancy") ? `${topStyle.activeLink}` : ""
          }`}
        >
          Add Vacancy
        </Link>
      )}

      {orgId && (
        <Link
          href="/org-profile"
          className={`${topStyle.navigationLink} ${
            pathname.startsWith("/org-profile") ? `${topStyle.activeLink}` : ""
          }`}
        >
          Profile
        </Link>
      )}

      {!studentId && !orgId && (
        <Link
          href="/login-register"
          className={`${topStyle.navigationLink} ${
            pathname.startsWith("/login-register")
              ? `${topStyle.activeLink}`
              : ""
          }`}
        >
          Login/Register
        </Link>
      )}
    </nav>
  );
};

export default NavigationList;

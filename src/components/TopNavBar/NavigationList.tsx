"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

//css
import topStyle from "./topNavBar.module.css";

const NavigationList = () => {
  const stId = localStorage?.getItem("studentId");
  const orId = localStorage?.getItem("orgId");

  const [stdId, setStdId] = useState("");
  const [orgId, setOrgId] = useState("");

  useEffect(() => {
    if (stId) {
      setStdId(stId);
    }
    if (orId) {
      setOrgId(orId);
    }
    if (!localStorage) {
      return;
    }
  }, [stId, orId]);
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
      {stdId && (
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
          href="/posted-vacancy"
          className={`${topStyle.navigationLink} ${
            pathname.startsWith("/posted-vacancy")
              ? `${topStyle.activeLink}`
              : ""
          }`}
        >
          View Vacancy
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

      {!stdId && !orgId && (
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

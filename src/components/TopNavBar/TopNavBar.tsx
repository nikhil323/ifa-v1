"use client";

import React, { useState } from "react";
import Image from "next/image";

//images
import IFALogo3 from "../../../public/images/IFA3.png";

//css
import topStyle from "./topNavBar.module.css";
import NavigationList from "./NavigationList";
import Link from "next/link";

const TopNavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // to hide navbar when scrolling down
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbarElement = document.getElementById("nav-container");
  //     if (navbarElement) {
  //       const currentScrollPos = window.pageYOffset;
  //       if (prevScrollPos > currentScrollPos) {
  //         navbarElement.style.top = "0";
  //       } else {
  //         navbarElement.style.top = "-7rem";
  //       }
  //       setPrevScrollPos(currentScrollPos);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  return (
    <div className={topStyle.container} id="nav-container">
      <div className={topStyle.headerContent}>
        <Link href="/">
          <Image
            src={IFALogo3}
            alt="ifa icon"
            className={topStyle.headerContent__logo}
            priority
          />
        </Link>
      </div>
      <NavigationList />
    </div>
  );
};

export default TopNavBar;

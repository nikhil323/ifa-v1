"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

//images
import pathFinderIcon from "../../../public/path-finder-icon-black.png";

//css
import topStyle from "./topNavBar.module.css";
import NavigationList from "./NavigationList";

const TopNavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  //to hide navbar when scrolling down
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
    <React.Fragment>
      <div className={topStyle.container} id="nav-container">
        <div className={topStyle.headerContent}>
          <Image
            src={pathFinderIcon}
            alt="pathfinder icon"
            className={topStyle.headerContent__logo}
            priority
          />
          <h1 className={topStyle.headerContent__title}>Path Finder</h1>
        </div>
        <NavigationList />
      </div>
    </React.Fragment>
  );
};

export default TopNavBar;

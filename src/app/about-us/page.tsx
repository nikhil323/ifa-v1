import React from "react";
import Image from "next/image";

//images
import aboutUs from "../../../public/images/about_us.svg";

//css
import aboutUsStyles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={aboutUsStyles.container}>
      <Image
        src={aboutUs}
        alt="about us"
        className={aboutUsStyles.aboutImage}
      />
      <div className={aboutUsStyles.content}>
        <h3 className={aboutUsStyles.headingText}>About Us</h3>
        <p className={aboutUsStyles.aboutText}>
          Pathfinder is a online platform for internship-seekers who want to do internship and organizations who can add internship 
          opportunity available in their organization.
        </p>
        <h3 className={aboutUsStyles.headingText}>Vision & Objectives</h3>
        <p className={aboutUsStyles.aboutText}>
          Primary goal of Pathfinder is to provide simple and intuitive user experience and opportunities.
          We plan to extend capabilities of Pathfinder by adding counselling, job opportunities and make it a informative
          platform for scholars, students, professionals and organizations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

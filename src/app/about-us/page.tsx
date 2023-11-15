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
        <h3 className={aboutUsStyles.headingText}>some heading</h3>
        <p className={aboutUsStyles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          consequuntur libero fugiat facere perspiciatis delectus accusamus,
          iure incidunt aperiam nostrum! Eaque tempora corporis at. Ullam magni
          magnam quisquam incidunt fugiat est officiis facilis, nulla odio
          expedita atque natus accusantium ut fugit excepturi mollitia placeat
          doloribus nihil culpa tenetur eum. Nihil?
        </p>
        <h3 className={aboutUsStyles.headingText}>some heading</h3>
        <p className={aboutUsStyles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          consequuntur libero fugiat facere perspiciatis delectus accusamus,
          iure incidunt aperiam nostrum! Eaque tempora corporis at. Ullam magni
          magnam quisquam incidunt fugiat est officiis facilis, nulla odio
          expedita atque natus accusantium ut fugit excepturi mollitia placeat
          doloribus nihil culpa tenetur eum. Nihil?
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

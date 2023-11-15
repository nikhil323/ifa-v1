import React from "react";

//css
import loginStyles from "./login.module.css";

//images
import companyLogo from "../../../public/Register-logo.png";
import Image from "next/image";
import SignUp from "../../components/SignUp/SignUp";

const Card = () => {
  return (
    <section className={loginStyles.container}>
      <div className={loginStyles.cardContainer}>
        <section className={loginStyles.topSection}>
          <Image
            alt="pathfinder logo"
            src={companyLogo}
            className={loginStyles.companyLogo}
          />
        </section>
        <hr className={loginStyles.horizontalLineBlack} />

        <SignUp />
      </div>
    </section>
  );
};

export default Card;

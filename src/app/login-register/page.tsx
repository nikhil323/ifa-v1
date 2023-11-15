import React from "react";

//css
import loginStyles from "./login.module.css";

//images
import companyLogo from "../../../public/Register-logo.png";
import Image from "next/image";
import SignUp from "../../components/SignUp/SignUp";
import signupImg from "../../../public/sign_in.svg";

const Card = () => {
  return (
    <>
      <section className={loginStyles.container}>
        <Image
          src={signupImg}
          alt="sign in/up sign"
          className={loginStyles.signUpImg}
        />
        <div className={loginStyles.cardContainer}>
          {/* <section className={loginStyles.topSection}>
            <Image
              alt="pathfinder logo"
              src={companyLogo}
              className={loginStyles.companyLogo}
            />
          </section>
          <hr className={loginStyles.horizontalLineBlack} /> */}

          <SignUp />    
        </div>
      </section>
    </>
  );
};

export default Card;

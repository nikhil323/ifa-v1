"use client";

import React, { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

//css
import loginStyles from "./login.module.css";

//images
import companyLogo from "../../../public/Register-logo.png";
import Image from "next/image";
import Auth from "../../components/Auth/Auth";
import signupImg from "../../../public/sign_in.svg";
import { getUserStatus } from "../utils/utilFunction";

const Card = async () => {
  const router = useRouter();
  const isAuth = getUserStatus();

  useLayoutEffect(() => {
    if (isAuth?.studentId) {
      router.replace("/std-profile");
    } else if (isAuth?.orgId) {
      router.replace("/org-profile");
    }
  }, [isAuth?.studentId, isAuth?.orgId]);

  // try {
  //   const response = await fetch("https://some/dummy/api", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ time: new Date().toISOString() }),
  //   });
  //   console.log("response", response);
  //   const data = await response.json();
  //   console.log("the response data is", data);
  // } catch (e) {
  //   console.log("error ", e);
  // }

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
              alt="IFA logo"
              src={companyLogo}
              className={loginStyles.companyLogo}
            />
          </section>
          <hr className={loginStyles.horizontalLineBlack} /> */}

          <Auth />
        </div>
      </section>
    </>
  );
};

export default Card;

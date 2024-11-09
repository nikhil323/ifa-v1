"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

//image
import profileImg from "../../../public/images/profile.svg";

//css styles
import orgStyles from "./orgStyles.module.css";

//components
import OrgForm from "./OrgForm";
import { getUserStatus } from "../utils/utilFunction";

const OrgProfile = () => {
  const router = useRouter();
  const isAuth = getUserStatus();
  //check if use trying to access the route is org or not
  useLayoutEffect(() => {
    if (!isAuth?.orgId) {
      router.replace("/");
    }
  }, [isAuth?.orgId]);
  return (
    <div className={orgStyles.container}>
      <Image
        src={profileImg}
        alt="Contact us"
        className={orgStyles.profileImg}
      />

      <OrgForm />
    </div>
  );
};

export default OrgProfile;

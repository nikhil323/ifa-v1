"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

//image
import profileImg from "../../../public/images/profile.svg";

//css styles
import profileStyles from "./profileStyles.module.css";

//components
import ProfileForm from "./StdForm";
import { getUserStatus } from "../utils/utilFunction";

const Profile = () => {
  const router = useRouter();
  const isAuth = getUserStatus();
  //check if use trying to access the route is student or not
  useLayoutEffect(() => {
    if (!isAuth?.studentId) {
      router.replace("/");
    }
  }, [isAuth?.studentId]);
  return (
    <div className={profileStyles.container}>
      <Image
        src={profileImg}
        alt="Contact us"
        className={profileStyles.profileImg}
      />

      <ProfileForm />
    </div>
  );
};

export default Profile;

"use client";

import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

//image
import viewPostsImg from "../../../public/images/view_posts.svg";

//css styles
import vancancyStyles from "./postedVacancy.module.css";

//components
import VacancyList from "./VacancyList";
import { getUserStatus } from "../utils/utilFunction";
import { getOrgVacancy } from "../api/auth";

const PostedVacancy = () => {
  const router = useRouter();
  const isAuth = getUserStatus();
  // const data = getOrgVacancy();
  //check if use trying to access the route is org or not
  useLayoutEffect(() => {
    if (!isAuth?.orgId) {
      router.replace("/");
    }
  }, [isAuth?.orgId]);
  return (
    <div className={vancancyStyles.container}>
      <Image
        src={viewPostsImg}
        alt="add post"
        className={vancancyStyles.profileImg}
      />
      <VacancyList />
    </div>
  );
};

export default PostedVacancy;

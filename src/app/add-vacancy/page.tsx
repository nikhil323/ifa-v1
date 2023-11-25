"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

//image
import addPosts from "../../../public/images/add_post.svg";

//css styles
import vancancyStyles from "./vacancy.module.css";

//components
import VacancyForm from "./VacancyForm";
import { getUserStatus } from "../utils/utilFunction";

const AddVacancy = () => {
  const router = useRouter();
  const isAuth = getUserStatus();
  //check if use trying to access the route is org or not
  useLayoutEffect(() => {
    if (!isAuth?.orgId) {
      router.replace("/");
    }
  }, [isAuth?.orgId]);
  return (
    <div className={vancancyStyles.container}>
      <Image
        src={addPosts}
        alt="add post"
        className={vancancyStyles.profileImg}
      />

      <VacancyForm />
    </div>
  );
};

export default AddVacancy;

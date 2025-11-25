"use client";
import React, { useEffect, useState } from "react";
//css
import styles from "./styles.module.css";

import HomePageCard from "./DetailsCard";
import { getMatchingVacancy } from "@/app/api/auth";
import { getUserStatus } from "@/app/utils/utilFunction";

const MatchingJob = () => {
  const [vacancies, setVacancies] = useState([]);
  const [stdId, setStdId] = useState("");
  const isAuth = getUserStatus();
  console.log("the is auth is----->", isAuth);
  useEffect(() => {
    const func = async () => {
      try {
        const matchingVacancy = await getMatchingVacancy();
        setVacancies(matchingVacancy);
      } catch (e) {
        console.log("error fetching matching vacancies", e);
      }
    };
    const stId = localStorage?.getItem("studentId");
    if (stId && !isAuth?.orgId) {
      setStdId(stId);
      func();
    }
  }, [stdId, isAuth?.orgId]);

  console.log("the matching vacancies are", vacancies);
  console.log("the std id is------>", stdId);
  if (isAuth?.orgId) {
    return <></>;
  }
  if (!stdId) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.6rem",
          color: "white",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginBottom: "15px",
          marginTop: "15px",
          backgroundColor: "#40c2a6",
          padding: "10px",
          borderRadius: "4px",
          height: "100px",
        }}
      >
        Login and update your CV to get recommendations based on your skills.
      </p>
    );
  }
  if (vacancies?.length === 0) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.6rem",
          color: "white",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginBottom: "15px",
          marginTop: "15px",
          backgroundColor: "#40c2a6",
          padding: "10px",
          borderRadius: "4px",
          height: "100px",
        }}
      >
        No vacancies match with your skills at the moment. Update your CV to get
        personalized recommendation.
      </p>
    );
  }

  return (
    <>
      <h3 className={styles.cardTitle}>Recommendations</h3>
      <div className={styles.mainContainer}>
        {vacancies?.map((vac: any) => {
          console.log("the vacamcies------>", vacancies);
          return (
            <HomePageCard
              key={vac?.id}
              imageUrl={vac?.banner_img}
              requirements={vac?.requirements}
              id={vac?.id}
              score={vac?.similarity_score}
            />
          );
        })}
        ;
      </div>
    </>
  );
};

export default MatchingJob;

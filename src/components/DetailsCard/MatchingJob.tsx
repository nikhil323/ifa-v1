"use client";
import React, { useEffect, useState } from "react";
//css
import styles from "./styles.module.css";

import HomePageCard from "./DetailsCard";
import { getMatchingVacancy } from "@/app/api/auth";

const MatchingJob = () => {
  const [vacancies, setVacancies] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const matchingVacancy = await getMatchingVacancy();
        setVacancies(matchingVacancy);
      } catch (e) {
        console.log("error fetching matching vacancies", e);
      }
    };
    func();
  }, []);
  console.log("the matching vacancies are", vacancies);
  return (
    <>
      <h3 className={styles.cardTitle}>Recommendations</h3>
      <div className={styles.mainContainer}>
        {vacancies?.map((vac: any) => {
          return (
            <HomePageCard
              key={vac?.id}
              imageUrl={vac?.banner_img}
              description={vac?.description}
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

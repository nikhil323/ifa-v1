"use client";
import React, { useEffect, useState } from "react";
//css
import styles from "./styles.module.css";

import HomePageCard from "./DetailsCard";
import { getMatchingVacancy } from "@/app/api/auth";

interface trendingJobsProps {
  internships: any[];
  title: string;
}

const TrendingJob = ({ internships, title }: trendingJobsProps) => {
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
  const filteredAndSortedInternships = internships
    ?.filter((job) => job.total_applications > 0)
    .sort((a, b) => b.total_applications - a.total_applications);
  return (
    <>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.mainContainer}>
        {title === "Most In Demand" ? (
          <>
            {filteredAndSortedInternships?.map((jobs) => {
              return (
                <HomePageCard
                  key={jobs?.id}
                  imageUrl={jobs?.banner_img}
                  description={jobs?.description}
                  id={jobs?.id}
                />
              );
            })}
          </>
        ) : (
          <>
            {internships?.map((jobs) => {
              return (
                <HomePageCard
                  key={jobs?.id}
                  imageUrl={jobs?.banner_img}
                  description={jobs?.description}
                  id={jobs?.id}
                />
              );
            })}
          </>
        )}

      </div>
    </>
  );
};

export default TrendingJob;

{/* <>
  {vacancies?.map((vac: any) => {
    return (
      <HomePageCard
        key={vac?.id}
        imageUrl={vac?.banner_img}
        description={vac?.description}
        id={vac?.id}
      />
    );
  })}
</>; */}
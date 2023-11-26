import React from "react";
//css
import styles from "./styles.module.css";

import HomePageCard from "./DetailsCard";

interface trendingJobsProps {
  internships: any[];
  title: string;
}

const TrendingJob = ({ internships, title }: trendingJobsProps) => {
  return (
    <>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.mainContainer}>
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
      </div>
    </>
  );
};

export default TrendingJob;

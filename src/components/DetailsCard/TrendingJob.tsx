import React from "react";
//css
import styles from "./styles.module.css";

import HomePageCard from "./DetailsCard";

interface internships {
  id: number;
  imageUrl: any;
  description: string;
  detailLink: string;
}

interface trendingJobsProps {
  internships: internships[];
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
              imageUrl={jobs?.imageUrl}
              description={jobs?.description}
              detailLink={jobs?.detailLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default TrendingJob;

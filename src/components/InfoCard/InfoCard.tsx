import React from "react";

//css
import infoStyles from "./infoCard.module.css";
import Card from "./Card";

const InfoCard = () => {
  return (
    <>
      <div>
        <h3 className={infoStyles.acheivements}>Our Acheivements</h3>
      </div>
      <div className={infoStyles.cardContainer}>
        <div className={infoStyles.rowCard}>
          <Card
            title="Interns Listed"
            count={250}
            description="More than 250 interns have registered."
          />
          <Card
            title="Company Listed"
            count={33}
            description="Top organizations seek interns in Pathfinder."
          />
          <Card
            title="Students Engaged"
            count={1500}
            description="1500+ montly active users."
          />
        </div>
        <div className={infoStyles.rowCard}>
          <Card
            title="Happy Users"
            count={100}
            description="About 100 students got opportunities."
          />
          <Card
            title="Available Vacancy"
            count={150}
            description="150+ available vacancies in different sectors."
          />
          <Card
            title="Active Users"
            count={500}
            description="500+ active users."
          />
        </div>
        <div className={infoStyles.rowCard}>
          <Card
            title="Daily Posts"
            count={25}
            description="25 internship vacancies/posts are added everyday."
          />
          <Card
            title="Total Users"
            count={200}
            description="Total no. of organization and internship seekers."
          />
          <Card
            title="Feedbacks"
            count={5}
            description="On an average we receive more than 5 feedbacks every week."
          />
        </div>
      </div>
    </>
  );
};

export default InfoCard;

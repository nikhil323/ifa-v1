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
            count={31}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
          <Card
            title="Company Listed"
            count={33}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
          <Card
            title="Students Engaged"
            count={100}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
        </div>
        <div className={infoStyles.rowCard}>
          <Card
            title="Happy Users"
            count={200}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
          <Card
            title="Available Vacancy"
            count={300}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
          <Card
            title="Active Users"
            count={500}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
        </div>
        <div className={infoStyles.rowCard}>
          <Card
            title="Daily Posts"
            count={50}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
          <Card
            title="Total Users"
            count={800}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
          <Card
            title="Feedbacks"
            count={100}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
            doloremque ut doloribus est tempora cupiditate voluptate pariatur eos
            impedit!"
          />
        </div>
      </div>
    </>
  );
};

export default InfoCard;

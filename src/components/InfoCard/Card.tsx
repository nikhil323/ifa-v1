import React from "react";

//css
import infoStyles from "./infoCard.module.css";

interface cardProps {
  title: string;
  count: number;
  description: string;
}

const Card = ({ title, count, description }: cardProps) => {
  return (
    <div className={infoStyles.card}>
      <div className={infoStyles.inner}>
        <div className={infoStyles.title}>
          <h3>{title}</h3>
        </div>
        <h1 className={infoStyles.count}>&#x2b;{count}</h1>
        <p className={infoStyles.info}>{description}</p>
      </div>
    </div>
  );
};

export default Card;

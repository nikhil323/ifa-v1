import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const DetailsCard = ({ imageUrl, description, detailLink }: any) => {
  const showLess = (num: number, desc: string) => {
    return desc.slice(0, num) + "...";
  };

  return (
    <div className={styles.cardContainer}>
      <Image src={imageUrl} alt="something" className={styles.image} />
      <p className={styles.description}>
        {showLess(80, description)}
        <span>
          <Link href={detailLink} className={styles.viewDetail}>
            {"View Detail ->"}
          </Link>
        </span>
      </p>
    </div>
  );
};

export default DetailsCard;

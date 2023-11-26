import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "@/app/api/auth";

const DetailsCard = ({ imageUrl, description, id }: any) => {
  const showLess = (num: number, desc: string) => {
    return desc.slice(0, num) + "...";
  };

  return (
    <div className={styles.cardContainer}>
      <Image
        src={
          imageUrl ? `${baseUrl}${imageUrl}` : "https://via.placeholder.com/300"
        }
        alt="something"
        className={styles.image}
        width={100}
        height={100}
      />
      <p className={styles.description}>{showLess(80, description)}</p>
      <div>
        <Link href={`vacancy-detail/${id}`} className={styles.viewDetail}>
          {"View Detail ->"}
        </Link>
      </div>
    </div>
  );
};

export default DetailsCard;

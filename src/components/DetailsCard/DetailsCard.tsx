import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "@/app/api/auth";

const DetailsCard = ({ imageUrl, description, id, score }: any) => {
  const showLess = (num: number, desc: string) => {
    return desc.slice(0, num) + "...";
  };
  console.log("the score is", score);

  return (
    <div className={styles.cardContainer}>
      <Image
        src={
          imageUrl ? `${baseUrl}${imageUrl}` : "https://via.placeholder.com/100"
        }
        alt="something"
        className={styles.image}
        width={100}
        height={100}
      />
      <p className={styles.description}>{showLess(80, description)}</p>
      <div>
        {score ? (
          <p
            style={{
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#52ab98",
              padding: "5px",
            }}
          >
            Matched {(+score * 100)?.toFixed(0)}%
          </p>
        ) : (
          <></>
        )}
      </div>
      <div>
        <Link href={`vacancy-detail/${id}`} className={styles.viewDetail}>
          {"View Detail ->"}
        </Link>
      </div>
    </div>
  );
};

export default DetailsCard;

import React from "react";

//css
import styles from "./carouse.module.css";
import Image from "next/image";

interface item {
  id: number;
  title: string;
  description: string;
  icon: any;
}

interface carouselItemProps {
  item: item;
}

const Carouseltem = ({ item }: carouselItemProps) => {
  return (
    <div className={styles.carousel_item}>
      <div></div>
      <Image
        src={item?.icon}
        alt={item.title}
        className={styles.carousel_img}
      />
      <div className={styles.carousel_item_text}>{item.description}</div>
    </div>
  );
};

export default Carouseltem;

import React from "react";
import postStyle from "./postcard.module.css";
import Image from "next/image";
import { link } from "fs";

const posts = [
  {
    id: 1,
    company_icon: "https://via.placeholder.com/100",
    company_name: "company name 1",
    company_location: "Baneshwor kathmandu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque libero ipsa odit soluta tempore. Repellendus a deleniti totam ex sint?",
    image: "https://via.placeholder.com/610x300",
    imageAlt: "Alt image",
    isVerified: true,
    uploadedTime: "Nov 11 2023",
    deadline: "Dec 11 2023",
    appliedBy: 12,
  },
  {
    id: 2,
    company_icon: "https://via.placeholder.com/100",
    company_name: "company name 2",
    company_location: "lagankhel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque libero ipsa odit soluta tempore. Repellendus a deleniti totam ex sint?",
    image: "https://via.placeholder.com/610x300",
    imageAlt: "Alt image",
    isVerified: false,
    uploadedTime: "Nov 10 2023",
    deadline: "Jan 11 2024",
    appliedBy: 17,
  },
  {
    id: 3,
    company_icon: "https://via.placeholder.com/100",
    company_name: "company name 3",
    company_location: "Baneshwor kathmandu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque libero ipsa odit soluta tempore. Repellendus a deleniti totam ex sint?",
    image: "https://via.placeholder.com/610x300",
    imageAlt: "Alt image",
    isVerified: true,
    uploadedTime: "Nov 11 2023",
    deadline: "Dec 11 2023",
    appliedBy: 12,
  },
];

const LinkedInCard = () => {
  return (
    <article className={postStyle.container}>
      {posts?.map((post) => {
        return (
          <div className={postStyle.card} key={post?.id}>
            <div className={postStyle.header}>
              <img
                src={post?.company_icon}
                alt={post?.company_name}
                className={postStyle.companyLogo}
              />
              <div className={postStyle.companyInfo}>
                <h2 className={postStyle.company__name}>
                  {post?.company_name}{" "}
                  {post?.isVerified && (
                    <div className={postStyle.verified__status}>
                      <span className={postStyle.verified__icon}>&#10003;</span>
                      <span className={postStyle.verified__text}>verified</span>
                    </div>
                  )}
                </h2>
                <p className={postStyle.company__location}>
                  {post?.company_location}
                </p>
              </div>
            </div>
            <div className={postStyle.content}>
              <p className={postStyle.summary}>{post?.description}</p>
            </div>
            <div className={postStyle.content__image}>
              <img alt={post?.imageAlt} src={post?.image} />
            </div>
            <div className={postStyle.footer}>
              <div>
                <h3 className={postStyle.appliedby}>
                  Applied By : {post?.appliedBy}
                </h3>
              </div>
              <div>
                <h3 className={postStyle?.uploaded__time}>
                  Posted on : {post?.uploadedTime}
                </h3>
                <h3 className={postStyle?.uploaded__time}>
                  Deadline : {post?.deadline}
                </h3>
              </div>
              {/* <button className={postStyle.apply__btn}>
                Suggest more of this
              </button> */}
              <button className={postStyle.apply__btn}>Apply</button>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default LinkedInCard;

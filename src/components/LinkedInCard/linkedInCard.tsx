import React from "react";
import linkedInStyle from "./linkedIncard.module.css";
import Image from "next/image";

const posts = [
  {
    id: 1,
    company_icon: "https://via.placeholder.com/100",
    company_name: "company name 1",
    company_location: "Baneshwor kathmandu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque libero ipsa odit soluta tempore. Repellendus a deleniti totam ex sint?",
    image: "https://via.placeholder.com/530x300",
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
    image: "https://via.placeholder.com/530x300",
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
    image: "https://via.placeholder.com/530x300",
    imageAlt: "Alt image",
    isVerified: true,
    uploadedTime: "Nov 11 2023",
    deadline: "Dec 11 2023",
    appliedBy: 12,
  },
];

const LinkedInCard = () => {
  return (
    <>
      {posts?.map((post) => {
        return (
          <div className={linkedInStyle.card} key={post?.id}>
            <div className={linkedInStyle.header}>
              <img
                src={post?.company_icon}
                alt={post?.company_name}
                className={linkedInStyle.companyLogo}
              />
              <div className={linkedInStyle.companyInfo}>
                <h2 className={linkedInStyle.company__name}>
                  {post?.company_name}{" "}
                  {post?.isVerified && (
                    <div className={linkedInStyle.verified__status}>
                      <span className={linkedInStyle.verified__icon}>
                        &#10003;
                      </span>
                      <span className={linkedInStyle.verified__text}>
                        verified
                      </span>
                    </div>
                  )}
                </h2>
                <p className={linkedInStyle.company__location}>
                  {post?.company_location}
                </p>
              </div>
            </div>
            <div className={linkedInStyle.content}>
              <p className={linkedInStyle.summary}>{post?.description}</p>
            </div>
            <div className={linkedInStyle.content__image}>
              <img alt={post?.imageAlt} src={post?.image} />
            </div>
            <div className={linkedInStyle.footer}>
              <div>
                <h3 className={linkedInStyle.appliedby}>
                  Applied By : {post?.appliedBy}
                </h3>
              </div>
              <div>
                <h3 className={linkedInStyle?.uploaded__time}>
                  Posted on : {post?.uploadedTime}
                </h3>
                <h3 className={linkedInStyle?.uploaded__time}>
                  Deadline : {post?.deadline}
                </h3>
              </div>
              {/* <button className={linkedInStyle.apply__btn}>
                Suggest more of this
              </button> */}
              <button className={linkedInStyle.apply__btn}>Apply</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LinkedInCard;

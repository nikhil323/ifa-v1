import React from "react";
import postStyle from "./postcard.module.css";
import Image from "next/image";
import { link } from "fs";
import ApplyBtn from "@/app/vacancy-detail/[id]/ApplyBtn";

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

const LinkedInCard = ({ vacancies }: any) => {
  console.log("the vacancies list in linked in card", vacancies);
  return (
    <article className={postStyle.container}>
      {vacancies?.map((post: any) => {
        return (
          <div className={postStyle.card} key={post?.id}>
            <div className={postStyle.header}>
              <Image
                src={
                  post?.organization?.photo ?? "https://via.placeholder.com/150"
                }
                alt={post?.organization?.organization_name}
                className={postStyle.companyLogo}
                width={150}
                height={150}
              />
              <div className={postStyle.companyInfo}>
                <h2 className={postStyle.company__name}>
                  {post?.organization?.organization_name}{" "}
                  {post?.organization?.is_verified && (
                    <div className={postStyle.verified__status}>
                      <span className={postStyle.verified__icon}>&#10003;</span>
                      <span className={postStyle.verified__text}>verified</span>
                    </div>
                  )}
                </h2>
                <p className={postStyle.company__location}>{post?.location}</p>
              </div>
            </div>
            <div className={postStyle.content}>
              <p className={postStyle.summary}>{post?.description}</p>
            </div>
            <div className={postStyle.content__image}>
              <Image
                alt={post?.imageAlt}
                src={post?.banner_img ?? "https://via.placeholder.com/630x280"}
                width={630}
                height={280}
              />
            </div>
            <div className={postStyle.footer}>
              <div>
                <h3 className={postStyle.appliedby}>
                  Applied By : {post?.total_applications ?? 0}
                </h3>
              </div>
              <div>
                <h3 className={postStyle?.uploaded__time}>
                  Posted on : {post?.created_at ?? ""}
                </h3>
                <h3 className={postStyle?.uploaded__time}>
                  Deadline : {post?.application_deadline ?? ""}
                </h3>
              </div>
              <ApplyBtn id={post?.id} />
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default LinkedInCard;

import React from "react";
import postStyle from "./postcard.module.css";
import Image from "next/image";
import { link } from "fs";
import ApplyBtn from "@/app/vacancy-detail/[id]/ApplyBtn";

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
                src={post?.banner_img ?? "https://via.placeholder.com/545x280"}
                width={545}
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

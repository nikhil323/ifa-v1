import React from "react";

//css
import vacancyListStyle from "./vacancyDetail.module.css";
import Link from "next/link";
import ApplyBtn from "./ApplyBtn";
import Image from "next/image";

const VacancyList = ({ vacancy }: any) => {
  console.log("vacancy in list", vacancy);
  return (
    <div className={vacancyListStyle.container}>
      <article className={vacancyListStyle.inner}>
        <div className={vacancyListStyle.card}>
          <div className={vacancyListStyle.header}>
            <Image
              src={vacancy?.company_icon}
              alt={vacancy?.organization?.organization_name}
              className={vacancyListStyle.companyLogo}
              // width={250}
              // height={250}
            />
            <div className={vacancyListStyle.companyInfo}>
              <h2 className={vacancyListStyle.company__name}>
                {vacancy?.organization?.organization_name}{" "}
                {vacancy?.organization?.is_verified && (
                  <div className={vacancyListStyle.verified__status}>
                    <span className={vacancyListStyle.verified__icon}>
                      &#10003;
                    </span>
                    <span className={vacancyListStyle.verified__text}>
                      verified
                    </span>
                  </div>
                )}
              </h2>
              <p className={vacancyListStyle.company__location}>
                {vacancy?.location}
              </p>
            </div>
          </div>
          <div className={vacancyListStyle.content}>
            <p className={vacancyListStyle.summary}>{vacancy?.description}</p>
          </div>
          <div className={vacancyListStyle.content__image}>
            <Image
              alt={vacancy?.job_type}
              src={vacancy?.banner_img}
              width={630}
              height={280}
            />
          </div>
          <div className={vacancyListStyle.footer}>
            <div>
              <h3 className={vacancyListStyle.appliedby}>
                Job type : {vacancy?.job_type ?? ""}
              </h3>
              <h3 className={vacancyListStyle.appliedby}>
                Applied by : {vacancy?.appliedBy ?? 0}
              </h3>
            </div>
            <div>
              <h3 className={vacancyListStyle?.uploaded__time}>
                Posted on : {vacancy?.start_date}
              </h3>
              <h3 className={vacancyListStyle?.uploaded__time}>
                Deadline : {vacancy?.application_deadline}
              </h3>
            </div>
            <ApplyBtn id={vacancy?.id} />
          </div>
        </div>
      </article>
      <section className={vacancyListStyle.infoSection}>
        <div className={vacancyListStyle.organization}>
          <h2 className={vacancyListStyle.industryName}>
            {vacancy.organization.industry}
          </h2>
          <p>Phone: {vacancy.organization.phone_no}</p>
          <p>Alt Phone: {vacancy.organization.alt_phone_no}</p>
          <Link
            href={vacancy.organization.website}
            className={vacancyListStyle.industryWebsite}
          >
            Website: {vacancy.organization.website}
          </Link>
          <p>
            Verified Company: {vacancy.organization.is_verified ? "Yes" : "No"}
          </p>
        </div>
        <div className={vacancyListStyle.details}>
          <p>Salary: {vacancy.salary}</p>
          <p>Duration: {vacancy.duration} months</p>
          <p>Requirements: {vacancy.requirements}</p>
          <p>Job Type: {vacancy.job_type}</p>
          <p>Contact Email: {vacancy.contact_email}</p>
        </div>
      </section>
    </div>
  );
};

export default VacancyList;

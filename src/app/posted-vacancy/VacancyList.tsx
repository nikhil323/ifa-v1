"use client";

import React, { useEffect, useState } from "react";

import vacancyStyles from "./postedVacancy.module.css";
import Link from "next/link";
import { getOrgVacancy } from "../api/auth";

const VacancyList = ({ vacancyData }: any) => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const data = await getOrgVacancy();
        setVacancies(data);
      } catch (e) {
        console.error("Error fetching vacancies:", e);
      }
    };
    func();
  }, []);
  console.log("the data is", vacancies);
  return (
    <div className={vacancyStyles.content}>
      <h2 className={vacancyStyles.title}>Posted Vacancy</h2>

      <div className={vacancyStyles.inner}>
        {vacancies?.map((item: any) => {
          return (
            <div key={item?.id} className={vacancyStyles.listItems}>
              <h3 className={vacancyStyles.itemTitle}>{item?.job_type}</h3>
              <p style={{ marginBottom: "5px" }}>
                Description: {item?.description}
              </p>
              <p style={{ marginBottom: "5px" }}>
                Application Deadline :{item?.application_deadline}
              </p>
              <p style={{ marginBottom: "5px" }}>
                Email :{item?.contact_email}
              </p>
              <p style={{ marginBottom: "5px" }}>
                Phone :{item?.contact_phone}
              </p>
              <p style={{ marginBottom: "5px" }}>
                Duration : {item?.duration} Months
              </p>
              <p style={{ marginBottom: "5px" }}>Location: {item?.location}</p>
              <p style={{ marginBottom: "5px" }}>
                Requirements: {item?.requirements}
              </p>
              <p style={{ marginBottom: "5px" }}>Salary: {item?.salary}</p>
              <p style={{ marginBottom: "5px" }}>
                Total Applications: {item?.total_applications}
              </p>
              {/* <Link href="#" className={vacancyStyles.viewDetail}>
                {"View More ->"}
              </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VacancyList;

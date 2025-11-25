"use client";

import React, { useEffect, useState } from "react";

import vacancyStyles from "./postedVacancy.module.css";
import Link from "next/link";
import { applyVacancy, getOrgVacancy, getUniqueSkills } from "../api/auth";

const VacancyList = ({ vacancyData }: any) => {
  const [vacancies, setVacancies] = useState([]);

  // useEffect(() => {
  //   const func = async () => {
  //     try {
  //       const data = await getOrgVacancy();
  //       setVacancies(data);
  //     } catch (e) {
  //       console.error("Error fetching vacancies:", e);
  //     }
  //   };
  //   func();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const vacanciesData = await getOrgVacancy();

        const vacanciesWithSkills = await Promise.all(
          vacanciesData.map(async (v: any) => {
            const skills = await getUniqueSkills(v.id); // fetch skills per vacancy
            return {
              ...v,
              uniqueSkills: skills || [],
            };
          })
        );
        // @ts-ignore
        setVacancies(vacanciesWithSkills);
      } catch (e) {
        console.error("Error fetching vacancies:", e);
      }
    };

    fetchData();
  }, []);
  console.log("the data is", vacancies);

  const handleApplyVacancy = async (vacancyId: number) => {
    const body = {
      vacancy: vacancyId,
    };
    try {
      const res = await applyVacancy(body);
      console.log("the res of apply vacancy is", res);
    } catch (e) {
      console.log("error during vacancy applying", e);
    }
  };
  return (
    <div className={vacancyStyles.content}>
      <h2 className={vacancyStyles.title}>Posted Vacancy</h2>
      {/* <button
        style={{
          padding: "5px",
          borderRadius: "4px",
          background: "#52ab98",
          color: "white",
        }}
      >
        View All Applicants
      </button> */}
      <div className={vacancyStyles.inner}>
        {vacancies?.map((item: any, index: number) => {
          return (
            <div>
              {item?.uniqueSkills?.results?.length > 0 && index === 0 && (
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Rare Skills:{" "}
                  </p>{" "}
                  <div
                    style={{
                      // border: "2px solid whitesmoke",
                      display: "flex",
                      gap: "5px",
                      flexWrap: "wrap",
                      marginBottom: "5px",
                      padding: "4px",
                      borderRadius: "4px",
                    }}
                  >
                    {item?.uniqueSkills?.results[0]?.tfidf_keywords?.map(
                      (tfidfWords: any) => {
                        return <p style={{}}>{tfidfWords?.keyword},</p>;
                      }
                    )}
                  </div>
                </div>
              )}
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
                <p style={{ marginBottom: "5px" }}>
                  Location: {item?.location}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  Requirements: {item?.requirements}
                </p>
                <p style={{ marginBottom: "5px" }}>Salary: {item?.salary}</p>
                <p style={{ marginBottom: "5px" }}>
                  Total Applications: {item?.total_applications}
                </p>

                {item?.applicants?.length > 0 && (
                  <>
                    {item?.applicants?.map((app: any) => {
                      return (
                        <div
                          style={{
                            border: "3px solid grey",
                            marginBottom: "5px",
                            borderRadius: "4px",
                            padding: "5px",
                            color: "whitesmoke",
                          }}
                        >
                          {" "}
                          <p>First Name: {app?.first_name}</p>
                          <p>Last Name: {app?.last_name}</p>
                          <p>Phone Number: {app?.phone_no}</p>
                          <p>Skills: {app?.skills}</p>
                          <Link
                            href={app?.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View CV
                          </Link>
                          {/* <button
                          onClick={() => {
                            handleApplyVacancy(item?.id);
                          }}
                          style={{
                            padding: "5px",
                            borderRadius: "4px",
                            marginLeft: "20px",
                            backgroundColor: "#52ab98",
                            color: "white",
                          }}
                        >
                          Accept
                        </button> */}
                        </div>
                      );
                    })}
                  </>
                )}
                {/* <Link href="#" className={vacancyStyles.viewDetail}>
                {"View More ->"}
              </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VacancyList;

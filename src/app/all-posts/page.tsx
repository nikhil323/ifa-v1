"use client";

import React, { useEffect, useState } from "react";
import LinkedInCard from "@/components/PostCard/PostCard";
import LSidebar from "@/components/LSidebarFilter/LSidebar";
import RSidebar from "@/components/RSidebar/RSidebar";

//css
import postStyles from "./allPost.module.css";
import { baseUrl } from "../api/auth";

// async function getAllVacancy() {
//   try {
//     const res = await fetch(`${baseUrl}/vacancy/public-vacancy`, {
//       next: { revalidate: 0 },
//     });

//     if (res.ok) {
//       return res.json();
//     }
//   } catch (e) {
//     console.log("the error is", e);
//   }
// }

const AllPosts = () => {
  // const allVacancies = await getAllVacancy();
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    job_type: "",
    duration: "6",
    is_verified: false,
  });

  const [vacancies, setVacancies] = useState([]);
  const [loadingVacancy, setLoadingVacancy] = useState(false);

  // Fetch data based on filters
  useEffect(() => {
    async function fetchVacancy() {
      setLoadingVacancy(true);
      try {
        // @ts-ignore
        const query = new URLSearchParams(filters).toString();

        const res = await fetch(`${baseUrl}/vacancy/public-vacancy?${query}`);
        const data = await res.json();
        setVacancies(data);
      } catch (e) {
        console.log("error fetching all posts------>", e);
        setVacancies([]);
      } finally {
        setLoadingVacancy(false);
      }
    }

    fetchVacancy();
  }, [filters]);

  console.log("the loading vacancy------------>", loadingVacancy);
  console.log("the loading vacanciesvacancies------------>", vacancies);
  return (
    <div className={`${postStyles.container}`}>
      <LSidebar setFilters={setFilters} />
      <LinkedInCard vacancies={vacancies} loading={loadingVacancy} />
      <RSidebar />
    </div>
  );
};

export default AllPosts;

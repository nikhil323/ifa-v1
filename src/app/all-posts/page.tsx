import React from "react";
import LinkedInCard from "@/components/PostCard/PostCard";
import LSidebar from "@/components/LSidebarFilter/LSidebar";
import RSidebar from "@/components/RSidebar/RSidebar";

//css
import postStyles from "./allPost.module.css";
import { baseUrl } from "../api/auth";

async function getAllVacancy() {
  try {
    const res = await fetch(`${baseUrl}/vacancy/public-vacancy`, {
      next: { revalidate: 0 },
    });

    if (res.ok) {
      return res.json();
    }
  } catch (e) {
    console.log("the error is", e);
  }
}

const AllPosts = async () => {
  const allVacancies = await getAllVacancy();
  return (
    <div className={`${postStyles.container}`}>
      {/* <LSidebar /> */}
      <LinkedInCard vacancies={allVacancies} />
      <RSidebar />
    </div>
  );
};

export default AllPosts;

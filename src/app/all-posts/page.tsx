import React from "react";
import LinkedInCard from "@/components/PostCard/PostCard";
import LSidebar from "@/components/LSidebarFilter/LSidebar";
import RSidebar from "@/components/RSidebar/RSidebar";

//css
import postStyles from "./allPost.module.css";

const AllPosts = () => {
  return (
    <div className={`${postStyles.container}`}>
      <LSidebar />
      <LinkedInCard />
      <RSidebar />
    </div>
  );
};

export default AllPosts;

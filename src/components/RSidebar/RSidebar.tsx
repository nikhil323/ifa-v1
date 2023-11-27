import React from "react";

//css
import rsidebarStyles from "./rsidebarStyles.module.css";

const RSidebar = () => {
  return (
    <div className={rsidebarStyles.container}>
      <div className={rsidebarStyles.inner}>
        <h4 className={rsidebarStyles.title}>Points to ponder:</h4>
        <ul className={rsidebarStyles.points}>
          <li>Carefully go through vacancy post and organization</li>
          <li>Research about organization</li>
          <li>Before applying see if criterias and requirements are met</li>
          <li>See if the organization is verified or not</li>
          <li>Report any harmful/ill intent activities</li>
          <li>Be cautious about spam, fake organizations and users </li>
          <li>
            Feel free to provide feedbacks and suggestions so we can improve
            user activities
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RSidebar;

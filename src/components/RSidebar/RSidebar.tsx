import React from "react";

//css
import rsidebarStyles from "./rsidebarStyles.module.css";

const RSidebar = () => {
  return <div className={rsidebarStyles.container}>
    <div>
      <h4>Points to ponder:</h4>
      <div>Carefully go through vacancy post and organization</div>
      <div>Research about organization</div>
      <div>Before applying see if criterias and requirements are met</div>
    </div>
  </div>;
};

export default RSidebar;

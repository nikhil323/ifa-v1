import Image from "next/image";
import React from "react";

//image
import notFound from "../../public/404Page.svg";

const NotFound = () => {
  return (
    <>
      <div className="pageNotFound">
        <Image src={notFound} alt="not found image" className="notFoundImg" />
        <p className="pageNotFoundText">
          Page not found <span className="notFoundIcon">&#x292C;</span>
        </p>
      </div>
    </>
  );
};

export default NotFound;

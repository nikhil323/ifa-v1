"use client";

import React, { useState } from "react";
import carouselStyles from "./carouse.module.css";
//third party import
import Carouseltem from "./Carouseltem";
//icons
import interview from "../../../public/images/carouselImages/interview.svg";
import careerProgress from "../../../public/images/carouselImages/career_progress.svg";
import feelingProud from "../../../public/images/carouselImages/feeling_proud.svg";
import jobOffer from "../../../public/images/carouselImages/job_offers.svg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 4,
      title: "Diversified Internship platform",
      description:
        "Find your choice of internships from IT, Healthcare, Banking, Accounts etc.",
      icon: jobOffer,
    },
    {
      id: 1,
      title: "Organization platform",
      description:
        "As an organization you can find interns from across the country.",
      icon: interview,
    },
    {
      id: 2,
      title: "Platform for interns",
      description:
        "Browse and go through thousands of internship opportunities and apply on one click.",
      icon: careerProgress,
    },
  ];

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = items?.length - 1;
    } else if (newIndex >= items?.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className={carouselStyles.carousel}>
      <div
        className={carouselStyles.inner}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items?.map((item) => {
          return <Carouseltem item={item} key={item?.id} />;
        })}
      </div>
      <div className={carouselStyles.carousel_buttons}>
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className={carouselStyles.arrowBtn}
        >
          &#x276C;
        </button>
        <div className={carouselStyles.indicators}>
          {items?.map((item, index) => {
            return (
              <button
                key={item?.id}
                onClick={() => updateIndex(index)}
                className={carouselStyles.indicatorBtn}
              >
                <span
                  className={
                    index === activeIndex
                      ? carouselStyles.indicator_symbol_active
                      : carouselStyles.indicator_symbol
                  }
                >
                  &#x229A;
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => updateIndex(activeIndex + 1)}
          className={carouselStyles.arrowBtn}
        >
          &#x276D;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

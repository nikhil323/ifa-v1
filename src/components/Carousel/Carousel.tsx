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
      title: "something 5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur quisquam pariatur accusamus saepe debitis nihil tempore placeat doloribus labore?",
      icon: jobOffer,
    },
    {
      id: 1,
      title: "something 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur quisquam pariatur accusamus saepe debitis nihil tempore placeat doloribus labore?",
      icon: interview,
    },
    {
      id: 2,
      title: "something 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur quisquam pariatur accusamus saepe debitis nihil tempore placeat doloribus labore?",
      icon: careerProgress,
    },
    {
      id: 3,
      title: "something 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur quisquam pariatur accusamus saepe debitis nihil tempore placeat doloribus labore?",
      icon: feelingProud,
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

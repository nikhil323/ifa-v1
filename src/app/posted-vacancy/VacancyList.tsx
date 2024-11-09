"use client";

import React, { useEffect } from "react";

import vacancyStyles from "./postedVacancy.module.css";
import Link from "next/link";

const dummyList = [
  {
    id: 1,
    post: "Frontend",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 2,
    post: "QA",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 3,
    post: "Designer",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 4,
    post: "Backend",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 5,
    post: "DBA",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 6,
    post: "Hotel MNGT",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 7,
    post: "Sales",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 8,
    post: "Marketing",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 9,
    post: "Accountant",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 10,
    post: "Cloud",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 11,
    post: "AWS",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 12,
    post: "AI",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
  {
    id: 13,
    post: "Machine Learning",
    desc: "lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd lskfj alskjdf laskdf laskdfj lskdf laskf  lasd",
  },
];

const VacancyList = () => {
    useEffect(() => {
        
    })
  return (
    <div className={vacancyStyles.content}>
      <h2 className={vacancyStyles.title}>Posted Vacancy</h2>

      <div className={vacancyStyles.inner}>
        {dummyList?.map((item) => {
          return (
            <div key={item?.id} className={vacancyStyles.listItems}>
              <h3 className={vacancyStyles.itemTitle}>{item?.post}</h3>
              <p>{item.desc}</p>
              <Link href="#" className={vacancyStyles.viewDetail}>
                {"View More ->"}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VacancyList;

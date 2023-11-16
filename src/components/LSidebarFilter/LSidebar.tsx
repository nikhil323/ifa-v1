"use client";

import React, { useState } from "react";
import lSidebarStyles from "./lSidebar.module.css";

const Sidebar = () => {
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("6");

  const handleLocationChange = (e: any) => {
    setLocation(e.target?.value);
  };

  return (
    <div className={lSidebarStyles.filterContainer}>
      <div className={lSidebarStyles.filterWrapper}>
        <h2 className={lSidebarStyles.filterHeader}>Filters</h2>

        {/* Search Bar */}
        <div className={lSidebarStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={lSidebarStyles.searchInput}
          />
          <button className={lSidebarStyles.searchButton}>Search</button>
        </div>

        {/* Horizontal Line */}
        <hr className={lSidebarStyles.horizontalLine} />

        {/* Location Dropdown */}
        <div className={lSidebarStyles.dropdownOption}>
          {/* <label htmlFor="location" className={lSidebarStyles.location}>
            Location:
          </label> */}
          <br></br>
          <select
            id="location"
            className={lSidebarStyles.selectInput}
            value={location}
            onChange={handleLocationChange}
          >
            <option value="" selected disabled>
              Select location
            </option>
            <option value="all">All Locations</option>
            <option value="kathmandu">Kathmandu</option>
            <option value="pokhara">Pokhara</option>
            <option value="biratnagar">Biratnagar</option>
          </select>
        </div>
        <hr className={lSidebarStyles.horizontalLine} />

        {/* Type Radio Buttons */}
        <div className={lSidebarStyles.filterOption}>
          <div className={lSidebarStyles.filterOption__time}>
            <label htmlFor="full-time">Full-Time : </label>
            <input
              type="radio"
              id="full-time"
              name="internship-type"
              value="full-time"
              className={lSidebarStyles.rangeStyle}
            />
          </div>
          <div className={lSidebarStyles.filterOption__time}>
            <label htmlFor="part-time">Part-Time : </label>
            <input
              type="radio"
              id="part-time"
              name="internship-type"
              value="part-time"
              className={lSidebarStyles.rangeStyle}
            />
          </div>
        </div>

        <hr className={lSidebarStyles.horizontalLine} />

        {/* Sort By period */}
        <div className={lSidebarStyles.dropdownOption}>
          {/* <label htmlFor="sort-by">Sort By:</label> */}
          <select id="sort-by" className={lSidebarStyles.selectInput}>
            <option value="" selected disabled>
              Sort by
            </option>
            <option value="all">All</option>
            <option value="relevance">Most Relevant</option>
            <option value="views">Most Viewed</option>
            <option value="latest">Latest</option>
          </select>
        </div>
        <hr className={lSidebarStyles.horizontalLine} />

        {/* Sort By category */}
        <div className={lSidebarStyles.dropdownOption}>
          {/* <label htmlFor="sort-by">Categories:</label> */}
          <select id="sort-by" className={lSidebarStyles.selectInput}>
            <option value="" selected disabled>
              Categories
            </option>
            <option value="all">All</option>
            <option value="relevance">Developer</option>
            <option value="views">Designer</option>
            <option value="latest">Marketing</option>
            <option value="latest">Sales Person</option>
            <option value="latest">Cook</option>
            <option value="latest">Delivery</option>
            <option value="latest">Data Entry</option>
            <option value="latest">Content Writer</option>
          </select>
        </div>
        <hr className={lSidebarStyles.horizontalLine} />
        {/* filter by duration */}
        <div className="filter-container">
          <div className="duration-filter">
            <label htmlFor="duration">Duration:</label>
            <br />
            <input
              onChange={(e) => setDuration(e.target.value)}
              type="range"
              id="duration"
              name="duration"
              value={duration}
              min="1"
              max="12"
              step="1"
              className={lSidebarStyles.rangeStyle}
            />
            <p id="duration-output">{duration} months</p>
          </div>
        </div>

        <hr className={lSidebarStyles.horizontalLine} />
        <div className={lSidebarStyles.paymentFilterContainer}>
          {/* Checkbox for Paid/Unpaid */}
          <div className={lSidebarStyles.paymentFilter}>
            <label htmlFor="paid">Paid:</label>
            <input
              type="checkbox"
              id="paid"
              name="paid"
              value="paid"
              className={lSidebarStyles.rangeStyle}
            />
          </div>

          {/* Checkbox for Remote Work Availability */}
          <div className={lSidebarStyles.paymentFilter}>
            <label htmlFor="remote">Remote Work:</label>
            <input
              type="checkbox"
              id="remote"
              name="remote"
              value="remote"
              className={lSidebarStyles.rangeStyle}
            />
          </div>
        </div>
        <hr className={lSidebarStyles.horizontalLine} />

        {/* Company status */}
        <div className={lSidebarStyles.companyStatus}>
          <div className={lSidebarStyles.companyStatusItems}>
            <label htmlFor="verified">Verified:</label>
            <input
              type="radio"
              id="verified"
              name="verified"
              value="verified"
              className={lSidebarStyles.rangeStyle}
            />
          </div>
        </div>
        {/* filter button */}
        <div className={lSidebarStyles.filterBtn}>
          <input type="button" value="Filter" name="filter" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

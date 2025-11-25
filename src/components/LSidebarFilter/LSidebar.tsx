"use client";

import React, { useState } from "react";
import lSidebarStyles from "./lSidebar.module.css";

const Sidebar = ({ setFilters }: any) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("6");
  const [verified, setVerified] = useState(false);

  const applyFilters = () => {
    setFilters({
      search,
      location,
      job_type: category,
      duration,
      is_verified: verified,
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      location: "",
      job_type: "",
      duration: "6",
      verified: false,
    });
    setSearch("");
    setLocation("");
    setCategory("");
    setDuration("6");
    setVerified(false);
  };

  return (
    <div className={lSidebarStyles.filterContainer}>
      <div className={lSidebarStyles.filterWrapper}>
        <h2 className={lSidebarStyles.filterHeader}>Filters</h2>

        {/* Search Bar */}
        <div className={lSidebarStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search by title/location/requirements/job type"
            className={lSidebarStyles.searchInput}
            onChange={(e) => setSearch(e?.target?.value)}
          />
          {/* <button className={lSidebarStyles.searchButton}>Search</button> */}
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
            onChange={(e) => setLocation(e.target.value)}
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

        {/* Sort By category */}
        <div className={lSidebarStyles.dropdownOption}>
          <select
            id="sort-by"
            className={lSidebarStyles.selectInput}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="" selected disabled>
              Categories
            </option>
            <option value="all">All</option>
            <option value="frontendDeveloper">Frontend Developer</option>
            <option value="backendDeveloper">Backend Developer</option>
            <option value="cook">Cook</option>
            <option value="qa">QA</option>
            <option value="accountant">Accountant</option>
            <option value="designer">Designer</option>
            <option value="salesMan">Sales Man</option>
            <option value="assistantManager">Assistant Manager</option>
            <option value="DBA">DBA</option>
            <option value="projectManager">Project Manager</option>
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
              onChange={(e) => setVerified(e?.target?.checked)}
              checked={verified}
            />
          </div>
        </div>
        {/* filter button */}
        <div className={lSidebarStyles.filterBtn}>
          <input
            type="button"
            value="Clear Filter"
            name="clearFilter"
            onClick={clearFilters}
          />
          <input
            type="button"
            value="Filter"
            name="filter"
            onClick={applyFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

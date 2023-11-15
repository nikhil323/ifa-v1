"use client";

import React, { useState } from "react";
import Image from "next/image";
//image
import signupImg from "../../../public/sign_up.svg";

//css
import signUpStyles from "./signUp.module.css";

const SignUp = () => {
  const [company, setCompany] = useState(false);

  return (
    <>
      {/* <Image src={signupImg} alt="signup" className={signUpStyles.signUpImg}/> */}
      <div className={signUpStyles.container}>
        <p className={signUpStyles.heading}>Create an account</p>
        <div className={signUpStyles.buttons}>
          <button
            className={`${
              company ? signUpStyles.activeBtn : signUpStyles.inactiveBtn
            }`}
            onClick={() => setCompany(true)}
          >
            Company
          </button>
          <button
            className={`${
              !company ? signUpStyles.activeBtn : signUpStyles.inactiveBtn
            }`}
            onClick={() => setCompany(false)}
          >
            Personal
          </button>
        </div>
        {
          <div className={signUpStyles.personalLogin__form}>
            <div className={signUpStyles.personalLogin__fields}>
              <input
                type="text"
                name={company ? "companyName" : "firstName"}
                placeholder={company ? "Company Name" : "First Name"}
                className={signUpStyles.inputfields}
              />
            </div>
            <div className={signUpStyles.personalLogin__fields}>
              <input
                type="text"
                name={company ? "location" : "lastName"}
                placeholder={company ? "Location" : "Last Name"}
                className={signUpStyles.inputfields}
              />
            </div>
            <div className={signUpStyles.personalLogin__fields}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                id="new password"
                className={signUpStyles.inputfields}
              />
            </div>
            <div className={signUpStyles.personalLogin__fields}>
              {company ? (
                <select
                  name="industry"
                  id="industry"
                  className={`${signUpStyles.inputfields}`}
                >
                  <option value="" selected disabled>
                    Select industry
                  </option>
                  <option value="it">IT</option>
                  <option value="sales">SALES</option>
                  <option value="management">Management</option>
                  <option value="arts">ARTS</option>
                  <option value="hotel">HOTEL</option>
                  <option value="resturant">RESTAURENT</option>
                </select>
              ) : (
                <select
                  name="gender"
                  id="gender"
                  className={`${signUpStyles.inputfields}`}
                >
                  <option value="" selected disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              )}
            </div>
            <div className={signUpStyles.personalLogin__fields}>
              <input
                type="password"
                name="password"
                autoComplete="off"
                id="new password"
                placeholder="Password"
                className={signUpStyles.inputfields}
              />
            </div>
            <div className={signUpStyles.personalLogin__fields}>
              <input
                type="password"
                name="password"
                autoComplete="off"
                id="new password"
                placeholder="Confirm Password"
                className={signUpStyles.inputfields}
              />
            </div>
          </div>
        }

        <div className={signUpStyles.registerBtn}>
          <button className={signUpStyles.activeBtn}>Register</button>
        </div>
        <div className={signUpStyles.loginBtn}>
          <h3>Already have an account ?</h3>
          <div className={signUpStyles.buttons}>
            <button
              className={`${signUpStyles.activeBtn}`}
              onClick={() => console.log("slfdslfd")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

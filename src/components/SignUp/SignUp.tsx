"use client";

import React, { useState } from "react";

//css
import signUpStyles from "./signUp.module.css";

const SignUp = () => {
  const [company, setCompany] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <>
      <div className={signUpStyles.container}>
        <h2 className={signUpStyles.heading}>
          {hasAccount
            ? `${company ? "Company" : "Individual"} Login`
            : "Create an account"}
        </h2>
        <div className={`${signUpStyles.buttons} ${signUpStyles.mbMedium}`}>
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
        {!hasAccount && (
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
        )}

        {hasAccount && (
          <div className={signUpStyles.personalLogin__form}>
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
              <input
                type="password"
                name="password"
                autoComplete="off"
                id="new password"
                placeholder="Password"
                className={signUpStyles.inputfields}
              />
            </div>
          </div>
        )}

        <div className={signUpStyles.registerBtn}>
          {hasAccount ? (
            <button className={signUpStyles.activeBtn}>Login</button>
          ) : (
            <button className={signUpStyles.activeBtn}>Register</button>
          )}
        </div>
        <div className={signUpStyles.loginBtn}>
          <h3>
            {hasAccount
              ? "Don't have an Account ?"
              : "Already have an account ?"}
          </h3>
          <div className={signUpStyles.buttons}>
            {hasAccount ? (
              <button
                className={`${signUpStyles.activeBtn}`}
                onClick={() => setHasAccount(false)}
              >
                Register
              </button>
            ) : (
              <button
                className={`${signUpStyles.activeBtn}`}
                onClick={() => setHasAccount(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

"use client";

import React, { useState } from "react";

//css
import signUpStyles from "../auth.module.css";
import { handleInputChange } from "@/app/utils/utilFunction";
import {
  confirmPasswordMsg,
  passwordMsg,
  passwordRegx,
} from "@/app/utils/constant";

interface registerProps {
  hasAccount: boolean;
  formData: any;
  setFormData: any;
  errors: any;
  setErrors: any;
}

const CompanyRegisterForm = ({
  hasAccount,
  formData,
  setFormData,
  errors,
  setErrors,
}: registerProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  return (
    <>
      <div className={signUpStyles.container}>
        <>
          {!hasAccount && (
            <div className={signUpStyles.personalLogin__form}>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type="text"
                  value={formData?.companyName}
                  name={"companyName"}
                  required
                  placeholder={"Company Name"}
                  className={signUpStyles.inputfields}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type="text"
                  value={formData?.location}
                  required
                  name={"location"}
                  placeholder={"Location"}
                  className={signUpStyles.inputfields}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="new password"
                  required
                  value={formData?.email}
                  className={signUpStyles.inputfields}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <select
                  name="industry"
                  id="industry"
                  required
                  className={`${signUpStyles.inputfields}`}
                  value={formData?.industry}
                  placeholder="Select Industry"
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                >
                  <option value="" disabled>
                    Select industry
                  </option>
                  <option value="it">IT</option>
                  <option value="sales">SALES</option>
                  <option value="management">Management</option>
                  <option value="arts">ARTS</option>
                  <option value="hotel">HOTEL</option>
                  <option value="resturant">RESTAURENT</option>
                </select>
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  id="new password"
                  placeholder="Password"
                  className={signUpStyles.inputfields}
                  onFocus={() => setShowPassword(true)}
                  onBlur={() => {
                    setShowPassword(false);
                    if (!passwordRegx.test(formData?.password)) {
                      setErrors({
                        ...errors,
                        password: passwordMsg,
                      });
                    } else {
                      setErrors({
                        ...errors,
                        password: "",
                      });
                    }
                  }}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
                {errors && (
                  <p className={signUpStyles.inputfields__error}>
                    {errors?.password}
                  </p>
                )}
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="off"
                  id="new password"
                  placeholder="Confirm Password"
                  className={signUpStyles.inputfields}
                  onFocus={() => setShowConfirmPassword(true)}
                  onBlur={() => {
                    setShowConfirmPassword(false);
                    if (formData?.password !== formData?.confirmPassword) {
                      setErrors({
                        ...errors,
                        confirmPassword: confirmPasswordMsg,
                      });
                    } else {
                      setErrors({
                        ...errors,
                        confirmPassword: "",
                      });
                    }
                  }}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
                {errors && (
                  <p className={signUpStyles.inputfields__error}>
                    {errors?.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default CompanyRegisterForm;

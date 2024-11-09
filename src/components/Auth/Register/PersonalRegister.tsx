"use client";

import React, { useState } from "react";

//css
import signUpStyles from "../auth.module.css";
//utility function
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

const PersonalRegisterForm = ({
  hasAccount,
  formData,
  setFormData,
  errors,
  setErrors
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
                  value={formData?.firstName}
                  name={"firstName"}
                  required
                  placeholder={"First Name"}
                  className={signUpStyles.inputfields}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type="text"
                  value={formData?.lastName}
                  name={"lastName"}
                  required
                  placeholder={"Last Name"}
                  className={signUpStyles.inputfields}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type="email"
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
                  name="gender"
                  id="gender"
                  className={`${signUpStyles.inputfields}`}
                  value={formData?.gender}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className={signUpStyles.personalLogin__fields}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  id="new password"
                  required
                  placeholder="Password"
                  value={formData?.password}
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
                  onChange={(e) => {
                    // setShowPassword(true);
                    handleInputChange(e, formData, setFormData);
                  }}
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
                  id="password"
                  required
                  value={formData?.confirmPassword}
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
                  onChange={(e) => {
                    // setShowConfirmPassword(true);
                    handleInputChange(e, formData, setFormData);
                  }}
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

export default PersonalRegisterForm;

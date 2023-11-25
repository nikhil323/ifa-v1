"use client";

import React, { useState } from "react";

//css
import signUpStyles from "../auth.module.css";

//utility functions
import { handleInputChange } from "@/app/utils/utilFunction";

//login prop type
interface loginProp {
  formData: any;
  setFormData: any;
}

const LoginForm = ({ formData, setFormData }: loginProp) => {
  return (
    <div className={signUpStyles.container}>
      <>
        <div className={signUpStyles.personalLogin__form}>
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
            <input
              type="password"
              name="password"
              value={formData?.password}
              autoComplete="off"
              required
              id="new password"
              placeholder="Password"
              className={signUpStyles.inputfields}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginForm;

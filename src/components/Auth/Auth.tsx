"use client";

import React, { FormEventHandler, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

//css
import signUpStyles from "./auth.module.css";
import CompanyRegisterForm from "./Register/CompanyRegister";
import PersonalRegisterForm from "./Register/PersonalRegister";
import LoginForm from "./Login/Login";
import {
  login,
  registerOrganization,
  registerStudent,
  registerUser,
} from "@/app/api/auth";
import PopUpMsg, { apiRes, loginResProp } from "../PopUpMsg/PopUpMsg";

//server action
// import { handleSubmit } from "@/app/actions";

const Auth = () => {
  const router = useRouter();
  //company state
  const initialCompanyState = {
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    location: "",
    industry: "",
  };
  const [companyFormData, setCompanyFormData] = useState(initialCompanyState);

  //personal state
  const initialPersonalState = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [personalFormData, setPersonalFormData] =
    useState(initialPersonalState);

  //login state
  const initialLoginState = {
    email: "",
    password: "",
  };

  //initial error
  const initialError = {
    password: "",
    confirmPassword: "",
  };

  //error state
  const [errors, setErrors] = useState(initialError);

  const [loginFormData, setLoginFormData] = useState(initialLoginState);

  //check if company or personal is clicked
  const [company, setCompany] = useState(false);

  //login response
  const [loginRes, setLoginRes] = useState<loginResProp | null>(null);

  useEffect(() => {
    //clear all states when company/personal btn is clicked
    setErrors(initialError);
    setLoginFormData(initialLoginState);
    setCompanyFormData(initialCompanyState);
    setPersonalFormData(initialPersonalState);
  }, [company]);

  //check if login or register is clicked
  const [hasAccount, setHasAccount] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e?.preventDefault();
    if (hasAccount) {
      const res = await login(loginFormData);
      setLoginRes({ ...res });
      if (res?.status === 200) {
        router.push("/");
      }
    } else if (!hasAccount && company) {
      const userRegister = {
        email: companyFormData?.email,
        password: companyFormData?.password,
        confirm_password: companyFormData?.confirmPassword,
      };

      const data = await registerUser(userRegister);
      const companyData = {
        user: data?.data?.user_id,
        organization_name: companyFormData?.companyName,
        address: companyFormData?.location,
        industry: companyFormData?.industry,
      };
      setLoginRes({ ...data });
      const organization = await registerOrganization(companyData);
      if (organization) {
        router.push("/org-profile");
      }
    } else if (!hasAccount && !company) {
      const userRegister = {
        email: personalFormData?.email,
        password: personalFormData?.password,
        confirm_password: personalFormData?.confirmPassword,
      };

      const data = await registerUser(userRegister);
      const personalData = {
        user: data?.data?.user_id,
        first_name: personalFormData?.firstName,
        last_name: personalFormData?.lastName,
        gender: personalFormData?.gender,
      };
      setLoginRes({ ...data });
      const student = await registerStudent(personalData);
      if (student) {
        router.push("/std-profile");
      }
    }
  };

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
        <form onSubmit={handleSubmit}>
          {/* does not have account and company is selected then show company form */}
          {!hasAccount && company && (
            <CompanyRegisterForm
              hasAccount={hasAccount}
              formData={companyFormData}
              setFormData={setCompanyFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}

          {/* does not have account and personal is selected then show personal form */}
          {!hasAccount && !company && (
            <PersonalRegisterForm
              hasAccount={hasAccount}
              formData={personalFormData}
              setFormData={setPersonalFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}

          {/* already has account then show login form */}
          {hasAccount && (
            <LoginForm
              formData={loginFormData}
              setFormData={setLoginFormData}
            />
          )}

          <div className={signUpStyles.registerBtn}>
            {hasAccount ? (
              <button
                className={signUpStyles.activeBtn}
                name="submit"
                value="submit"
              >
                Login
              </button>
            ) : (
              <button
                className={signUpStyles.activeBtn}
                name="submit"
                value="submit"
              >
                Register
              </button>
            )}
          </div>
        </form>

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

      {loginRes !== null && (
        <PopUpMsg loginRes={loginRes} setLoginRes={setLoginRes} />
      )}
    </>
  );
};

export default Auth;

"use client";

import React, { useState, FormEventHandler, useEffect } from "react";
import { useRouter } from "next/navigation";

//css
import profileStyles from "./profileStyles.module.css";
import { handleInputChange } from "../utils/utilFunction";
import Image from "next/image";
import { altPhoneMsg, phoneMsg } from "../utils/constant";
import PopUpMsg from "@/components/PopUpMsg/PopUpMsg";
import { getStudentById, logout, updateStudent } from "../api/auth";

export interface error {
  phoneNo: string;
  altPhoneNo: string;
}

const ProfileForm = () => {
  const router = useRouter();
  const [studentData, setStudentData] = useState<any>(null);
  const stdId = localStorage.getItem("studentId");

  useEffect(() => {
    const fetchStd = async () => {
      const stdData = await getStudentById(stdId as string | number);
      setStudentData(stdData);
    };
    fetchStd();
  }, [stdId]);

  //initialState
  const initialState = {
    first_name: studentData?.first_name ? studentData?.first_name : "",
    last_name: studentData?.last_name ? studentData?.last_name : "",
    gender: studentData?.gender ? studentData?.gender : "",
    phone_no: studentData?.phone_no ? studentData?.phone_no : "",
    alt_phone: studentData?.alt_phone ? studentData?.alt_phone : "",
    university: studentData?.university ? studentData?.university : "",
    skills: studentData?.skills ? studentData?.skills : "",
    git_hub: studentData?.git_hub ? studentData?.git_hub : "",
    resume: studentData?.resume ? studentData?.resume : null,
    cover_letter: studentData?.cover_letter ? studentData?.cover_letter : null,
    photo: studentData?.photo ? studentData?.photo : null,
  };

  //error state
  const errorState = {
    phoneNo: "",
    altPhoneNo: "",
  };

  useEffect(() => {
    setFormData(initialState);

    return () => {
      setFormData(null);
    };
  }, [studentData]);

  const [formData, setFormData] = useState<any>(initialState);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [selectedResume, setSelectedResume] = useState<string | null>(null);
  const [selectedCV, setSelectedCV] = useState<string | null>(null);

  const [errors, setErrors] = useState<any>(errorState);
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleChangeFiles = (e: any) => {
    const { name } = e?.target;
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [name]: file,
    });
    if (name === "photo") {
      const prevUrl = URL.createObjectURL(file);
      setSelectedProfile(prevUrl);
    } else if (name === "resume") {
      const prevUrl = URL.createObjectURL(file);
      setSelectedResume(prevUrl);
    } else if (name === "cover_letter") {
      const prevUrl = URL.createObjectURL(file);
      setSelectedCV(prevUrl);
    }
  };

  const handleStdProfileUpdate: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    setLoading(true);
    e?.preventDefault();
    if (formData?.phone_no?.length > 10) {
      setErrors({
        ...errors,
        phoneNo: phoneMsg,
      });
      setShowErrorMsg(true);
      setLoading(false);
    } else if (formData?.alt_phone?.length > 10) {
      setErrors({
        ...errors,
        altPhoneNo: altPhoneMsg,
      });
      setShowErrorMsg(true);
      setLoading(false);
    } else {
      setErrors(null);
      const formFields = new FormData();

      for (let name in formData) {
        if (name === "photo" && typeof formData[name] === "string") {
        } else if (name === "resume" && typeof formData[name] === "string") {
        } else if (
          name === "cover_letter" &&
          typeof formData[name] === "string"
        ) {
        } else {
          formFields.append(name, formData[name]);
        }
      }
      //update student profile api
      const res = await updateStudent(formFields, stdId as string);
      console.log("response on submit", res);
      if (res) {
        localStorage.setItem("studentId", res?.id);
        setShowSuccessMsg(true);
      }
      setLoading(false);
    }
  };
  return (
    <div className={profileStyles.content}>
      <form onSubmit={handleStdProfileUpdate}>
        <p className={profileStyles.title}>Preview</p>
        <div className={profileStyles.imgPreview}>
          <div>
            <p className={profileStyles.text}>Profile photo</p>
            <Image
              src={
                typeof formData?.photo === "string"
                  ? formData?.photo
                  : selectedProfile
                  ? selectedProfile
                  : "https://via.placeholder.com/150"
              }
              width={150}
              height={150}
              alt="profile image"
              className={profileStyles?.profileImgPrev}
            />
          </div>
          <div>
            <p className={profileStyles.text}>Resume </p>
            <Image
              src={
                typeof formData?.resume === "string"
                  ? formData?.resume
                  : selectedResume
                  ? selectedResume
                  : "https://via.placeholder.com/150"
              }
              width={150}
              height={150}
              alt="resume image"
              className={profileStyles?.profileImgPrev}
            />
          </div>
          <div>
            <p className={profileStyles.text}>CV </p>
            <Image
              src={
                typeof formData?.cover_letter === "string"
                  ? formData?.cover_letter
                  : selectedCV
                  ? selectedCV
                  : "https://via.placeholder.com/150"
              }
              width={150}
              height={150}
              alt="cv image"
              className={profileStyles?.profileImgPrev}
            />
          </div>
        </div>
        <div>
          <div className={profileStyles.twoInput}>
            <input
              type="text"
              placeholder="First Name"
              value={formData?.first_name}
              name="first_name"
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={profileStyles.contactName}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData?.last_name}
              name="last_name"
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={profileStyles.contactName}
            />
          </div>
          <div className={`${profileStyles.twoInput}`}>
            <select
              name="gender"
              id="gender"
              className={`${profileStyles.contactName}`}
              value={formData?.gender}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="number"
              placeholder="Phone no"
              name="phone_no"
              value={formData?.phone_no}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              onBlur={() => {
                if (formData?.phone_no?.length > 10) {
                  console.log("setting error");
                  setErrors({
                    ...errors,
                    phoneNo: phoneMsg,
                  });
                }
              }}
              className={`${profileStyles.contactName}`}
            />
          </div>
          <div className={profileStyles.twoInput}>
            <input
              type="number"
              name="alt_phone"
              value={formData?.alt_phone}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              placeholder="Alt phone no"
              onBlur={() => {
                if (formData?.alt_phone?.length > 10) {
                  setErrors({
                    ...errors,
                    altPhoneNo: altPhoneMsg,
                  });
                }
              }}
              className={`${profileStyles.contactName}`}
            />
            <input
              type="text"
              placeholder="University"
              name="university"
              value={formData?.university}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${profileStyles.contactName}`}
            />
          </div>
          <div className={profileStyles.twoInput}>
            <input
              type="skills"
              placeholder="Skills"
              name="skills"
              value={formData?.skills}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${profileStyles.contactName}`}
            />
            <input
              type="url"
              placeholder="GitHub link"
              name="git_hub"
              value={formData?.git_hub}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${profileStyles.contactName}`}
            />
          </div>

          <div className={profileStyles.twoInput}>
            <label
              htmlFor="upload-resume"
              className={`${profileStyles.fileFieldStyle}`}
            >
              {formData?.resume?.name
                ? formData?.resume?.name?.substring(0, 10) + "..."
                : "Upload resume"}
              <input
                id="upload-resume"
                type="file"
                // value={formData?.resume}
                placeholder="Upload resume"
                name="resume"
                onChange={handleChangeFiles}
              />
            </label>
            <label
              htmlFor="upload-cv"
              className={`${profileStyles.fileFieldStyle}`}
            >
              {formData?.cover_letter?.name
                ? formData?.cover_letter?.name.substring(0, 10) + "..."
                : "Upload CV"}
              <input
                id="upload-cv"
                type="file"
                // value={formData?.cover_letter}
                placeholder="Upload CV"
                name="cover_letter"
                onChange={handleChangeFiles}
              />
            </label>
            {/* </div> */}
          </div>
          <div className={profileStyles.twoInput}>
            {/* <div style={{ margin: "0", padding: "0" }}> */}
            <label
              htmlFor="upload-photo"
              className={`${profileStyles.fileFieldStyle}`}
            >
              {formData?.photo?.name
                ? formData?.photo?.name.substring(0, 10) + "..."
                : "Upload photo"}
              <input
                type="file"
                id="upload-photo"
                // value={formData?.photo}
                placeholder="Choose photo"
                name="photo"
                onChange={handleChangeFiles}
              />
            </label>
            {/* </div> */}
            <input
              className={`${profileStyles.contactName}`}
              style={{
                display: "hidden",
                backgroundColor: "#85a8c5",
                cursor: "none",
              }}
            ></input>
          </div>
          <button
            name="submit"
            value="submit"
            className={profileStyles.submitBtn}
            disabled={loading}
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
      <button
        name="logout"
        className={profileStyles.submitBtn}
        onClick={async () => {
          await logout();
          localStorage.removeItem("studentId");
          localStorage.removeItem("orgId");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          router.push("/login-register");
        }}
      >
        Logout
      </button>
      {showErrorMsg && (
        <PopUpMsg
          loginRes={{
            status: "error",
            msg: errors?.phoneNo
              ? errors?.phoneNo
              : errors?.altPhoneNo
              ? errors?.altPhoneNo
              : "",
          }}
          setLoginRes={setErrors}
        />
      )}
      {showSuccessMsg && (
        <PopUpMsg
          loginRes={{
            status: "updated",
            msg: "Updated Successfully",
          }}
          setLoginRes={setShowSuccessMsg}
        />
      )}
    </div>
  );
};

export default ProfileForm;

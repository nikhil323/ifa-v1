"use client";

import React, { useState, FormEventHandler, useEffect } from "react";
import { useRouter } from "next/navigation";

//css
import vacancyStyles from "./vacancy.module.css";
import { handleInputChange } from "../utils/utilFunction";
import Image from "next/image";
import { altPhoneMsg, phoneMsg } from "../utils/constant";
import PopUpMsg from "@/components/PopUpMsg/PopUpMsg";
import { logout, addVacancy } from "../api/auth";
import Link from "next/link";

export interface error {
  phoneNo: string;
  altPhoneNo: string;
}

const VacancyForm = () => {
  const router = useRouter();
  const orgId = localStorage.getItem("orgId");

  //initialState
  const initialState = {
    salary: "",
    duration: "",
    description: "",
    location: "",
    requirements: "",
    contact_email: "",
    contact_phone: "",
    job_type: "",
    photo: null,
  };

  //error state
  const errorState = {
    phoneNo: "",
    altPhoneNo: "",
  };

  const [formData, setFormData] = useState<any>(initialState);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

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
      setSelectedFile(prevUrl);
    }
  };

  const handleAddVacancy: FormEventHandler<HTMLFormElement> = async (e) => {
    e?.preventDefault();
    setLoading(true);
    const formFields = new FormData();

    for (let name in formData) {
      if (name === "photo" && typeof formData[name] === "string") {
      } else {
        formFields.append(name, formData[name]);
      }
    }
    //add organization key
    formFields.append("organization", orgId as string);
    //add vacancy api call
    const res = await addVacancy(formFields);
    if (res) {
      setShowSuccessMsg(true);
      router.push("/posted-vacancy");
    }
    setLoading(false);
  };
  return (
    <div className={vacancyStyles.content}>
      <form onSubmit={handleAddVacancy}>
        <div className={vacancyStyles.imgPreview}>
          <div>
            <p className={vacancyStyles.text}>Photo Preview</p>
            <Image
              src={
                typeof formData?.organization_documents === "string"
                  ? formData?.organization_documents
                  : selectedFile
                  ? selectedFile
                  : "https://via.placeholder.com/150"
              }
              width={150}
              height={150}
              alt="vacancy photo"
              className={vacancyStyles?.profileImgPrev}
            />
          </div>
        </div>
        <div>
          <div className={vacancyStyles.twoInput}>
            <input
              type="number"
              placeholder="Duration(in months)"
              value={formData?.duration}
              name="duration"
              required
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={vacancyStyles.contactName}
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              required
              value={formData?.location}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${vacancyStyles.contactName}`}
            />
          </div>
          <div className={`${vacancyStyles.twoInput}`}>
            <input
              type="date"
              placeholder="Deadline"
              name="application_deadline"
              required
              value={formData?.application_deadline}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${vacancyStyles.contactName}`}
            />
            <input
              type="email"
              placeholder="Email"
              name="contact_email"
              required
              value={formData?.contact_email}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${vacancyStyles.contactName}`}
            />
          </div>
          <div className={vacancyStyles.twoInput}>
            <input
              type="number"
              name="contact_phone"
              required
              value={formData?.contact_phone}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              placeholder="Phone No"
              className={`${vacancyStyles.contactName}`}
            />
            <select
              name="job_type"
              id="job_type"
              required
              className={`${vacancyStyles.contactName}`}
              value={formData?.job_type}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
            >
              <option value="" disabled>
                Job Type
              </option>
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
          <div className={vacancyStyles.twoInput}>
            <textarea
              id="requirements"
              rows={7}
              placeholder="Vacancy Requirements"
              value={formData?.requirements}
              name="requirements"
              required
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${vacancyStyles.contactName} ${vacancyStyles.textarea}`}
            />
            <textarea
              id="description"
              rows={7}
              required
              placeholder="Vacancy Description"
              value={formData?.description}
              name="description"
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${vacancyStyles.contactName} ${vacancyStyles.textarea}`}
            />
          </div>
        </div>
        <div className={vacancyStyles.twoInput}>
          <div>
            <label
              htmlFor="vacancy-img"
              className={`${vacancyStyles.fileFieldStyle} ${vacancyStyles.vacancyImg}`}
            >
              {formData?.photo?.name
                ? formData?.photo?.name?.substring(0, 10) + "..."
                : "Upload Vacancy Photo"}
              <input
                id="vacancy-img"
                type="file"
                required
                placeholder="Vacancy image"
                name="photo"
                onChange={handleChangeFiles}
              />
            </label>
          </div>
          <input
            type="text"
            name="salary"
            value={formData?.salary}
            onChange={(e) => handleInputChange(e, formData, setFormData)}
            placeholder="Salary"
            className={`${vacancyStyles.contactName}`}
          />
        </div>
        <div className={vacancyStyles.twoInput}>
          <div className={vacancyStyles.buttons}>
            <button
              name="submit"
              value="submit"
              className={vacancyStyles.submitBtn}
              disabled={loading}
            >
              {loading ? "Loading..." : "Create"}
            </button>
            {/* <Link href="/add-vacancy" className={vacancyStyles.addVacancyBtn}>
              Add Vacancy
            </Link> */}
            {/* <button
              name="logout"
              className={vacancyStyles.submitBtn}
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
            </button> */}
          </div>
        </div>
      </form>
      <div>
        {/* <button
          name="logout"
          className={vacancyStyles.submitBtn}
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
        <Link href="/add-vacancy" className={vacancyStyles.addVacancyBtn}>
          Add Vacancy
        </Link> */}
      </div>
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
            status: 201,
            msg: "Updated Successfully",
          }}
          setLoginRes={setShowSuccessMsg}
        />
      )}
    </div>
  );
};

export default VacancyForm;

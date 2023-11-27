"use client";

import React, { useState, FormEventHandler, useEffect } from "react";
import { useRouter } from "next/navigation";

//css
import orgStyles from "./orgStyles.module.css";
import { handleInputChange } from "../utils/utilFunction";
import Image from "next/image";
import { altPhoneMsg, phoneMsg } from "../utils/constant";
import PopUpMsg from "@/components/PopUpMsg/PopUpMsg";
import { getOrgById, logout, updateOrganization } from "../api/auth";
import Link from "next/link";

export interface error {
  phoneNo: string;
  altPhoneNo: string;
}

const OrgForm = () => {
  const router = useRouter();
  const [orgData, setOrgData] = useState<any>(null);
  const orgId = localStorage.getItem("orgId");

  useEffect(() => {
    const fetchOrg = async () => {
      const orgData = await getOrgById(orgId as string | number);
      setOrgData(orgData);
    };
    fetchOrg();
  }, [orgId]);

  //initialState
  const initialState = {
    organization_name: orgData?.organization_name
      ? orgData?.organization_name
      : "",
    industry: orgData?.industry ? orgData?.industry : "",
    address: orgData?.address ? orgData?.address : "",
    website: orgData?.website ? orgData?.website : "",
    phone_no: orgData?.phone_no ? orgData?.phone_no : "",
    alt_phone_no: orgData?.alt_phone_no ? orgData?.alt_phone_no : "",
    contact_person: orgData?.contact_person ? orgData?.contact_person : "",
    pan_no: orgData?.pan_no ? orgData?.pan_no : "",
    vat_no: orgData?.vat_no ? orgData?.vat_no : "",
    organization_documents: orgData?.organization_documents
      ? orgData?.organization_documents
      : null,
    photo: orgData?.photo ? orgData?.photo : null,
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
  }, [orgData]);

  const [formData, setFormData] = useState<any>(initialState);
  const [selectedCompanyDoc, setSelectedCompanyDoc] = useState<string | null>(
    null
  );

  const [selectedCompanyPhoto, setSelectedCompanyPhoto] = useState<
    string | null
  >(null);

  const [errors, setErrors] = useState<any>(errorState);
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleChangeFiles = (e: any) => {
    const { name } = e?.target;
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [name]: file,
    });
    if (name === "organization_documents") {
      const prevUrl = URL.createObjectURL(file);
      setSelectedCompanyDoc(prevUrl);
    } else if (name === "photo") {
      const prevUrl = URL.createObjectURL(file);
      setSelectedCompanyPhoto(prevUrl);
    }
  };

  const handleOrgProfileUpdate: FormEventHandler<HTMLFormElement> = async (
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
    } else if (formData?.alt_phone_no?.length > 10) {
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
        if (
          name === "organization_documents" &&
          typeof formData[name] === "string"
        ) {
        } else if (name === "photo" && typeof formData[name] === "string") {
        } else {
          formFields.append(name, formData[name]);
        }
      }
      //update student profile api
      const res = await updateOrganization(formFields, orgId as string);
      if (res) {
        localStorage.setItem("orgId", res?.id);
        setShowSuccessMsg(true);
      }
      setLoading(false);
    }
  };
  return (
    <div className={orgStyles.content}>
      <form onSubmit={handleOrgProfileUpdate}>
        <p className={orgStyles.title}>Preview</p>
        <div className={orgStyles.imgPreview}>
          <div>
            <p className={orgStyles.text}>Company Photo</p>
            <Image
              src={
                typeof formData?.photo === "string"
                  ? formData?.photo
                  : selectedCompanyPhoto
                  ? selectedCompanyPhoto
                  : "https://via.placeholder.com/150"
              }
              width={150}
              height={150}
              alt="company photo"
              className={orgStyles?.profileImgPrev}
            />
          </div>
          <div>
            <p className={orgStyles.text}>Company Document</p>
            <Image
              src={
                typeof formData?.organization_documents === "string"
                  ? formData?.organization_documents
                  : selectedCompanyDoc
                  ? selectedCompanyDoc
                  : "https://via.placeholder.com/150"
              }
              width={150}
              height={150}
              alt="company document"
              className={orgStyles?.profileImgPrev}
            />
          </div>
        </div>
        <div>
          <div className={orgStyles.twoInput}>
            <input
              type="text"
              placeholder="Organization Name"
              value={formData?.organization_name}
              name="organization_name"
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={orgStyles.contactName}
            />
            <input
              type="text"
              placeholder="Location"
              value={formData?.address}
              name="address"
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={orgStyles.contactName}
            />
          </div>
          <div className={`${orgStyles.twoInput}`}>
            <select
              name="industry"
              id="industry"
              className={`${orgStyles.contactName}`}
              value={formData?.industry}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
            >
              <option value="" disabled>
                Categories
              </option>
              <option value="it">IT</option>
              <option value="sales">SALES</option>
              <option value="management">Management</option>
              <option value="arts">ARTS</option>
              <option value="hotel">HOTEL</option>
              <option value="resturant">RESTAURENT</option>
              <option value="accounting">ACCOUNTING</option>
            </select>
            <input
              type="number"
              placeholder="Phone No"
              name="phone_no"
              value={formData?.phone_no}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              onBlur={() => {
                if (formData?.phone_no?.length > 10) {
                  setErrors({
                    ...errors,
                    phoneNo: phoneMsg,
                  });
                }
              }}
              className={`${orgStyles.contactName}`}
            />
          </div>
          <div className={orgStyles.twoInput}>
            <input
              type="number"
              name="alt_phone_no"
              value={formData?.alt_phone_no}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              placeholder="Alt Phone No"
              onBlur={() => {
                if (formData?.alt_phone_no?.length > 10) {
                  setErrors({
                    ...errors,
                    altPhoneNo: altPhoneMsg,
                  });
                }
              }}
              className={`${orgStyles.contactName}`}
            />
            <input
              type="url"
              placeholder="Website Link"
              name="website"
              value={formData?.website}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${orgStyles.contactName}`}
            />
          </div>
          <div className={orgStyles.twoInput}>
            <input
              type="number"
              placeholder="Vat No"
              name="vat_no"
              value={formData?.vat_no}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${orgStyles.contactName}`}
            />
            <input
              type="number"
              placeholder="Pan No"
              name="pan_no"
              value={formData?.pan_no}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
              className={`${orgStyles.contactName}`}
            />
          </div>

          <div className={orgStyles.twoInput}>
            <label
              htmlFor="upload-org-photo"
              className={`${orgStyles.fileFieldStyle}`}
            >
              {formData?.photo?.name
                ? formData?.photo?.name?.substring(0, 10) + "..."
                : "Upload Org Photo"}
              <input
                id="upload-org-photo"
                type="file"
                accept="image/*"
                placeholder="Upload Org Photo"
                name="photo"
                onChange={handleChangeFiles}
              />
            </label>
            <label
              htmlFor="upload-org-doc"
              className={`${orgStyles.fileFieldStyle}`}
            >
              {formData?.organization_documents?.name
                ? formData?.organization_documents?.name?.substring(0, 10) +
                  "..."
                : "Upload Org Doc"}
              <input
                id="upload-org-doc"
                type="file"
                accept="image/*"
                placeholder="Upload Org Doc"
                name="organization_documents"
                onChange={handleChangeFiles}
              />
            </label>
          </div>
          <button
            name="submit"
            value="submit"
            className={orgStyles.submitBtn}
            disabled={loading}
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
      <div>
        <Link href="/add-vacancy" className={orgStyles.addVacancyBtn}>
          Add Vacancy
        </Link>
        <Link href="/posted-vacancy" className={orgStyles.addVacancyBtn}>
          View Posted Vacancy
        </Link>
        <button
          name="logout"
          className={orgStyles.submitBtn}
          onClick={async () => {
            setLoadingLogout(true);
            await logout();
            localStorage.removeItem("studentId");
            localStorage.removeItem("orgId");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            router.push("/login-register");
            setLoadingLogout(false);
          }}
        >
          {loadingLogout ? "Loading..." : "Logout"}
        </button>
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
            status: "updated",
            msg: "Updated Successfully",
          }}
          setLoginRes={setShowSuccessMsg}
        />
      )}
    </div>
  );
};

export default OrgForm;

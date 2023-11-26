"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
//css
import vacancyListStyle from "./vacancyDetail.module.css";

import PopUpMsg from "@/components/PopUpMsg/PopUpMsg";
import Dialog from "@/components/Dialog/Dialog";
import { applyVacancy } from "@/app/api/auth";

const ApplyBtn = ({ id }: any) => {
  const router = useRouter();
  const stdId = localStorage.getItem("studentId");
  const orgId = localStorage.getItem("orgId");
  const [showMessage, setShowMessage] = useState(false);
  const initialMsg = {
    status: "",
    msg: "",
  };
  const [message, setMessage] = useState(initialMsg);
  const [successMsg, setSuccessMsg] = useState<any>(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dialogRef?.current && !dialogRef?.current?.contains(event?.target)) {
        setShowConfirmDialog(false);
      }
    };

    if (showConfirmDialog) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showConfirmDialog]);

  const handleApply = async () => {
    if (!stdId) {
      setLoading(false);
      setShowMessage(true);
      setMessage({
        status: "login-to-proceed",
        msg: "Login first to Apply.",
      });
    } else if (stdId && id) {
      setLoading(true);
      setShowMessage(false);
      const body = {
        student_profile: stdId,
        vacancy: id,
      };
      const res = await applyVacancy(body);
      setLoading(false);
      if (res) {
        setShowSuccessMsg(true);
        setSuccessMsg({
          status: "applied",
          msg: "Successfully Applied.",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setShowSuccessMsg(false);
      }
    }
  };

  const closeDialog = () => {
    setShowConfirmDialog(false);
  };

  const openDialog = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmClick = () => {
    handleApply();
    closeDialog();
  };

  return (
    <div>
      {!orgId && (
        <button className={vacancyListStyle.apply__btn} onClick={openDialog}>
          {loading ? "Applying..." : "Apply"}
        </button>
      )}
      {showMessage && <PopUpMsg loginRes={message} setLoginRes={setMessage} />}
      {showSuccessMsg && (
        <PopUpMsg loginRes={successMsg} setLoginRes={setSuccessMsg} />
      )}
      {showConfirmDialog && (
        <Dialog
          onClose={closeDialog}
          onConfirm={handleConfirmClick}
          msg={"Are you sure."}
        />
      )}
    </div>
  );
};

export default ApplyBtn;

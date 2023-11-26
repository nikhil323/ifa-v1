"use client";

import React, { useState, useRef, useEffect } from "react";
//css
import vacancyListStyle from "./vacancyDetail.module.css";
import PopUpMsg from "@/components/PopUpMsg/PopUpMsg";
import Dialog from "@/components/Dialog/Dialog";

const ApplyBtn = () => {
  const stdId = localStorage.getItem("studentId");
  const orgId = localStorage.getItem("orgId");
  const [showMessage, setShowMessage] = useState(false);
  const initialMsg = {
    status: "",
    msg: "",
  };
  const [message, setMessage] = useState(initialMsg);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

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

  const handleApply = () => {
    if (!stdId) {
      // setShowConfirmDialog(false);
      setShowMessage(true);
      setMessage({
        status: "login-to-proceed",
        msg: "Login first to Apply.",
      });
    } else {
      console.log("running here---->");
      setShowMessage(false);
      // setShowConfirmDialog(true);
      //call apply api here
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
          Apply
        </button>
      )}
      {showMessage && <PopUpMsg loginRes={message} setLoginRes={setMessage} />}
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

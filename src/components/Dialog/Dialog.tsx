"use client";

import React from "react";

import dialogStyles from "./dialog.module.css";

const Dialog: React.FC<{
  onClose: () => void;
  onConfirm: () => void;
  msg: string;
}> = ({ onClose, onConfirm, msg }) => {
  return (
    <div className={dialogStyles.container}>
      <div className={dialogStyles.inner}>
        <div className={dialogStyles.topSection}>
          <p className={dialogStyles.confirmText}>Confirm</p>
          <button className={dialogStyles.crossBtn} onClick={onClose}>
            &#x292B;
          </button>
        </div>
        <section className={dialogStyles.dialogMsg}>{msg}</section>
        <div className={dialogStyles.bottomSection}>
          <button className={dialogStyles.okBtn} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;

import Image from "next/image";
import profileStyles from "./profileStyles.module.css"

export const ResumePreview = ({selectedResume, formData}:any) => {
  // Case 1: New file selected (File object)
  if (selectedResume instanceof File) {
    const fileType = selectedResume.type;

    if (fileType === "application/pdf") {
      return (
        <embed
          src={URL.createObjectURL(selectedResume)}
          type="application/pdf"
          width="150"
          height="150"
        />
      );
    } else if (fileType.startsWith("image/")) {
      return (
        <Image
          src={URL.createObjectURL(selectedResume)}
          width={150}
          height={150}
          alt="resume preview"
          className={profileStyles?.profileImgPrev}
        />
      );
    }
  }

  // Case 2: resume from backend (string URL)
  if (typeof formData?.resume === "string" && formData.resume.length > 0) {
    const url = formData.resume;

    if (url.endsWith(".pdf")) {
      return (
        <embed src={url} type="application/pdf" width="150" height="150" />
      );
    } else {
      return (
        <Image
          src={url}
          width={150}
          height={150}
          alt="resume preview"
          className={profileStyles?.profileImgPrev}
        />
      );
    }
  }

  // Case 3: Default placeholder
  return (
    <Image
      src="http://via.placeholder.com/150"
      width={150}
      height={150}
      alt="placeholder"
      className={profileStyles?.profileImgPrev}
    />
  );
};

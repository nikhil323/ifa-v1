import React from "react";
import Image from "next/image";

//image
import contactUs from "../../../public/images/contact_us.svg";

//css
import contactUsStyles from "./contactUs.module.css";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className={contactUsStyles.container}>
      <Image
        src={contactUs}
        alt="Contact us"
        className={contactUsStyles.contactUsImg}
      />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;

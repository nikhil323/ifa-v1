"use client";

import React from "react";

//css
import contactUsStyles from "./contactUs.module.css";

const ContactUsForm = () => {
  return (
    <div className={contactUsStyles.content}>
      <form action="#">
        <h3 className={contactUsStyles.title}>Get In Touch</h3>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className={contactUsStyles.contactName}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className={`${contactUsStyles.contactName}`}
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Write your message here"
            className={`${contactUsStyles.contactName} ${contactUsStyles.contactMsg}`}
          />
        </div>
        <input type="submit" value="submit" className={contactUsStyles.submitBtn}/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae
          mollitia dolores ipsum nam accusamus perspiciatis placeat magni, error
          molestias.
        </p>
      </form>
    </div>
  );
};

export default ContactUsForm;

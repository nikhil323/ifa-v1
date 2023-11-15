import React from "react";
import Link from "next/link";

//css
import footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.platform}>
          <h2 className={footerStyles.platformText}>
            Path Finder, begin your professional journey&#174;
          </h2>
        </div>
        {/* <h3 className={footerStyles.mb_medium}>Helpful Links</h3> */}
        <div className={footerStyles.links}>
          <Link href="/" className={footerStyles.link}>
            Home
          </Link>
          <Link href="/about-us">About us</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/all-posts">All Post</Link>
        </div>
        <div className={footerStyles.location}>
          {/* <h3 className={footerStyles.mb_medium}>Our Location</h3> */}
          <p>Lokanthali, Bhaktapur</p>
          <p>pathfinder@gmail.com</p>
          <p>+977 54312</p>
        </div>
        <div className={footerStyles.links}>
          <Link href="facebook.com">Facebook</Link>
          <Link href="linkedin.com">Linked In</Link>
          <Link href="twitter.com">Twitter</Link>
        </div>
      </div>
      <div className={footerStyles.copyright}>
        <h4>&#169; 2023 Path Finder. All rights reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;

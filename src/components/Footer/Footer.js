import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import SendIcon from "@material-ui/icons/Send";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link } from "react-router-dom";

export const Footer = () => {
  const url =
    "https://gmail.us2.list-manage.com/subscribe/post?u=10b8e19ded90bd0b1aa1ec54a&amp;id=71a65a4ea8";

  return (
    <div className="footer">
      <div className="footer__topContainer">
        <div className="footer__firstContainer">
          <h1 className="footer__title">Jayanthi's Kitchen</h1>
          <div className="footer__firstContainerLinks">
            <a href="https://www.facebook.com/profile.php?id=100057079960776">
              <FacebookIcon className="footer__firstContainerLink" />
            </a>
            <a href="https://www.instagram.com/jayanthyskitchen/">
              <InstagramIcon className="footer__firstContainerLink" />
            </a>
          </div>
        </div>
        <div className="footer__secondContainer">
          <h1 className="footer__title">USEFUL LINKS</h1>
          <Link to="/about">
            <h4>About us</h4>
          </Link>
          <Link to="/contact">
            <h4>Contact us</h4>
          </Link>
          <Link to="/products">
            <h4>Products</h4>
          </Link>
        </div>
        <div className="footer__thirdContainer">
          <h1 className="footer__title">SUBSCRIBE</h1>
          <p>
            Enter your email address for our mailing list to keep yourself
            updated.
          </p>
          <div className="footer__thirdContainerMail">
            <MailchimpSubscribe url={url} className="subscribe__mail" />
            {/* <SendIcon /> */}
          </div>
        </div>
      </div>
      <div className="footer__bottomContainer">
        <div className="footer__copyright">
          Copyright © 2020 TM Jayanthi's Kitchen - All Rights Reserved.
        </div>
        <div className="footer__logo">
          <h1>Jayanthi's Kitchen</h1>
        </div>
      </div>
    </div>
  );
};

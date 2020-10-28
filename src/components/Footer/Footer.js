import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import SendIcon from "@material-ui/icons/Send";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__topContainer">
        <div className="footer__firstContainer">
          <h1 className="footer__title">Jayanthi's Kitchen</h1>
          <div className="footer__firstContainerLinks">
            <FacebookIcon className="footer__firstContainerLink" />
            <InstagramIcon className="footer__firstContainerLink" />
          </div>
        </div>
        <div className="footer__secondContainer">
          <h1 className="footer__title">USEFUL LINKS</h1>
          <h4>About us</h4>
          <h4>Contact us</h4>
        </div>
        <div className="footer__thirdContainer">
          <h1 className="footer__title">SUBSCRIBE</h1>
          <p>
            Enter your email address for our mailing list to keep yourself
            updated.
          </p>
          <div className="footer__thirdContainerMail">
            <input type="text" placeholder="ENTER YOUR EMAIL" />
            <SendIcon />
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

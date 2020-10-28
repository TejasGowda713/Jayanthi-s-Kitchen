import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="bannerBody">
      <div className="image-overlay"></div>
      <img className="bannerBody__image" src="images/home2.jpg" />
      <p>
        “Our primary health care should begin on the farm and in our hearts, and
        not in some laboratory of the biotech and pharmaceutical companies.”
        <br />
        <br />― Gary Hopkins
      </p>
    </div>
  );
}

export default Banner;

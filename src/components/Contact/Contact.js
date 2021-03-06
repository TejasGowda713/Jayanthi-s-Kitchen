import React, { useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Contact.css";
import MapContainer from "./MapContainer";
import "leaflet/dist/leaflet.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact">
      <Header />
      <center>
        <h1 className="contact__title">get in touch with us</h1>
      </center>
      <MapContainer />
      <div className="contact__container">
        <div className="contact__leftContainer">
          <div className="contact__address">
            <h4>Address :</h4>
            <p className="contact__para">"Farm House", Guddehosur,</p>
            <p className="contact__para">Kushalnagar, Kodagu- 571234</p>
          </div>
          <div className="contact__mail">
            <h4>E-Mail :</h4>
            <p className="contact__mailid">jayanthyskitchen@gmail.com</p>
          </div>
        </div>
        <div className="contact__rightContainer">
          <div className="contact__phone">
            <h4>Phone Number :</h4>
            <p className="contact__para">9880382259</p>
          </div>
          <div className="contact__website">
            <h4>Website :</h4>
            <p className="contact__para">jayanthiskitchen.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

// 12.9716 77.5946

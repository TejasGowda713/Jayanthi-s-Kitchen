import React, { useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./About.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <Header />
      <div className="about__container">
        <div className="about__topContainer">
          <center>
            <h2 className="about__containerTitle">something about us !</h2>
          </center>

          <h3>
            As being a family owned business we promise you to offer the best
            nourished products to the family like us.
          </h3>
          <h3>
            For us it’s not just about the bottom line it’s about “culture”,
            “values”, “commitment to community” and “entrepreneurial spirit”.
          </h3>
          <h3>
            We are here to present the society with the gift of nature packed
            with love.
          </h3>
        </div>

        <div className="about__mission">
          <center>
            <h4>Our Mission</h4>
          </center>

          <p>
            To help people live a greater, nourishing, and healthier life by
            providing them with 100% certified, authentic better homemade food.
          </p>
        </div>

        <div className="about__vision">
          <center>
            <h4>Our Vision</h4>
          </center>
          <p>
            To make consumers aware of the benefits of organic food by giving
            them healthy products.
          </p>
          <p>
            To restore the environment and advance on a path to sustainability.
          </p>
          <p>
            To create a big movement that would lead people to switch to organic
            food and take up a healthier lifestyle just like it used to be
            hundreds of years ago, when pesticides were not introduced and
            everything we ate was natural and chemical free.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

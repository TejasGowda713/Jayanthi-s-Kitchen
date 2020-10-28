import React, { useEffect } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import "./Home.css";

import { Header } from "../Header/Header";
import { Comp1 } from "./Comp1";
import { Footer } from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Header />
      <Banner />
      <Comp1 />
      <Footer />
    </div>
  );
};

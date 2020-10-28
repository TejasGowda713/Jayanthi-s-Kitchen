import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import "./Home.css";
import { useHistory } from "react-router-dom";

export const Comp1 = () => {
  const history = useHistory();
  return (
    <div>
      <section
        style={{
          overflow: "hidden",
        }}
      >
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(-100px)"
                  : "translateY(200px)",
              }}
            >
              {(props) => (
                <div className="homeContainer" style={{ ...props }}>
                  <div className="home__leftContainer">
                    <Spring
                      delay={800}
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0px)"
                          : "translateX(-500px)",
                      }}
                    >
                      {(props) => (
                        <div
                          className="home__leftContainerheading"
                          style={{ ...props }}
                        >
                          <h1>Welcome to</h1>
                          <h2>Jayanthi's Kitchen</h2>
                        </div>
                      )}
                    </Spring>
                    <p>
                      Jayanthi’s Kitchen is a family owned business where we
                      grow, prepare and present in front of you. Our vision is
                      to present the best natural and home-made products to
                      carry a healthy lifestyle in the community. We are excited
                      to deliver you an experience of quality.
                      <br />
                      <br />
                      <span>
                        “Our primary health care should begin on the farm and in
                        our hearts, and not in some laboratory of the biotech
                        and pharmaceutical companies.”
                        <br />― Gary Hopkins
                      </span>
                    </p>

                    <h4 onClick={() => history.push("/products")}>
                      Our products <ArrowRightAltIcon />
                    </h4>
                  </div>
                  <div className="home__rightContainer"></div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </section>
    </div>
  );
};

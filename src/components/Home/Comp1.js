import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import "./Home.css";

export const Comp1 = () => {
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
              // from={{ opacity: 0, transform: "translateY(200px)" }}
              // to={{ opacity: 1, transform: "translateY(0px)" }}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(-50px)"
                  : "translateY(200px)",
              }}
            >
              {(props) => (
                <div className="homeContainer" style={{ ...props }}>
                  <div className="home__leftContainer">
                    <h1>Welcome to</h1>
                    <h2>Jayanthi's Kitchen</h2>
                    <p>
                      Our dream is to offer the best natural products to promote
                      a healthy lifestyle in the community. Arya’s Aroma is a
                      family owned business where we also have an organic farm
                      near Solur, Bangalore which has been certified by the
                      Karnataka State Seed And Organic Certification Agency. We
                      are excited to bring a sense of discovery and adventure
                      into food shopping.
                    </p>

                    <h4>
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

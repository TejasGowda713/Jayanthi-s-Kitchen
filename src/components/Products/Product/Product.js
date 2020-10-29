import { Button, Card } from "@material-ui/core";
import React, { useState } from "react";
import "./Product.css";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  // media: {
  //   height: 170,
  //   width: 300,
  //   objectFit: "cover",
  // },
});

function Product({ img, title, description, price }) {
  const classes = useStyles();
  const [selected, setSelected] = useState(price[0]);
  const pickleTypes = [
    {
      name: "Tuna",
      price: [250, 500, 1000],
    },
    {
      name: "Prawn",
      price: [375, 750, 1500],
    },
    {
      name: "Mushroom",
      price: [250, 500, 1000],
    },
    {
      name: "Bamboo",
      price: [250, 500, 1000],
    },
    {
      name: "BitterLime",
      price: [250, 500, 1000],
    },
    {
      name: "Pork",
      price: [250, 500, 1000],
    },
  ];
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__leftContainer">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(-50px)",
                }}
              >
                {(props) => (
                  <Card className={classes.root} style={{ ...props }}>
                    <CardActionArea>
                      <CardMedia
                        className="product__imageDetail"
                        image={img}
                        title={title}
                      />
                    </CardActionArea>
                  </Card>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={500}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0px)" : "translateX(100px)",
              }}
            >
              {(props) => (
                <div className="product__rightContainer" style={{ ...props }}>
                  <p>{description}</p>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={2000}
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {(props) => (
              <div className="product__priceCategory" style={{ ...props }}>
                {title === "Pickle" ? (
                  <div className="product__pickle">
                    <h3>Pickle Types</h3>
                    {pickleTypes.map((item) => (
                      <div className="pickle__type">
                        <div className="pickle__types">
                          <Button
                            onClick={() => setSelected(item.price[0])}
                            variant="outlined"
                            className="pickleTypes__btn"
                          >
                            {item.name}
                          </Button>
                        </div>
                        <div className="pickle__prices">
                          <Button
                            onClick={() => setSelected(item.price[0])}
                            variant="outlined"
                            className="price__btn"
                          >
                            250 gms
                          </Button>
                          <Button
                            onClick={() => setSelected(item.price[1])}
                            variant="outlined"
                            className="price__btn"
                          >
                            500 gms
                          </Button>
                          <Button
                            onClick={() => setSelected(item.price[2])}
                            variant="outlined"
                            className="price__btn"
                          >
                            1 kg
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <Button
                      onClick={() => setSelected(price[0])}
                      variant="outlined"
                      className="price__btn"
                    >
                      250 gms
                    </Button>
                    <Button
                      onClick={() => setSelected(price[1])}
                      variant="outlined"
                      className="price__btn"
                    >
                      500 gms
                    </Button>
                    <Button
                      onClick={() => setSelected(price[2])}
                      variant="outlined"
                      className="price__btn"
                    >
                      1 kg
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={2000}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "rotateX(0deg)" : "rotateX(180deg)",
            }}
          >
            {(props) => (
              <h6 className="product__price" style={{ ...props }}>
                Price Rs.{selected}
              </h6>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  );
}

export default Product;

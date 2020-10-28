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
  media: {
    height: 170,
    width: 300,
    objectFit: "cover",
  },
});

function Product({ img, title, description, price }) {
  const classes = useStyles();
  const [selected, setSelected] = useState(price[0]);
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
                        className={classes.media}
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
        <div className="product__rightContainer">
          <p>{description}</p>
        </div>
      </div>
      <div className="product__priceCategory">
        <Button onClick={() => setSelected(price[0])} variant="outlined">
          250 gms
        </Button>
        <Button onClick={() => setSelected(price[1])} variant="outlined">
          500 gms
        </Button>
        <Button onClick={() => setSelected(price[2])} variant="outlined">
          1 kg
        </Button>
      </div>

      <h6 className="product__price">Price Rs.{selected}</h6>
    </div>
  );
}

export default Product;

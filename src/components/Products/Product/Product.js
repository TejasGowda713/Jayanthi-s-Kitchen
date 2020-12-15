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
    maxWidth: 800,
  },
  media: {
    height: 170,
    width: 400,
    objectFit: "cover",
  },
});

function Product({ img, title, description, price }) {
  const classes = useStyles();
  const [selected, setSelected] = useState(price[0]);
  const spec = "*AS PER SEASON AND STOCK";

  const pickleTypes = [
    {
      name: "Tuna Fish",
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
      name: "Bamboo Shoot",
      price: [250, 500, 1000],
    },
    {
      name: "BitterLime",
      price: [200, 375, 750],
    },
    {
      name: "Pork",
      price: [250, 500, 1000],
    },
  ];
  const honeyTypes = [
    {
      name: "Anthill Honey",
      price: 800,
    },
    {
      name: "Box Honey",
      price: 800,
    },
    {
      name: "Organic Honey",
      price: 800,
    },
  ];
  const gingerTypes = [
    {
      name: "Organic Ginger",
      price: [200, 250, 500],
    },
    {
      name: "Organic Ginger Paste",
      price: [200, 300, 600],
    },
  ];

  const gheeTypes = [
    {
      name: "Ghee(Desi Cow)",
      price: [250, 500, 1000],
    },
    {
      name: "Gir Ghee",
      price: [750, 1500, 3000],
    },
  ];
  const chilliTypes = [
    {
      name: "Bird Eyed Chilli",
      price: [375, 750, 1500],
    },
    {
      name: "Bird Eyed Chilli Powder",
      price: [375, 750, 1500],
    },
  ];

  if (title === "Pickle") {
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
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(100px)",
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
  } else if (title === "Honey") {
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
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(100px)",
                }}
              >
                {(props) => (
                  <div className="product__rightContainer" style={{ ...props }}>
                    <p>{description}</p>
                    <p style={{ color: "white", fontWeight: "bold" }}>{spec}</p>
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
                  <div className="product__pickle">
                    <h3>Honey Types</h3>
                    {honeyTypes.map((item) => (
                      <div className="pickle__type">
                        <div className="pickle__types">
                          <Button
                            onClick={() => setSelected(item.price)}
                            variant="outlined"
                            className="honeyTypes__btn"
                          >
                            {item.name}
                          </Button>
                        </div>
                        <div className="pickle__prices">
                          <Button
                            onClick={() => setSelected(item.price)}
                            variant="outlined"
                            className="honeyprice__btn"
                          >
                            1 Bottle
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
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
  } else if (title === "Ginger (Coorg Origin)") {
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
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(100px)",
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
                  <div className="product__pickle">
                    <h3>Ginger Types</h3>
                    {gingerTypes.map((item) => (
                      <div className="pickle__type">
                        <div className="pickle__types">
                          <Button
                            onClick={() => setSelected(item.price)}
                            variant="outlined"
                            className="honeyTypes__btn"
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
  } else if (title === "Ghee") {
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
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(100px)",
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
                  <div className="product__pickle">
                    <h3>Ghee Types</h3>
                    {gheeTypes.map((item) => (
                      <div className="pickle__type">
                        <div className="pickle__types">
                          <Button
                            onClick={() => setSelected(item.price)}
                            variant="outlined"
                            className="honeyTypes__btn"
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
  } else if (title === "Chilli") {
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
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(100px)",
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
                  <div className="product__pickle">
                    <h3></h3>
                    {chilliTypes.map((item) => (
                      <div className="pickle__type">
                        <div className="pickle__types">
                          <Button
                            onClick={() => setSelected(item.price)}
                            variant="outlined"
                            className="honeyTypes__btn"
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
  } else if (title === "Organic Jeerige    Sanna Rice") {
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
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(100px)",
                }}
              >
                {(props) => (
                  <div className="product__rightContainer" style={{ ...props }}>
                    <p>{description}</p>
                    <p style={{ color: "white", fontWeight: "bold" }}>{spec}</p>
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
                  {null}
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
                  Price Rs.{selected}/kg
                </h6>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    );
  } else {
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
                  transform: isVisible
                    ? "translateX(0px)"
                    : "translateX(100px)",
                }}
              >
                {(props) => (
                  <div className="product__rightContainer" style={{ ...props }}>
                    <p>{description}</p>
                    {title === "Pepper" ||
                    title === "Country Egg     (Golden Egg)" ? (
                      <p style={{ color: "white", fontWeight: "bold" }}>
                        {spec}
                      </p>
                    ) : null}
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
                  {title === "Country Egg     (Golden Egg)" ? null : (
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
                <>
                  {title === "Country Egg     (Golden Egg)" ? (
                    <h6
                      className="egg__price product__price"
                      style={{ ...props }}
                    >
                      Price Rs.{selected}/piece
                    </h6>
                  ) : (
                    <h6 className="product__price" style={{ ...props }}>
                      Price Rs.{selected}
                    </h6>
                  )}
                </>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    );
  }
}

export default Product;

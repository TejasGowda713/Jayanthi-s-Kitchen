import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import "./Products.css";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Cards from "./Card/Cards";
import Product from "./Product/Product";

import { Footer } from "../Footer/Footer";
import ProductsMobile from "./ProductsMobile";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "white",
    display: "flex",
    height: 800,
    paddingRight: 50,
    paddingLeft: 50,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingRight: 50,
    width: 800,
  },
}));

function Products() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [sidebar, setSidebar] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  }, [windowSize]);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value]);

  return (
    <div className="products">
      <Header />
      {sidebar ? (
        <ProductsMobile />
      ) : (
        <div className="products__container">
          <h2 className="products__containerHeading">
            THE PRODUCT THAT CAN CHANGE YOUR LIFE !
          </h2>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab
                className="product__tab"
                icon={
                  <Cards img="/images/black-pepper.jpg" title="Black Pepper" />
                }
                {...a11yProps(0)}
              />
              <Tab
                label={<Cards img="/images/coffee.jpg" title="Coffee" />}
                {...a11yProps(1)}
              />
              <Tab
                label={<Cards img="/images/honey.jpg" title="Honey" />}
                {...a11yProps(2)}
              />
              <Tab
                label={<Cards img="/images/pork.jpg" title="Pork" />}
                {...a11yProps(3)}
              />
              <Tab
                label={
                  <Cards img="/images/white-mushrooms.jpg" title="Mushrooms" />
                }
                {...a11yProps(4)}
              />
              <Tab
                label={<Cards img="/images/galorean.jpg" title="Pickle" />}
                {...a11yProps(5)}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Product
                img="/images/desc/pepper plant.jpg"
                title="Pepper"
                description="Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. When fresh and fully mature, the fruit is about 5 mm in diameter and dark red, and contains a single seed, like all drupes."
                price={[200, 500, 800]}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Product
                img="/images/desc/coffee plantation.jpg"
                title="Coffee"
                description="Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.  Dried coffee seeds are roasted to varying degrees, depending on the desired flavor."
                price={[220, 520, 800]}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Product
                img="/images/desc/honey1.jpg"
                title="Honey"
                description="Honey is a sweet, viscous food substance made by honey bees and some related insects. Bees produce honey from the sugary secretions of plants or from secretions of other insects by regurgitation, enzymatic activity, and water evaporation."
                price={[230, 520, 800]}
              />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Product
                img="/images/desc/pork-loin_1.jpg"
                title="Pork"
                description="Pork is the culinary name for the meat of a domestic pig. It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved."
                price={[240, 520, 800]}
              />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Product
                img="/images/desc/Mushroom-farming.jpg"
                title="Mushroom"
                description="A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source."
                price={[250, 520, 800]}
              />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Product
                img="/images/desc/fff.jpg"
                title="Pickle"
                description="On a most general level, pickles are foods soaked in solutions that help prevent spoilage. There are two basic categories of pickles. The first type includes pickles preserved in vinegar, a strong acid in which few bacteria can survive."
                price={[250, 520, 800]}
              />
            </TabPanel>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Products;

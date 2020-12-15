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
    if (window.innerWidth < 888) {
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
                icon={<Cards img="/images/black-pepper.jpg" title="Pepper" />}
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
                label={
                  <Cards
                    img="/images/ginger-card.jpg"
                    title="Ginger (Coorg Origin)"
                  />
                }
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
              <Tab
                label={
                  <Cards
                    img="/images/matured-paddy.jpg"
                    title="Organic Jeerige    Sanna Rice"
                  />
                }
                {...a11yProps(6)}
              />
              <Tab
                label={
                  <Cards
                    img="/images/eggs.jpg"
                    title="Country Egg     (Golden Egg)"
                  />
                }
                {...a11yProps(7)}
              />
              <Tab
                label={<Cards img="/images/ghee.jpg" title="Ghee" />}
                {...a11yProps(8)}
              />
              <Tab
                label={<Cards img="/images/chilli.jpg" title="Chilli" />}
                {...a11yProps(9)}
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
                price={[1000]}
              />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Product
                img="/images/desc/ginger-benefits.jpg"
                title="Ginger (Coorg Origin)"
                description="Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine. It is a very popular spice used worldwide; whether it be used to spice up meals, or as a medicine, the demand for ginger all over the world has been consistent throughout history."
                price={[200, 250, 500]}
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
            <TabPanel value={value} index={6}>
              <Product
                img="/images/desc/organic-rice.png"
                title="Organic Jeerige    Sanna Rice"
                description="This crop will harvest Cultyvity by trubels formers in Karnataka Malanadu Area devolped by Organic method more than 5Yrs."
                price={[90]}
              />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Product
                img="/images/desc/eggs.jpeg"
                title="Country Egg     (Golden Egg)"
                description="In terms of nutrition, country eggs are considered to be healthier than other eggs as they come from country chickens that are not injected with artificial hormones. ... These eggs are rich in protein and vitamins and have a mild taste. These eggs are ideal for curries or boiled-egg recipes."
                price={[12]}
              />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Product
                img="/images/desc/ghee.jpg"
                title="Ghee"
                description="Ghee is typically prepared by simmering butter, which is churned from cream, skimming any impurities from the surface, then pouring and retaining the clear liquid fat while discarding the solid residue that has settled to the bottom. Ghee is a class of clarified butter that originated in ancient India. It is commonly used in cuisine, traditional medicine, and religious rituals."
                price={[250, 500, 1000]}
              />
            </TabPanel>
            <TabPanel value={value} index={9}>
              <Product
                img="/images/desc/chilli.jpg"
                title="Chilli"
                description="Birds Eye is a chili variety from Africa. In Ethiopia, among other places, it still grows wild in the wild. They are small but productive chili plants. So it is not surprising that it is also cultivated agriculturally. Birdeye chilis are popular worldwide as a spice. Especially in India and Asia, chili peppers are often used for cooking or cut into salads.You can also find the narrow, red peppers in Asia Shops. There they are often sold as Thai Chili, Thai Dragon or Piri Piri."
                price={[375, 750, 1500]}
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

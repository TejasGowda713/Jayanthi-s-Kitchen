import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Cards from "./Card/Cards";
import Product from "./Product/Product";

import "./ProductsMobile.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    marginTop: "80px",
    paddingTop: "80px",
  },
}));

export default function ProductsMobile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="black">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          style={{ backgroundColor: "black" }}
        >
          <Tab
            className="product__tab"
            icon={<Cards img="/images/black-pepper.jpg" title="Black Pepper" />}
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
              <Cards
                img="/images/white-mushrooms.jpg"
                title="White Mushrooms"
              />
            }
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Product
          img="/images/black-pepper.jpg"
          title="Black Pepper"
          description="Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. When fresh and fully mature, the fruit is about 5 mm in diameter and dark red, and contains a single seed, like all drupes."
          price={[200, 500, 800]}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Product
          img="/images/coffee.jpg"
          title="Coffee"
          description="Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.  Dried coffee seeds are roasted to varying degrees, depending on the desired flavor."
          price={[220, 520, 800]}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Product
          img="/images/honey.jpg"
          title="Honey"
          description="Honey is a sweet, viscous food substance made by honey bees and some related insects. Bees produce honey from the sugary secretions of plants or from secretions of other insects by regurgitation, enzymatic activity, and water evaporation."
          price={[230, 520, 800]}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Product
          img="/images/pork.jpg"
          title="Pork"
          description="Pork is the culinary name for the meat of a domestic pig. It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved."
          price={[240, 520, 800]}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Product
          img="/images/white-mushrooms.jpg"
          title="White Mushrooms"
          description="A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source."
          price={[250, 520, 800]}
        />
      </TabPanel>
    </div>
  );
}

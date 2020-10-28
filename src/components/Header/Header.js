import React, { useEffect, useState } from "react";
import "./Header.css";

import PhoneIcon from "@material-ui/icons/Phone";
import { Link, useHistory } from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import CloseIcon from "@material-ui/icons/Close";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "black",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      {sidebar === true ? (
        <div className="headermobileContainer">
          <Link to="/">
            <img
              className="headermobile__logo"
              src="/images/logo.jpeg"
              alt=""
            />
          </Link>

          <div className="headermobile__options">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon className="menubtn" />
            </IconButton>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <IconButton
                color="inherit"
                aria-label="close drawer"
                onClick={handleDrawerClose}
                className="sidebar__closebtn"
              >
                <CloseIcon />
              </IconButton>
              <div className="headermobile__topOptions">
                <Link to="/" className="headermobile__option">
                  Home
                </Link>
                <Link to="/about" className="headermobile__option">
                  About
                </Link>
                <Link to="/contact" className="headermobile__option">
                  Contact
                </Link>
                <div className="headermobile__bottomOption">
                  <PhoneIcon /> 123456789
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      ) : (
        <div className="headerContainer">
          <Link to="/">
            <img className="header__logo" src="/images/logo.jpeg" alt="" />
          </Link>

          <div className="header__options">
            <div className="header__topOptions">
              <Link to="/">
                <div className="header__option">Home</div>
              </Link>
              <Link to="/about">
                <div className="header__option">About</div>
              </Link>
              <Link to="/contact">
                <div className="header__option">Contact</div>
              </Link>
            </div>
            <div className="header__bottomOptions">
              <div className="header__bottomOption">
                <PhoneIcon /> 123456789
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

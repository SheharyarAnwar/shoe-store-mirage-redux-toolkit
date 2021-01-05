import { Box, Drawer, Grid, Hidden, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
interface NavbarProps {
  links: string[];
}
const Index: React.FC<NavbarProps> = ({ links }) => {
  const classes = styles();
  const [activeItem, setActiveItem] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log(drawerOpen, "useState");
  }, [drawerOpen]);
  const toggleDrawer = () => {
    console.log("Clicked-drawer");
    setDrawerOpen((prev) => !prev);
  };
  const renderedLinks = links.map((val, i) => {
    return (
      <Link to={`/${val.toLowerCase()}`} key={i}>
        <div
          onClick={() => setActiveItem(i)}
          className={activeItem === i ? classes.active : undefined}
        >
          <Typography variant="subtitle1">
            {val === "" ? "Home" : val}
          </Typography>
        </div>
      </Link>
    );
  });
  return (
    <Box className={classes.root}>
      <Grid xs={4} item container className={classes.logo}>
        <Logo fill="white" width={100} />
      </Grid>
      <Hidden xsDown>
        <Grid xs={8} container item className={classes.navItems}>
          {renderedLinks}
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid xs={4} container item className={classes.navItems}>
          <span onClick={toggleDrawer} className={classes.hamburger}></span>
          <Drawer onClick={toggleDrawer} anchor={"right"} open={drawerOpen}>
            {renderedLinks}
          </Drawer>
        </Grid>
      </Hidden>
    </Box>
  );
};

export default Index;

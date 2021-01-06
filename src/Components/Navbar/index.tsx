import { Box, Drawer, Grid, Hidden, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import styles from "./styles";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../Assets/cart.svg";
interface NavbarProps {
  links: string[];
}
const Index: React.FC<NavbarProps> = ({ links }) => {
  const classes = styles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  const renderedLinks = links.map((val, i) => {
    return (
      <NavLink
        activeClassName={classes.active}
        to={`/${val.toLowerCase()}`}
        key={i}
      >
        <div>
          <Typography variant="subtitle1">{val}</Typography>
        </div>
      </NavLink>
    );
  });
  return (
    <Box className={classes.root}>
      <Grid xs={4} item container className={classes.logo}>
        <Logo fill="white" width={70} />
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
      <Grid xs={4} item container className={classes.logo}>
        <CartIcon width={25} />
      </Grid>
    </Box>
  );
};

export default Index;

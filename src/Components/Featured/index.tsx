import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";

import { Shoes } from "../../Interfaces";
interface FeaturedProps {
  featureProduct: Shoes;
}
const Index: React.FC<FeaturedProps> = ({ featureProduct }) => {
  const classes = styles();
  return (
    <>
      {featureProduct ? (
        <Grid container className={classes.root}>
          <Grid item xs={12} lg={4} className={classes.description}>
            <Typography variant="h2">Just Do It</Typography>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.image}>
            <img src={featureProduct.image} alt="Name"></img>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.pricing}>
            <Typography variant="h4">{featureProduct.name}</Typography>
            <Typography variant="h3">${featureProduct.price}</Typography>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default Index;

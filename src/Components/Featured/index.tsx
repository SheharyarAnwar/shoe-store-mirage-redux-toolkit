import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import testfile from "../../Assets/men-crimson.png";

const Index: React.FC = () => {
  const classes = styles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={4} className={classes.description}>
          <Typography variant="h2">Just Do It</Typography>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.image}>
          <img src={testfile} alt="Name"></img>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.pricing}>
          <Typography variant="h4">Name</Typography>
          <Typography variant="h3">$220</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;

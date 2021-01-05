import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import SliderCard from "./SliderCard/index";
const Index: React.FC = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.root}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Box>
    </>
  );
};

export default Index;

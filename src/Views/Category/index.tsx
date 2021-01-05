import classes from "*.module.css";
import { Box } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import Featured from "../../Components/Featured/index";
import Slider from "../../Components/Slider/index";
const Index: React.FC = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.root}>
        <Featured />
        <Slider />
      </Box>
    </>
  );
};

export default Index;

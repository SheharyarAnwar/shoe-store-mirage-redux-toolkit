import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";
const Index: React.FC = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.root}></Box>
    </>
  );
};

export default Index;

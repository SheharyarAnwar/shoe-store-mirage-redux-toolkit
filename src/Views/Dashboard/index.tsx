import { Box } from "@material-ui/core";
import React, { useMemo } from "react";
import Featured from "../../Components/Featured/index";
import Slider from "../../Components/Slider/index";
import { Shoes } from "../../Interfaces";
import styles from "./styles";
interface DashboardProps {
  data: Shoes[];
}
const Index: React.FC<DashboardProps> = ({ data }) => {
  const classes = styles();
  const randomFeatured = useMemo(() => {
    return data && Math.floor(Math.random() * data!.length);
  }, [data]);
  return (
    <>
      <Box className={classes.root}>
        <Featured featureProduct={data && data[randomFeatured]} />
        <Slider list={data && data} />
      </Box>
    </>
  );
};

export default Index;

import { Box } from "@material-ui/core";
import React, { useMemo } from "react";
import styles from "./styles";
import SliderCard from "./SliderCard/index";
import { Scroll, Frame } from "framer";
import { Shoes } from "../../Interfaces";
interface SliderProps {
  list: Shoes[];
}
const Index: React.FC<SliderProps> = ({ list }) => {
  const classes = styles();

  const sliderCardsTobeRendered = useMemo(() => {
    return (
      list &&
      list.map((val) => {
        return <SliderCard key={val.id} cardData={val} />;
      })
    );
  }, [list]);

  return (
    <>
      <Scroll
        height={"60%"}
        direction="horizontal"
        contentWidth={18000}
        width={"90%"}
      >
        <Frame background="transparent" width="calc(100% )">
          <Box className={classes.root}>{sliderCardsTobeRendered}</Box>
        </Frame>
      </Scroll>
    </>
  );
};

export default Index;

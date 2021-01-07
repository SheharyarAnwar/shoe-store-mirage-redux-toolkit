import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { ReactComponent as AddIcon } from "../../../Assets/Add.svg";
import { ReactComponent as MinusIcon } from "../../../Assets/minus.svg";
import { Shoes } from "./../../../Interfaces/index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Store/rootSlice";
import useAlienClick from "./../../../Hooks/useAlienClick";
interface SliderCardProps {
  cardData: Shoes;
  key: number;
}
const Index: React.FC<SliderCardProps> = ({ cardData }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const firstTime = useRef(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const outsideClicked = useAlienClick(ref, open);

  useEffect(() => {
    open && outsideClicked && setOpen(false);
  }, [outsideClicked]);
  useEffect(() => {
    if (!firstTime.current) {
      firstTime.current = true;
      return;
    }
    const initial = open ? "0px" : "200px";
    const final = open ? "200px" : "0px";
    if (ref.current) {
      ref.current.animate([{ width: initial }, { width: final }], {
        duration: open ? 600 : 200,
        easing: "ease-in-out",
      }).onfinish = () => {
        ref!.current!.style.width = final;
      };
    }
  }, [open]);

  const onAddToCartClicked = (e: any) => {
    e.stopPropagation();
    dispatch(
      addToCart({
        id: cardData.id,
        quantity: quantity,
        name: cardData.name,
        price: cardData.price,
      })
    );
    setOpen((prev) => {
      return false;
    });
    setQuantity(1);
  };
  return (
    <>
      <Box className={classes.root}>
        <div className={classes.leftContainer}>
          <img src={cardData.image} alt="shoe"></img>
        </div>
        <div className={classes.rightContainer}>
          <Typography className={classes.subtitle1} variant="subtitle1">
            {cardData.name}
          </Typography>
          <Typography className={classes.subtitle1} variant="subtitle1">
            ${cardData.price}
          </Typography>
          <Typography className={classes.subtitle2} variant="subtitle1">
            {cardData.colors} colors
          </Typography>
        </div>
        <div className={classes.button} onClick={() => setOpen(true)}>
          <AddIcon width={15} />
          <div ref={ref} className={classes.quantityTooltip}>
            <MinusIcon
              width={10}
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            />
            <Typography variant="subtitle1">{quantity}</Typography>
            <AddIcon
              width={10}
              onClick={() => setQuantity((prev) => prev + 1)}
            />
            <div className={classes.addToCart} onClick={onAddToCartClicked} />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Index;

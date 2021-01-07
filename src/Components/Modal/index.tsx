import {
  Box,
  Typography,
  Dialog,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { ReactComponent as TrashIcon } from "../../Assets/Trash.svg";
import { Cart } from "../../Interfaces";
import { removeFromCart, clearCart } from "../../Store/rootSlice";
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const Index: React.FC<SimpleDialogProps> = ({
  open,
  selectedValue,
  onClose,
}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const [checkedOut, setCheckedOut] = useState<boolean>(false);
  const cart = useSelector((state) => state.rootReducer.cart);
  const total = useSelector((state) => state.rootReducer.total);
  const checkoutClicked = () => {
    dispatch(clearCart());
    setCheckedOut(true);
  };
  const handleClose = () => {
    onClose(selectedValue);
    setCheckedOut(false);
  };
  const handleDelete = (val: Cart) => {
    dispatch(removeFromCart(val.id));
  };
  const listItems =
    cart &&
    cart.map((val) => {
      return (
        <ListItem key={val.id}>
          <ListItemText style={{ color: "#6e7589" }}>{val.name}</ListItemText>
          <ListItemText>{val.quantity}</ListItemText>
          <ListItemText>${val.price * val.quantity}</ListItemText>
          <TrashIcon onClick={() => handleDelete(val)} width={20} />
        </ListItem>
      );
    });

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Typography className={classes.heading} variant="h4">
        Cart
      </Typography>
      <Box className={classes.root}>
        {checkedOut ? (
          <Typography className={classes.heading} variant="subtitle1">
            Thanks for The Purchase !!
          </Typography>
        ) : (
          <>
            <Box className={classes.overflowBox}>
              <List className={classes.list}>{listItems}</List>
            </Box>
            <Typography className={classes.heading} variant="subtitle1">
              Total: ${total}
            </Typography>
            <Typography
              onClick={checkoutClicked}
              style={{ fontSize: "18px", color: "#6e7589", cursor: "pointer" }}
              className={classes.heading}
              variant="h2"
            >
              Checkout
            </Typography>
          </>
        )}
      </Box>
    </Dialog>
  );
};
export default Index;

import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "15vh 10vw",
    [theme.breakpoints.down("sm")]: {
      padding: "15vh 0",
    },
  },
}));
export default style;

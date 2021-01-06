import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  root: { overflowX: "hidden", paddingTop: "12vh" },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "90%",

      [theme.breakpoints.down("md")]: {
        maxWidth: "300px",
      },
      // [theme.breakpoints.down("sm")]: {
      //   maxWidth: "300px",
      // },
    },
  },
  pricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& *": {
      padding: "2%",
      [theme.breakpoints.down("md")]: {
        padding: "1% 0 0 0",
      },
    },
  },
  description: {
    padding: "6%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      padding: "6% 0 0 0",
    },
  },
}));
export default style;

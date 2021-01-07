import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  root: {
    width: "30vw",
    minWidth: "300px",

    minHeight: "300px",
  },
  overflowBox: {
    width: "100%",
    height: "200px",
    overflowY: "auto",
  },
  dialog: {
    borderRadius: "40px",
  },
  heading: {
    color: "#04091e",
    letterSpacing: "1px",
    textAlign: "center",
    fontWeight: 500,
    margin: "30px 0",
  },
  list: {
    "& li": {
      "&:hover": {
        backgroundColor: "rgba(12,12,12,0.1)",
      },
      padding: "3% 10%",
      "& svg": {
        cursor: "pointer",
      },
    },
  },
}));
export default style;

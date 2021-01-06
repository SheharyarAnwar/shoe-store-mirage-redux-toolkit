import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.gray}`,
    position: "fixed",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "12vh",
    width: "100%",
    zIndex: 1,
  },
  navItems: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100px",
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.2)",
      },
    },
  },
  active: {
    borderTop: `3px solid ${theme.palette.red}`,
  },
  logo: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  hamburger: {
    width: "30px",
    height: "10px",
    border: "solid white",
    borderWidth: "2px 0px",
    cursor: "pointer",
  },
}));
export default style;

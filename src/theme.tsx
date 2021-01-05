import { createMuiTheme } from "@material-ui/core";

const gray: string = "#6e7589";
const blue: string = "#183263";
const red: string = "#ef3a18";
const yellow: string = "#d2a549";
const slate: string = "#4b4b4b";
const lightBlue: string = "#fcf5ff";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    gray?: string;
    blue?: string;
    red?: string;
    yellow?: string;
    slate?: string;
    lightBlue?: string;
  }
  interface PaletteOptions {
    gray?: string;
    blue?: string;
    red?: string;
    yellow?: string;
    slate?: string;
    lightBlue?: string;
  }
}

let theme = createMuiTheme({
  palette: {
    gray,
    blue,
    red,
    yellow,
    slate,
    lightBlue,
  },
  overrides: {
    MuiDrawer: {
      paper: {
        justifyContent: "center",
        width: "200px",
        backgroundColor: blue,
        "& div": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          border: "none",
        },
        "& div:hover": {
          backgroundColor: "rgba(0,0,0,0.2)",
          borderLeft: `4px solid ${red}`,
        },
      },
    },
  },
});
theme.typography.subtitle1 = {
  fontFamily: "Oswald,sans-serif",
  fontSize: "calc(1.1rem )",
  color: "white",
  fontWeight: 400,
};
theme.typography.h2 = {
  fontFamily: "Orbitron,sans-serif",
  fontSize: "calc((1.8rem + 3vw))",
  color: "white",
  letterSpacing: "5px",
};
theme.typography.h4 = {
  fontFamily: "Oswald,sans-serif",
  fontSize: "calc((1.9rem + 1.5vw)/1.8)",
  letterSpacing: "2px",
  color: yellow,
};
theme.typography.h3 = {
  fontFamily: "Oswald,sans-serif",
  fontSize: "calc((1.9rem + 1.5vw)/1.3)",
  letterSpacing: "2px",
  color: "white",
};

export default theme;

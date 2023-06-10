import { red, cyan } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const COLOR_PRIMARY = red["A700"];

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    primary: {
      main: COLOR_PRIMARY,
    },
    secondary: {
      main: cyan["A400"],
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});

export const MUITheme = responsiveFontSizes(theme);

export const flexAlignCenterStyles = {
  display: "flex",
  alignItems: "center",
};

export const flexCenterStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const unstyledListStyles = {
  listStyleType: "none",
  paddingLeft: 0,
  marginBottom: 0,
};

export const CONTENT_MAX_WIDTH = 1280;
export const SNACKBAR_AUTO_HIDE_DURATION = 10000;

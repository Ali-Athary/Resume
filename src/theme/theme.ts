import {
  createTheme,
  type TypographyVariantsOptions,
} from "@mui/material/styles";

const typography: TypographyVariantsOptions = {
  fontFamily: "'B Nazanin','Roboto', sans-serif",

  h1: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "0.875rem",
    color: "#666",
  },
  button: {
    textTransform: "none",
    fontWeight: 600,
  },
};

const theme = createTheme({
  palette: {
    text: {
      primary: "#010203",
      secondary: "#373938ff",
      panelPrimary: "#fff8efff",
    },
  },
  typography: typography,
});

export default theme;

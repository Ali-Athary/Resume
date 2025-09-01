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
  h3: {
    fontSize: "1.3rem",
    fontWeight: 500,
  },
  h4: {
    fontSize: "1.2rem",
    fontWeight: 300,
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
      primary: "#010203ff",
      secondary: "#373938ff",
      panelPrimary: "#fff8efff",
      bannerPrimary: "#ffffffff",
    },
    background: {
      page: "#E9EAF5ff",
      panel: "#272635ff",
      banner: "#2c5070ff",
    },
  },
  typography: typography,
});

export default theme;

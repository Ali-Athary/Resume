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
    fontFamily: "BTitr",
  },
  h4: {
    fontSize: "1.2rem",
    fontWeight: 300,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: "0.7rem",
  },
};

const theme = createTheme({
  palette: {
    text: {
      primary: "#010203ff",
      secondary: "#4a4d4bff",
      panelPrimary: "#fff8efff",
      bannerPrimary: "#ffffffff",
    },
    background: {
      page: "#f9faffff",
      panel: "#272635ff",
      banner: "#2c5070ff",
    },
  },
  typography: typography,
});

export default theme;

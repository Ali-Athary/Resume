import { TypographyVariants } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    panelPrimary?: string;
    bannerPrimary?: string;
  }
  interface TypeBackground {
    page?: string;
    panel?: string;
    banner?: string;
  }
}

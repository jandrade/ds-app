import { globalStyle, globalFontFace } from "@vanilla-extract/css";

globalFontFace("Lato", {
  src: `local("Lato")`,
});

globalStyle("body, body *", {
  boxSizing: "border-box",
  fontFamily: "Lato, sans-serif",
});

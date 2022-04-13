import {
  globalStyle,
  globalFontFace,
  createGlobalTheme,
} from "@vanilla-extract/css";
import { vars } from "@jandrade/ds-theme";

globalFontFace("Lato", {
  src: `local("Lato")`,
});

createGlobalTheme(":root", vars);

globalStyle("body, body *", {
  boxSizing: "border-box",
  fontFamily: "Lato, sans-serif",
});

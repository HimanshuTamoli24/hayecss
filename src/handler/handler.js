import { HAYECSS_CONFIG } from "../helper/config.js";

function getValue(value, defaultValue) {
  if (!value) return defaultValue;
  return isNaN(value) ? value : value + HAYECSS_CONFIG.spacingUnit;
}

export const handlers = {
  p: (el, value) => {
    el.style.padding = getValue(value, HAYECSS_CONFIG.defaultPadding);
  },

  m: (el, value) => {
    el.style.margin = getValue(value, 0);
  },

  bg: (el, value) => {
    const color =
      HAYECSS_CONFIG.colors[value] || value;
    el.style.backgroundColor = color;
  },

  text: (el, value) => {
    const fontSizes = { sm: "12px", md: "16px", lg: "20px", xl: "24px", "2xl": "32px", "3xl": "48px" };
    if (value === "center" || value === "left" || value === "right") {
      el.style.textAlign = value;
    } else if (fontSizes[value] || (HAYECSS_CONFIG.fontSizes && HAYECSS_CONFIG.fontSizes[value])) {
      el.style.fontSize = (HAYECSS_CONFIG.fontSizes && HAYECSS_CONFIG.fontSizes[value]) ? HAYECSS_CONFIG.fontSizes[value] : fontSizes[value];
    } else {
      const color =
        HAYECSS_CONFIG.colors[value] || value;
      el.style.color = color;
    }
  },

  rounded: (el, value) => {
    el.style.borderRadius = getValue(value, 5);
  },

  px: (el, value) => {
    const v = getValue(value, 0);
    el.style.paddingLeft = v;
    el.style.paddingRight = v;
  },

  py: (el, value) => {
    const v = getValue(value, 0);
    el.style.paddingTop = v;
    el.style.paddingBottom = v;
  },

  mx: (el, value) => {
    const v = getValue(value, 0);
    el.style.marginLeft = v;
    el.style.marginRight = v;
  },

  my: (el, value) => {
    const v = getValue(value, 0);
    el.style.marginTop = v;
    el.style.marginBottom = v;
  },


  flex: (el, value) => {
    if (value === "col") el.style.flexDirection = "column";
    else if (value === "row") el.style.flexDirection = "row";
    else if (value === "wrap") el.style.flexWrap = "wrap";
    else if (value === "1") el.style.flex = "1";
    else el.style.display = "flex";
  },

  justify: (el, value) => {
    const map = { between: "space-between", around: "space-around", evenly: "space-evenly", center: "center", end: "flex-end", start: "flex-start" };
    el.style.justifyContent = map[value] || value;
  },

  items: (el, value) => {
    const map = { center: "center", end: "flex-end", start: "flex-start", stretch: "stretch" };
    el.style.alignItems = map[value] || value;
  },

  gap: (el, value) => {
    el.style.gap = getValue(value, 0);
  },

  w: (el, value) => {
    if (value === "full") el.style.width = "100%";
    else if (value === "screen") el.style.width = "100vw";
    else el.style.width = getValue(value, 0);
  },

  h: (el, value) => {
    if (value === "full") el.style.height = "100%";
    else if (value === "screen") el.style.height = "100vh";
    else el.style.height = getValue(value, 0);
  },

  font: (el, value) => {
    if (value === "bold") el.style.fontWeight = "bold";
    else if (value === "normal") el.style.fontWeight = "normal";
    else if (value === "italic") el.style.fontStyle = "italic";
    else if (value === "sans") el.style.fontFamily = "sans-serif";
    else el.style.fontFamily = value;
  },


  border: (el, value) => {
    if (value === "none") el.style.border = "none";
    else el.style.border = `1px solid ${HAYECSS_CONFIG.colors[value] || value}`;
  }
};
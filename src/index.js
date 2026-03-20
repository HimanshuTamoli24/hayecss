import { handlers } from "./handler/handler.js";

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    applyHaye();
  });
}

export function applyHaye(root = document) {
  const elements = root.querySelectorAll('[class*="haye-"]');
  elements.forEach((el) => {
    if (!el.className || typeof el.className !== "string") return;

    const classes = el.className.split(" ").filter(Boolean);

    classes.forEach((cls) => {
      let cleanCls = cls;
      if (cleanCls.startsWith("haye-")) {
        cleanCls = cleanCls.replace("haye-", "");
      }

      const parts = cleanCls.split("-");
      const type = parts[0];
      const value = parts.slice(1).join("-");

      if (handlers[type]) {
        handlers[type](el, value);
        el.classList.remove(cls);
      }
    });
  });
}

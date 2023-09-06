// gtm.js
export const GTM_ID = "AW-11324583011";

export const pageview = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GTM_ID);
};

export const trackConversion = () => {
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("event", "conversion", {
    send_to: "AW-11324583011/18iOCL2g4NwYEOPY_Zcq",
  });
};


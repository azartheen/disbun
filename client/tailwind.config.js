module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge: {
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      height: {
        ftbig: "238px",
        ftlong: "308px",
      },
      fontFamily: { opensans: ["Open Sans", "sans-serif"] },
      minHeight: {
        ftbigg: "238px",
      },
      width: {
        loginwidthbg: "404px",
      },
    },
    height: {
      ftbig: "262px",
      ftlong: "308px",
    },
    fontFamily: { opensans: ["Open Sans", "sans-serif"] },
    minHeight: {
      ftbigg: "238px",
    },
  },
  variants: {
    tableLayout: ["responsive", "hover", "focus"],
    transitionTimingFunction: ["responsive", "hover", "focus"],
  },
  plugins: [],
};

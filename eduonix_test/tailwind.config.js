module.exports = {
  purge: {
    enabled:
      process.env.WEBPACK_DEV_SERVER === "true" &&
      process.argv.join(" ").indexOf("build") !== -1,
    content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

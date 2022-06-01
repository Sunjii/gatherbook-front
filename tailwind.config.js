const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/pages/**/*.{html,js}", "./src/components/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

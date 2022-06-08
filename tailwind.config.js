const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/pages/**/*.{html,js}", "./src/components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        woori: ["WooridaumB"],
      },
      colors: {
        myBlue: "#40a8f0",
        myGreen: "#a14b36",
      },
    },
  },
  plugins: [],
});

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/pages/**/*.{html,js}", "./src/components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        woori: ["WooridaumB"],
        dungen: ["DungGeunMo"],
      },
      colors: {
        myGrad: "#89C7E7",
        myBlue: "#7ad0d5",
        myGreen: "#c4ebf1",
        myYellow: "#fcd449",
        myYellowT: "#fff6b7",
      },
    },
  },
  plugins: [],
});

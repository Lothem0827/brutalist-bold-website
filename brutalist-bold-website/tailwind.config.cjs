const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      inter: ["Inter"],
      monument: ["Monument"],
      italic: ["Playfair Display"],
    },
    fontSize: {
      "1v": "1.875vw", //36px
      "7v": "3.125vw", //60px
      "8v": "5.104vw", //98px
      "7s": "4.28em",
      "6s": "2.57em", //36px
      "5s": "1.42em", //20px
      "8s": "4.28em", //60px
    },

    extend: {
      letterSpacing: {
        tightest: "-.08em",
      },

      lineHeight: {
        heading: "1.1",
        tight: "0.9em",
      },
      colors: {
        light: "#E3DCC0",
        dark: "#191919",
        darkLight: "#313131",
        primary: "#3B12EC",
        primaryLight: "#83ADED",
        accent: "#C3EC12",
        accentLight: "#565905",
        grayColor: "#222222",
        borderColor: "#787878",
        endColor: "#CCFF04",
      },
      spacing: {
        "1s": "0.14em", // 2px
        "2s": "0.28em", // 4px
        "3s": "0.57em", // 8px
        "4s": "0.85em", //12px
        "5s": "1.42em", //20px
        "6s": "2.57em", //36px
        "7s": "3.7em", //52px
        "8s": "4.28em", //60px
        "9s": "7em ", //98px
        "10s": "11.42em", //160px
        "11s": "18.28em", //256px
      },
    },
  },

  //plugins: [require("tailwind-scrollbar")],
};

module.exports = config;

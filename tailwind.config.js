/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        "mobile-menu": "#EAEAE6",
        "academy-blue": "#14224A",
        "academy-gold": "#C6A76E",
        "evolutz-black": "#171717",
        "academy-green": "#3B5235",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translatex(-100%)" },
          "100%": { transform: "translatex(0%)" },
        },
        slideout: {
          "0%": { transform: "translatex(0%)" },
          "100%": { transform: "translatex(-100%)" },
        },
        slideup: {
          "0%": { transform: "translatey(50%)", opacity: "0%" },
          "100%": { transform: "translatey(0%)", opacity: "100%" },
        },
        fadein: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        menufadeout: {
          "0%": { opacity: "100%" },
          "50%": { opacity: "0%", transform: "translatex(0%)" },
          "100%": { opacity: "0%", transform: "translatex(-100%)" },
        },
        slideright: {
          "0%": { transform: "translatex(0)" },
          "100%": { transform: "translatex(288px)" },
        },
        slideleft: {
          "0%": { transform: "translatex(0)" },
          "100%": { transform: "translatex(-288px)" },
        },
      },
      animation: {
        slidein: "slidein 0.5s",
        slideout: "slideout 0.5s",
        slideup: "slideup 1s",
        fadein: "fadein 0.25s",
        menufadeout: "menufadeout 0.5s",
        slideright: "slideright 0.5s",
        slideleft: "slideleft 0.5s",
      },
    },
  },
  plugins: [],
};

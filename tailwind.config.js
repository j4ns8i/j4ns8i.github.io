const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "gruvbox-dark": {
          0: "#282828",
          1: "#3c3836",
          2: "#504945",
          3: "#665c54",
          4: "#7c6f64",
        },
        "gruvbox-red": {
          normal: "#cc241d",
          bright: "#fb4934",
        },
        "gruvbox-green": {
          normal: "#98971a",
          bright: "#b8bb26",
        },
        "gruvbox-yellow": {
          normal: "#d79921",
          bright: "#fabd2f",
        },
        "gruvbox-blue": {
          normal: "#458588",
          bright: "#83a598",
        },
        "gruvbox-purple": {
          normal: "#b16286",
          bright: "#d3869b",
        },
        "gruvbox-cyan": {
          normal: "#689d6a",
          bright: "#8ec07c",
        },
        "gruvbox-light": {
          0: "#fbf1c7",
          1: "#ebdbb2",
          2: "#d5c4a1",
          3: "#bdae93",
          4: "#a89984",
        }
      }
    },
  },
  plugins: [],
}

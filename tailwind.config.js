const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#f8f9fa',
          secondary: '#8167e6',
          blue: '#4527b9',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      transformOrigin: {
        "0": "0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
}

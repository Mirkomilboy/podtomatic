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
          dark: '#19171f'
        }
      },
      maxWidth: {
        main: '1200px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        button: '2px 2px 20px 0px rgb(20 20 20 / 30%)'
      },
      zIndex: {
        '1000': '1000'
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

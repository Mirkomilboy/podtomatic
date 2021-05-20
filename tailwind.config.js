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
          dark: '#19171f',
          darker: '#1b1a23'
        }
      },
      maxWidth: {
        main: '1200px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        button: '2px 2px 20px 0px rgb(20 20 20 / 30%)',
        circle: '5px 5px 10px 0px rgb(129 103 230 / 30%)'
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

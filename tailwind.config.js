/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['manrope', 'sans-serif'],
      display: ['Fixture', 'sans-serif']
    },
    colors: {
      orange: '#ff6720',
      gray: {
        100: '#eef0f6',
        600: '#979aa4'
      },
      white: '#fff',
      dark: '#353949',
      transparent: 'transparent'
    },
    minHeight: {
      15: '15rem',
      30: '30rem'
    }
  },
  variants: {},
  plugins: []
}

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
      transparent: 'transparent',
      semitransparent: 'rgba(255, 255, 255, 0.75)'
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },
    minHeight: {
      15: '15rem',
      30: '30rem'
    }
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio')
  ]
}

import { createStitches } from "@stitches/react";

export const { config, styled, globalCss, keyframes, getCssText, theme, createTheme, css } = createStitches({
  theme: {
    colors: {
      rocketseat: "#8257e6",
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',

      green500: '#00B75F',
      green300: '#00B37E',
    },

    fontSizes: {
      sm: '0.75rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem'
    }
  },
  media: {
    bp1180: '(max-width: 1180px)'
  }
})
import { globalCss } from ".";


export const GlobalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    
  },


  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: '$white'
  }


})
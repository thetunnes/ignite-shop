import { styled } from "..";


export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'relative'
})

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp1180': {
    width: 'calc(100% - 2rem)',
    padding: '2rem 1rem'
  }

})

export const ButtonShoppingCart = styled('button', {
  position: 'relative',
  padding: '0.75rem',
  backgroundColor: '$gray800',
  color: '$white',
  border: 0,
  borderRadius: '6px',
  transition: 'all 0.4s',
  cursor: 'pointer',

  p: {
    position: 'absolute',
    top: -12,
    right: -12,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$sm',
    fontWeight: 'bold',
    padding: '0.25rem 0.5rem',
    borderRadius: '50%',
    border: '3px solid #121214'
  },

  '&:disabled': {
    filter: 'brightness(0.8)'
  },
  
  '&:not(:disabled):hover':{
    backgroundColor: '$green300'
  }
})
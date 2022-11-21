import { styled } from "..";


export const ShoppingCartContainer = styled('div', {
  width: '100%',
  maxWidth: '300px',
  backgroundColor: '$gray800',
  padding: '3rem',
  height: 'calc(100vh - 6rem)', // Removendo o padding do Box
  position: 'absolute',
  right: 0,
  transition: 'all 0.6s',

  '> svg': {
    position: "absolute",
    right: 24,
    top: 24,
    cursor: 'pointer',

    '&:hover': {
      color: '$gray300'
    }
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },

  ul: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '1.5rem',
    margin: '1.5rem auto',
    overflowY: 'auto',
    padding: '0.25rem 0',

    '&::-webkit-scrollbar': {
      width: 6,

    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: 10
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '$gray300',
      borderRadius: 10
    }
  },

  footer: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: '0.5rem',

    p: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    button: {
      marginTop: '2rem',
      backgroundColor: '$green500',
      border: 0,
      borderRadius: 8,
      padding: '1.25rem 0',
      fontSize: '$md',
      fontWeight: '$bold',

      '&:hover': {
        backgroundColor: '$green300',
        transition: 'all 0.4s'
      }
    }
  },

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0%)',
        opacity: 1,
      },
      false: {
        transform: 'translateX(100%)',
        opacity: 0,
      }
    }
  }
})

export const Product = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem'
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.25rem'
})

export const RemoveProduct = styled('button', {
  background: 'none',
  border: 0,
  textTransform: 'uppercase',
  color: '$green500',
  cursor: 'pointer',

  '&:hover': {
    color: '$green300',
    transition: 'color 0.4s'
  }
})

export const ImageContainer = styled('div', {
  
  width: '100%',
  maxWidth: 100,
  height: 100,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img:  {
    objectFit: 'cover'
  }
})
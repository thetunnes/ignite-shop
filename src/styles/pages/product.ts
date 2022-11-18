
import { styled } from '..';

export const ProductContainer = styled('div', {

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto'
})


export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',

    border: 0,
    borderRadius: 8,
    padding: '1.25rem',

    color: '$white',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'all 0.4s',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      'opacity': 0.7
    }
    
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  // height: 'calc()'
  backgroundColor: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    objectFit: 'cover'
  }
})
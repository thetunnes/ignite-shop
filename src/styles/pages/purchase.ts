
import { styled } from '..';

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  a: {
    marginTop: '5rem',
    display: 'block',

    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const GroupImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '-1rem'
})

export const ImageContainer = styled('div', {
  
  width: '100%',
  maxWidth: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  boxShadow: '0px 0px 60px 0px #000000CC',
  padding: '0.25rem',
  marginTop: '4rem',
  marginLeft: '-3rem',


  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img:  {
    objectFit: 'cover'
  }
})

export const TextSuccess = styled('p', {
  marginTop: '2rem',
  fontSize: '$xl',
  color: '$gray300',
  maxWidth: 560,
  textAlign: 'center'
})
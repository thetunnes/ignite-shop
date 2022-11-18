import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled('div', {
  display: 'flex',
  // gap: '3rem',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
})



export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.5rem',
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  
  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    borderRadius: 6,
    padding: '2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: 'xl',
      fontWeight: 'bold',
      color: '$green300'
    },

    button: {
      padding: '0.75rem',
      backgroundColor: '$green500',
      color: '$white',
      border: 0,
      borderRadius: '6px',
      transition: 'all 0.4s',
      cursor: 'pointer',
      
      '&:hover':{
        backgroundColor: '$green300'
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1
    }
  }

})
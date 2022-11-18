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
  justifyContent: 'space-between'

})

export const ButtonShoppingCart = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  color: '$white',
  border: 0,
  borderRadius: '6px',
  transition: 'all 0.4s',
  cursor: 'pointer',
  
  '&:hover':{
    backgroundColor: '$green300'
  }
})
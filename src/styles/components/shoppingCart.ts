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
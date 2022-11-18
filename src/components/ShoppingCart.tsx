import { ShoppingCartContainer } from "../styles/components/shoppingCart";
import { X } from 'phosphor-react'
import { useShoppingCart } from "../context/ShoppingCart";

export function ShoppingCart() {
  const { shoppingCart, isOpenShoppingCart, toggleShoppingCart } = useShoppingCart()

  console.log(isOpenShoppingCart)
  return (
    <ShoppingCartContainer isOpen={isOpenShoppingCart}>
      <X onClick={toggleShoppingCart} />

      <h3>Sacola de compras</h3>
    </ShoppingCartContainer>
  )
}
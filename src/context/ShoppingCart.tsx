import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useState } from 'react';

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ContextType {
  shoppingCart: Array<Product>
  isOpenShoppingCart: boolean
  addNewProductInShoppingCart: (productId: string) => void
  toggleShoppingCart: () => void
}

const ShoppingCartContext = createContext({} as ContextType)

interface ProviderProps {
  children: ReactNode
}

export function ShoppingCartProvider({ children }) {

  const [shoppingCart, setShoppingCart] = useState([])
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(true)

  function addNewProductInShoppingCart() {

    setIsOpenShoppingCart(true)
  }

  function toggleShoppingCart() {

    setIsOpenShoppingCart(!isOpenShoppingCart)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart, addNewProductInShoppingCart, isOpenShoppingCart, toggleShoppingCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCartContext)
import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useState } from 'react';

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ContextType {
  shoppingCart: string[]
  isOpenShoppingCart: boolean
  addNewProductInShoppingCart: (productId: string) => void
  toggleShoppingCart: () => void
  removeProductShoppingCart: (productId: string) => void
}

const ShoppingCartContext = createContext({} as ContextType)

interface ProviderProps {
  children: ReactNode
}

export function ShoppingCartProvider({ children }) {

  const [shoppingCart, setShoppingCart] = useState([])
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false)

  function addNewProductInShoppingCart(productId: string) {
    if (!shoppingCart.includes(productId)) {
      setShoppingCart(prev => ([...prev, productId]))
    }
    setIsOpenShoppingCart(true)
  }

  function removeProductShoppingCart(productId: string) {
    setShoppingCart(prev => prev.filter(product => product !== productId))
  }

  function toggleShoppingCart() {

    setIsOpenShoppingCart(!isOpenShoppingCart)
  }

  useEffect(() => {
    if (shoppingCart.length) {
      localStorage.setItem('ignite-shop-shopping-cart', JSON.stringify(shoppingCart))
    }
  }, [shoppingCart])

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart, addNewProductInShoppingCart, 
        isOpenShoppingCart, toggleShoppingCart, removeProductShoppingCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCartContext)
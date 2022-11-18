import { ButtonShoppingCart, HeaderContainer } from "../styles/pages/app";
import Link from 'next/link';
import Image from 'next/image';
import { useShoppingCart } from "../context/ShoppingCart";
import { Handbag } from "phosphor-react";
import logoImg from "../assets/logo.svg";


export function Header() {
  const { toggleShoppingCart, shoppingCart, isOpenShoppingCart } = useShoppingCart()

  return (
    <HeaderContainer>
    <Link href="/"><Image {...logoImg} alt="" /></Link>

    <ButtonShoppingCart type="button" onClick={toggleShoppingCart}>
      <Handbag weight="bold" fontSize={20} />
    </ButtonShoppingCart>
  </HeaderContainer>
  )
}
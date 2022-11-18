import type { AppProps } from "next/app";
import { Head } from "next/document";
import { GlobalStyle } from "../styles/global";
import Image from "next/image";
import { Container, ButtonShoppingCart } from "../styles/pages/app";
import Link from "next/link";
import { ShoppingCartProvider } from "../context/ShoppingCart";
import { ShoppingCart } from "../components/ShoppingCart";
import { Handbag } from "phosphor-react"
import { useShoppingCart } from "../context/ShoppingCart"
import { Header } from './../components/Header';

GlobalStyle();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ShoppingCartProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
        <ShoppingCart />
      </Container>
    </ShoppingCartProvider>
  );
}

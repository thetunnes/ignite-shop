import type { AppProps } from "next/app";
import { Head } from "next/document";
import { GlobalStyle } from "../styles/global";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";

GlobalStyle();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image {...logoImg} />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

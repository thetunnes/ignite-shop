import Link from "next/link";
import { GetServerSideProps } from 'next';
import { stripe } from "../libs/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from 'react';
import { SuccessContainer, ImageContainer, TextSuccess, GroupImage } from "../styles/pages/purchase";


interface Props {
  customerName: string
  products: Array<{
    name: string
    imageUrl: string
  }>
}


export default function Purchase({ customerName, products }: Props) {

  useEffect(() => {
    localStorage.removeItem('ignite-shop-shopping-cart')
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <GroupImage>
          {products.map(product => (
            <ImageContainer key={product.imageUrl}>
              <Image src={product.imageUrl} width={120} height={120} alt="" />
            </ImageContainer>
          ))}
        </GroupImage>
        <TextSuccess>
          Uhull <strong>{customerName}</strong>, sua{" "}
          <strong>T-Shirt</strong> já está a caminho da sua
          casa.
        </TextSuccess>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  const sessionId = String(query.session_id)


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product', 'customer']
  })

  const customerName = session.customer_details.name

  const products = session.line_items.data.map(({ price }) => ({
    name: price.product.name,
    imageUrl: price.product.images[0]
  }))


  return {
    props: {
      customerName,
      products
    }
  }
}

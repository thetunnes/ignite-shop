import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../../libs/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface Props {
  product: Product
}

export default function Product({ product }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data;

      // Criar uma página de Checkout customizada

      window.location.href = checkoutUrl
    } catch (err) {

      // Conectar com uma ferramenta de observilidade (Datadog / Sentry) **
      console.log('Falha ao redirecionar ao checkout')
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <>
    <Head>
      <title>{`${product.name} | Ignite Shop`}</title>
    </Head>
    <ProductContainer>
      <ImageContainer>

        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {

  return {
    paths: [
      { params: { id: 'prod_MoTfbwYpU8LrnH' } }
    ],
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price:
          price.unit_amount !== null &&
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price.unit_amount / 100),
        defaultPriceId: price.id
      },
    },
    revalidate: 60 * 60, // 1 hour
  };
};

import { GetServerSideProps, GetStaticProps } from "next"
import Image from "next/image"
import Link from 'next/link';
import Head from "next/head"
import Stripe from "stripe"
import { useKeenSlider } from "keen-slider/react"
import { stripe } from "../libs/stripe"
import { useShoppingCart } from "../context/ShoppingCart"
import { ShoppingCart } from './../components/ShoppingCart';

import { Handbag } from "phosphor-react"
import { HomeContainer, Product } from "../styles/pages/home"
import 'keen-slider/keen-slider.min.css';

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}
interface Props {
  products: Array<Product>
}
export default function Home({ products }: Props) {

  const { addNewProductInShoppingCart } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Ignite Shop | Home</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product key={product.id} className="keen-slider__slide">
            <Link href={`/product/${product.id}`}>
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            </Link>

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
              <button type="button" onClick={() => addNewProductInShoppingCart(product.id)}>
                <Handbag weight="bold" fontSize={20} />
              </button>
            </footer>
          </Product>
        ))}


      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount !== null && new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}

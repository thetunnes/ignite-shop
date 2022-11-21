import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { X } from "phosphor-react";
import { useShoppingCart } from "../context/ShoppingCart";
import {
  ImageContainer,
  Product,
  ProductDetails,
  RemoveProduct,
  ShoppingCartContainer,
} from "../styles/components/shoppingCart";

interface ListShoppingCartType {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  defaultPriceId: string
}

export function ShoppingCart() {
  const {
    shoppingCart,
    isOpenShoppingCart,
    toggleShoppingCart,
    removeProductShoppingCart,
  } = useShoppingCart();

  const [listShoppingCart, setListShoppingCart] = useState<Array<ListShoppingCartType>>([]);

  const totalPrice = listShoppingCart.reduce((acc, product) => {
    return acc + product.price
  }, 0)

  const fetchProductsById = useCallback(async () => {
    //Criar rota na API para buscar os dados de acordo com os ids armazenados em shoppingCart

    try {
      if (!shoppingCart.length) {
        throw new Error("Não há produtos no carrinho");
      }
      const { data } = await axios.get(`/api/product`, {
        params: {
          idsProduct: shoppingCart.toString(),
        },
      });

      setListShoppingCart(data.list);
    } catch (err) {
      console.log("Error na requisição");
    }
  }, [shoppingCart]);

  function removeProductFromCart(productId: string) {
    removeProductShoppingCart(productId);
    setListShoppingCart((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  }

  function formatNumberToCurrency(value: number) {
    const formattedValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})

    return formattedValue.format(value)
  }

  async function handleCheckoutProducts() {

    // Essa aplicação foi desenvolvida com a ideia de venda de 1 camisa por pedido.
    // Se a ideia fosse quantas camisas quisesse, salvaríamos a qntd no Contexto
    // E passariamos essa qntd para quantity em cada produto.
    // Poderíamos também na criação do Checkout, definir que ele recebe quantity
    // Assim, por dentro da página de Checkout selecionaríamos a qntd

    const structureList = listShoppingCart.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1
    }))

    const urlRequest = structureList.length > 1 ? '/api/checkoutShoppingCart' : '/api/checkout'

    const body = structureList.length > 1 ? {
      listPriceId: structureList
    } : {
      priceId: structureList[0].price
    }

    const { data } = await axios.post(urlRequest, body)

    window.location.href = data.checkoutUrl
  }

  useEffect(() => {
    if (isOpenShoppingCart) {
      fetchProductsById();
    }
  }, [isOpenShoppingCart, shoppingCart]);

  return (
    <ShoppingCartContainer isOpen={isOpenShoppingCart}>
      <X onClick={toggleShoppingCart} />

      <h3>Sacola de compras</h3>

      {listShoppingCart.length ? (
        <div>
          <ul>
            {listShoppingCart.map((product) => (
              <Product key={product.id}>
                <ImageContainer>
                  <Image
                    src={product.imageUrl}
                    width={100}
                    height={100}
                    alt=""
                  />
                </ImageContainer>
                <ProductDetails>
                  <p>{product.name}</p>
                  <strong>{formatNumberToCurrency(product.price)}</strong>
                  <RemoveProduct
                    type="button"
                    onClick={() => removeProductFromCart(product.id)}
                  >
                    remover
                  </RemoveProduct>
                </ProductDetails>
              </Product>
            ))}
          </ul>

          <footer>
            <p>Quantidade <span>{`${listShoppingCart.length} ${listShoppingCart.length === 1 ? 'item' : 'itens'}`}</span></p>
            <p>Valor total <span>{formatNumberToCurrency(totalPrice)}</span></p>
            <button onClick={handleCheckoutProducts}>Finalizar compra</button>
          </footer>
        </div>
      ) : (
        <p>Não há produtos no carrinho</p>
      )}
    </ShoppingCartContainer>
  );
}

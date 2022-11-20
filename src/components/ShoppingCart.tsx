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
              <Product>
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
                  <strong>{product.price}</strong>
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
            <p>Valor total <span>{totalPrice}</span></p>
            <button>Finalizar compra</button>
          </footer>
        </div>
      ) : (
        <p>Não há produtos no carrinho</p>
      )}
    </ShoppingCartContainer>
  );
}

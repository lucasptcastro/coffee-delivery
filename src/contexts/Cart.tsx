import { ICartProduct } from "@/dtos/cart";
import { createContext, useState } from "react";

export type CartContextDataProps = {
  cartProducts: ICartProduct[] | null;

  addProductToCart: (product: ICartProduct) => void;
  removeProductFromCart: (product: ICartProduct) => void;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<ICartProduct[] | null>(null);

  function addProductToCart(product: ICartProduct) {
    try {
      if (!cartProducts) {
        setCartProducts([product]);
      } else {
        setCartProducts([...cartProducts, product]);
      }
    } catch (error) {
      throw error;
    }
  }

  function removeProductFromCart(product: ICartProduct) {
    try {
      const productsArray: ICartProduct[] = cartProducts!;

      const productPosition = productsArray.findIndex(
        (cart) => cart.id === product.id,
      );

      productsArray.splice(productPosition, 1);

      setCartProducts([...productsArray]);
    } catch (error) {
      throw error;
    }
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

import { ICartProduct } from "@/dtos/cart";
import { createContext, useState } from "react";

export type CartContextDataProps = {
  cartProducts: ICartProduct[] | null;

  addProductToCart: (product: ICartProduct) => void;
  removeProductFromCart: (product: ICartProduct) => void;
  changeProductQuantity: (
    product: ICartProduct,
    operation: "plus" | "minus",
  ) => void;
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

  function changeProductQuantity(
    product: ICartProduct,
    operation: "plus" | "minus",
  ) {
    // verifica se o produto está no carrinho
    const productIndex = cartProducts?.findIndex(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (cartProducts && productIndex! >= 0) {
      // se estiver no carrinho
      if (operation === "plus") {
        const productsArray: ICartProduct[] = cartProducts;
        cartProducts[productIndex!].quantity =
          cartProducts[productIndex!].quantity! + 1;

        setCartProducts([...productsArray]);
      } else {
        if (cartProducts[productIndex!].quantity! > 1) {
          const productsArray: ICartProduct[] = cartProducts;
          cartProducts[productIndex!].quantity =
            cartProducts[productIndex!].quantity! - 1;

          setCartProducts([...productsArray]);
        } else {
          removeProductFromCart(product);
        }
      }
    } else {
      addProductToCart({
        id: product.id,
        imagePath: product.imagePath,
        price: product.price,
        product: product.product,
        quantity: 1,
      });
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        changeProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

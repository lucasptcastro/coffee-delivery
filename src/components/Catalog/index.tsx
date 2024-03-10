import { ShoppingCartSimple, Trash } from "@phosphor-icons/react";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/functions/format-currency";
import Image from "next/image";
import Input from "../Input";

export interface ICatalogo {
  id: string;
  coffee_image: string;
  tags: Array<string>;
  title: string;
  description: string;
  price: number;
}

export default function Catalog({
  id,
  coffee_image,
  tags,
  title,
  description,
  price,
}: ICatalogo) {
  const { cartProducts, addProductToCart, removeProductFromCart } = useCart();

  function handleAddProductToCart() {
    try {
      addProductToCart({
        id: id,
        price: price,
        product: title,
        quantity: 1,
        imagePath: coffee_image,
      });
    } catch (error) {
      console.log(
        "Ocorreu um erro ao adicionar o produto ao carrinho. Erro: ",
        error,
      );
    }
  }

  function handleRemoveProductFromCart() {
    try {
      removeProductFromCart({
        id: id,
        price: price,
        product: title,
        quantity: 1,
        imagePath: coffee_image,
      });
    } catch (error) {
      console.log(
        "Ocorreu um erro ao remover o produto ao carrinho. Erro: ",
        error,
      );
    }
  }

  function onProductInCart() {
    if (cartProducts) {
      const productIndex = cartProducts!.findIndex((cart) => cart.id === id);

      return productIndex;
    } else {
      return -1;
    }
  }

  function onQuantityProductInCart() {
    if (cartProducts) {
      const productIndex = cartProducts!.findIndex((cart) => cart.id === id);

      if (productIndex >= 0) {
        return cartProducts[productIndex].quantity;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  return (
    <div className="h-fit w-full rounded-md rounded-bl-[50px] rounded-tr-[50px] bg-base-card px-4 pb-4 xl:w-64 xl:px-0">
      <div className="flex h-full w-full flex-col items-center">
        <Image
          alt=""
          width={120}
          height={120}
          src={coffee_image}
          className="relative -top-6"
        />

        {/* Tags */}
        <div className="relative -top-2 flex flex-row gap-1">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex h-6 w-fit items-center justify-center rounded-[100px] bg-yellow-light p-2"
            >
              <span className=" font-roboto text-xs font-bold uppercase text-yellow-dark">
                {tag}
              </span>
            </div>
          ))}
        </div>

        <span className="mt-2 text-center font-baloo2 text-lg font-bold text-base-subtitle xs:text-xl">
          {title}
        </span>
        <span className="w-full text-center font-roboto text-sm text-base-label">
          {description}
        </span>

        {/* Cart */}
        <div className="mt-6 flex w-full flex-row flex-wrap items-center justify-between xs:px-6 md:px-2 lg:px-5">
          <span className="font-roboto text-xs text-base-text xs:text-sm xl:text-sm">
            R${" "}
            <strong className="font-baloo2 text-base font-extrabold text-base-text xs:text-xl xl:text-2xl">
              {formatCurrency(price)}
            </strong>
          </span>

          {/* Input */}
          <div className="flex flex-row items-center gap-2 xs:gap-3 md:gap-2 lg:gap-3">
            <Input
              type="number"
              product={{
                id: id,
                imagePath: coffee_image,
                price: price,
                product: title,
                quantity: onQuantityProductInCart(),
              }}
            />

            {onProductInCart() >= 0 ? (
              <button
                className="flex h-6 w-8 items-center justify-center rounded-md bg-red-800 transition-colors hover:bg-red-700 xl:h-8 xl:w-10"
                onClick={handleRemoveProductFromCart}
              >
                <Trash size={18} weight="fill" className="text-base-card" />
              </button>
            ) : (
              <button
                className="flex h-6 w-8 items-center justify-center rounded-md bg-purple-dark transition-colors hover:bg-purple xl:h-8 xl:w-10"
                onClick={handleAddProductToCart}
              >
                <ShoppingCartSimple
                  size={18}
                  weight="fill"
                  className="text-base-card"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

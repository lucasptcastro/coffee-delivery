import { ICartProduct } from "@/dtos/cart";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus } from "@phosphor-icons/react";
import { InputHTMLAttributes, useState } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number";
  className?: string;

  product?: ICartProduct;
}

export default function Input({ type, className, product, ...rest }: IInput) {
  const { changeProductQuantity } = useCart();

  if (type == "text") {
    return (
      <input
        className={`h-10 rounded border border-base-button bg-base-input p-3 font-roboto text-sm text-base-text ${className} outline-yellow-dark placeholder:text-base-label focus:text-base-text focus:placeholder:text-black/0`}
        type="text"
        {...rest}
      />
    );
  } else if (type == "number") {
    return (
      <div className=" flex h-6 w-16 flex-row items-center justify-center gap-2 rounded-md bg-base-button p-2 xl:h-fit xl:min-h-8 xl:w-[72px]">
        <Minus
          weight="bold"
          className="text-xl text-purple hover:cursor-pointer hover:text-purple-dark "
          onClick={() => changeProductQuantity(product!, "minus")}
        />
        <span className="font-roboto text-xs text-base-title xs:text-base">
          {product?.quantity}
        </span>
        <Plus
          weight="bold"
          className="text-xl text-purple hover:cursor-pointer hover:text-purple-dark "
          onClick={() => changeProductQuantity(product!, "plus")}
        />
      </div>
    );
  }
}

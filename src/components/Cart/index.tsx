import { ShoppingCart } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";

interface ICart {
  type?: "empty" | "full";
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Cart({ type = "empty", props, className }: ICart) {
  return (
    <button
      className={`flex h-7 w-7 items-center justify-center rounded-md bg-yellow-light p-2 shadow-sm xl:h-9 xl:w-9 ${className} transition-shadow hover:shadow-md`}
      {...props}
    >
      <ShoppingCart
        size={22}
        weight="fill"
        className="h-4 w-4 text-yellow-dark xl:h-[22px] xl:w-[22px]"
      />
    </button>
  );
}

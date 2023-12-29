import { ShoppingCart } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";

interface ICart {
  quantity?: number;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Cart({ quantity = 0, props, className }: ICart) {
  return (
    <button
      className={`relative flex h-7 w-7 items-center justify-center rounded-md bg-yellow-light p-2 shadow-sm md:h-9 md:w-9 ${className} transition-shadow hover:shadow-md`}
      {...props}
    >
      <ShoppingCart
        size={22}
        weight="fill"
        className="h-4 w-4 text-yellow-dark md:h-[22px] md:w-[22px]"
      />

      {quantity > 0 && (
        <div className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-yellow-dark font-roboto text-[10px] font-bold text-white md:-right-2 md:-top-2 md:h-5 md:w-5 md:text-sm">
          {quantity}
        </div>
      )}
    </button>
  );
}

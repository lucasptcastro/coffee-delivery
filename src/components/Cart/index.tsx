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
      className={`flex h-9 w-9 items-center justify-center rounded-md bg-yellow-light p-2 shadow-sm ${className} transition-shadow hover:shadow-md`}
      {...props}
    >
      <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
    </button>
  );
}

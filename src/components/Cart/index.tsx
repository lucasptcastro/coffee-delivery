import { useCart } from "@/hooks/useCart";
import { ShoppingCart } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { ButtonHTMLAttributes } from "react";

interface ICart {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Cart({ props, className }: ICart) {
  const router = useRouter();

  const { cartProducts } = useCart();

  return (
    <button
      className={`relative flex h-7 w-7 items-center justify-center rounded-md bg-yellow-light p-2 shadow-sm xs:h-8 xs:w-8 md:h-9 md:w-9 ${className} transition-shadow hover:shadow-md`}
      {...props}
      onClick={() => router.push("/carrinho")}
    >
      <ShoppingCart
        size={22}
        weight="fill"
        className="h-4 w-4 text-yellow-dark xs:h-5 xs:w-5 md:h-[22px] md:w-[22px]"
      />

      {cartProducts && cartProducts.length > 0 && (
        <div className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-yellow-dark font-roboto text-[8px] font-bold text-white xs:h-4 xs:w-4 xs:text-[10px] md:-right-2 md:-top-2 md:h-5 md:w-5 md:text-sm">
          {cartProducts.length}
        </div>
      )}
    </button>
  );
}

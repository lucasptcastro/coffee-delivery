import { MapPin } from "@phosphor-icons/react";
import Image from "next/image";
import Cart from "../Cart";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex h-20 w-full items-center justify-between bg-white px-8 shadow-lg sm:px-40 md:px-64 lg:px-80 xl:px-[370px]">
      <Image
        alt=""
        src={"/logo.svg"}
        width={84.95}
        height={40}
        className="h-12 w-12 md:h-10 md:w-[84px]"
      />

      {/* Localização e carrinho */}
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-fit items-center gap-1 rounded-md bg-purple-light p-2 shadow-sm xl:h-9">
          <MapPin
            size={22}
            weight="fill"
            className="h-4 w-4 text-purple xl:h-[22px] xl:w-[22px]"
          />
          <span className="font-roboto text-xs text-purple-dark xl:text-base">
            Porto Alegre, RS
          </span>
        </div>
        <Cart />
      </div>
    </nav>
  );
}

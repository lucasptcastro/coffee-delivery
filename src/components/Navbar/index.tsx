import { MapPin } from "@phosphor-icons/react";
import Image from "next/image";
import Cart from "../Cart";

export default function Navbar() {
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-white px-[370px] shadow-lg">
      <Image alt="" src={"/Logo.svg"} width={84.95} height={40} />

      {/* Localização e carrinho */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-fit items-center gap-1 rounded-md bg-purple-light p-2 shadow-sm">
          <MapPin size={22} weight="fill" className="text-purple" />
          <span className="font-roboto text-purple-dark">Porto Alegre, RS</span>
        </div>
        <Cart />
      </div>
    </nav>
  );
}

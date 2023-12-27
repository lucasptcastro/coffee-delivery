import { MapPin } from "@phosphor-icons/react";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Cart from "../Cart";

export default function Navbar() {
  return (
    <nav className="xs:h-20 fixed z-50 flex h-14 w-full items-center justify-between bg-white px-10 shadow-lg sm:px-40 lg:px-64 xl:px-64 3xl:px-[370px]">
      <Image
        alt="Logotipo Coffee Delivery"
        src={Logo}
        width={84.95}
        height={40}
        className="xs:h-10 xs:w-[84px] h-12 w-12"
      />

      {/* Localização e carrinho */}
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-fit items-center gap-1 rounded-md bg-purple-light p-2 shadow-sm xl:h-9">
          <MapPin
            size={22}
            weight="fill"
            className="h-4 w-4 text-purple xl:h-[22px] xl:w-[22px]"
          />
          <span className="flex items-center gap-1 font-roboto text-xs text-purple-dark xl:text-base">
            <span className="xs:block hidden">Porto Alegre,</span> RS
          </span>
        </div>
        <Cart />
      </div>
    </nav>
  );
}

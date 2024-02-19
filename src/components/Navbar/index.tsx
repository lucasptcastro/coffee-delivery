import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Cart from "../Cart";
import React, { useEffect, useState } from "react";
import { MapPin } from "@phosphor-icons/react";
import Link from "next/link";

interface ILocation {
  state: string;
  state_code: string;
}

export default function Navbar() {
  const [location, setLocation] = useState<ILocation>();

  async function getLocationInfo(latitude: any, longitude: any) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          setLocation({
            state: data.results[0].components.state,
            state_code: data.results[0].components.state_code,
          });
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }

  async function success(pos: any) {
    var crd = pos.coords;
    await getLocationInfo(crd.latitude, crd.longitude);
  }

  function errors(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  async function GetCurrentPosition() {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(success, errors);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors);
        } else if (result.state === "denied") {
          // Se a permissão de localização for recusada, adicionar instruções para que o usuário consiga habilitar manualmente
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      });
    }
  }

  useEffect(() => {
    GetCurrentPosition();
  });

  return (
    <nav className="fixed z-50 flex h-14 w-full items-center justify-between bg-white px-10 shadow-lg xs:h-20 sm:px-40 lg:px-64 xl:px-64 3xl:px-[370px]">
      <Link href="/">
        <Image
          alt="Logotipo Coffee Delivery"
          src={Logo}
          width={84.95}
          height={40}
          className="h-12 w-12 xs:h-10 xs:w-[84px]"
        />
      </Link>

      {/* Localização e carrinho */}
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-fit items-center gap-1 rounded-md bg-purple-light p-2 shadow-sm xs:h-8 md:h-9">
          <MapPin
            size={22}
            weight="fill"
            className="h-4 w-4 text-purple md:h-[22px] md:w-[22px]"
          />
          <span className="flex items-center gap-1 font-roboto text-xs text-purple-dark md:text-base">
            <span className="hidden xs:block">
              {location ? `${location?.state}, ` : ""}
            </span>
            {location ? location?.state_code : ""}
          </span>
        </div>
        <Cart />
      </div>
    </nav>
  );
}

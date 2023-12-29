import Image from "next/image";
import Input from "../Input";
import { ShoppingCartSimple } from "@phosphor-icons/react";

export interface ICatalogo {
  coffee_image: string;
  tags: Array<string>;
  title: string;
  description: string;
  price: number;
}

export default function Catalog({
  coffee_image,
  tags,
  title,
  description,
  price,
}: ICatalogo) {
  return (
    <div className="h-fit w-full rounded-md rounded-bl-[50px] rounded-tr-[50px] bg-base-card px-4 pb-4 xl:w-64">
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
          {tags.map((tag) => (
            <>
              <div className="flex h-6 w-fit items-center justify-center rounded-[100px] bg-yellow-light p-2">
                <span className=" font-roboto text-xs font-bold uppercase text-yellow-dark">
                  {tag}
                </span>
              </div>
            </>
          ))}
        </div>

        <span className="mt-2 text-center font-baloo2 text-lg font-bold text-base-subtitle xs:text-xl">
          {title}
        </span>
        <span className="w-full text-center font-roboto text-sm text-base-label">
          {description}
        </span>

        {/* Cart */}
        <div className="mt-6 flex w-full flex-row flex-wrap items-center justify-between px-2 xs:px-6">
          <div className="">
            <span className="font-roboto text-xs text-base-text xs:text-sm xl:text-sm">
              R${" "}
              <strong className="font-baloo2 text-base font-extrabold text-base-text xs:text-xl xl:text-2xl">
                {price}
              </strong>
            </span>
          </div>

          {/* Input */}
          <div className="flex flex-row items-center gap-2 xs:gap-3">
            <Input type="number" />
            <button className="flex h-6 w-8 items-center justify-center rounded-md bg-purple-dark transition-colors hover:bg-purple xl:h-8 xl:w-10">
              <ShoppingCartSimple
                size={18}
                weight="fill"
                className="text-base-card"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

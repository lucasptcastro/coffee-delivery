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
    <div className="h-[310px] w-full rounded-md rounded-bl-[50px] rounded-tr-[50px] bg-base-card xl:w-64">
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

        <span className="mt-2 font-baloo2 text-xl font-bold text-base-subtitle">
          {title}
        </span>
        <span className="w-[216px] text-center font-roboto text-sm text-base-label">
          {description}
        </span>

        {/* Cart */}
        <div className="mt-6 flex w-full flex-row items-center justify-between px-6">
          <div className="">
            <span className="font-roboto text-sm text-base-text">
              R${" "}
              <strong className="font-baloo2 text-2xl font-extrabold text-base-text">
                {price}
              </strong>
            </span>
          </div>

          {/* Input */}
          <div className="flex flex-row items-center gap-3">
            <Input type="number" />
            <button className="flex h-8 w-10 items-center justify-center rounded-md bg-purple-dark transition-colors hover:bg-purple">
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

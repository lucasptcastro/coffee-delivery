import Image from "next/image";
import Layout from "./layout";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export default function Home() {
  return (
    <Layout>
      <section className="flex h-[544px] w-full items-center justify-evenly bg-[url('/Background.svg')] px-64">
        <div className="flex w-[588px] flex-col gap-16">
          {/* Textos */}
          <div className="flex flex-col gap-4">
            <h1 className="font-baloo2 text-5xl font-extrabold">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <span className="font-roboto text-xl text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </span>
          </div>

          {/* Tags */}
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-dark p-2">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="text-background"
                />
              </div>
              <span className="font-roboto text-base-text">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-base-text p-2">
                <Package size={16} weight="fill" className="text-background" />
              </div>
              <span className="font-roboto text-base-text">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow p-2">
                <Timer size={16} weight="fill" className="text-background" />
              </div>
              <span className="font-roboto text-base-text">
                Entrega rápida e rastreada
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple p-2">
                <Coffee size={16} weight="fill" className="text-background" />
              </div>
              <span className="font-roboto text-base-text">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <Image src={"/coffee.svg"} width={476} height={360} alt="" />
      </section>
    </Layout>
  );
}

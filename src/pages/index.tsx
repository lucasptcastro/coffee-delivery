import Image from "next/image";
import Layout from "./layout";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Catalog, { ICatalogo } from "@/components/Catalog";

export default function Home() {
  const coffees: Array<ICatalogo> = [
    {
      coffee_image: "/coffees/expresso.svg",
      tags: ["Tradicional"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/americano.svg",
      tags: ["Tradicional"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/expresso_cremoso.svg",
      tags: ["Tradicional"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/cafe_gelado.svg",
      tags: ["Tradicional", "Gelado"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/cafe_com_leite.svg",
      tags: ["Tradicional", "Com leite"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/latte.svg",
      tags: ["Tradicional", "Com leite"],
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/capuccino.svg",
      tags: ["Tradicional", "Com leite"],
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/macchiato.svg",
      tags: ["Tradicional", "Com leite"],
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/mochaccino.svg",
      tags: ["Tradicional", "Com leite"],
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/chocolate_quente.svg",
      tags: ["Tradicional", "Com leite"],
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/cubano.svg",
      tags: ["Especial", "Alcoólico", "Gelado"],
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/havaiano.svg",
      tags: ["Especial"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/arabe.svg",
      tags: ["Especial"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
    },
    {
      coffee_image: "/coffees/irlandes.svg",
      tags: ["Especial", "Alcoólico"],
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
    },
  ];

  return (
    <Layout>
      <section className="flex h-fit w-full flex-col-reverse items-center justify-center gap-10 bg-[url('../../public/background.svg')] pt-40 xl:h-[544px] xl:flex-row xl:justify-evenly xl:gap-0 xl:px-64 xl:pt-60 2xl:pt-32">
        <div className="flex flex-col gap-16 px-10 xl:w-[588px] xl:px-0">
          {/* Textos */}
          <div className="flex flex-col gap-4">
            <h1 className="text-justify font-baloo2 text-xl font-extrabold text-base-title xl:text-start xl:text-5xl">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <span className="text-justify font-roboto text-xl text-base-subtitle xl:text-start">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </span>
          </div>

          {/* Tags */}
          <div className="itens-center flex flex-col justify-center gap-5 pb-10 xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:pb-0">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-dark p-2 xl:h-8 xl:w-8">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="text-background"
                />
              </div>
              <span className="font-roboto text-sm text-base-text xl:text-base">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-base-text p-2 xl:h-8 xl:w-8">
                <Package size={16} weight="fill" className="text-background" />
              </div>
              <span className="font-roboto text-sm text-base-text xl:text-base">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow p-2 xl:h-8 xl:w-8">
                <Timer size={16} weight="fill" className="text-background" />
              </div>
              <span className="font-roboto text-sm text-base-text xl:text-base">
                Entrega rápida e rastreada
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple p-2 xl:h-8 xl:w-8">
                <Coffee size={16} weight="fill" className="text-background" />
              </div>
              <span className="font-roboto text-sm text-base-text xl:text-base">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <Image
          src={"/coffee.svg"}
          width={476}
          height={360}
          alt=""
          className="h-48 w-64 object-cover object-center xl:h-[360px] xl:w-[476px]"
        />
      </section>
      <section className="mt-20 flex h-[1645px] w-full flex-col lg:px-60 3xl:px-[370px]">
        <h1 className="text-center font-baloo2 text-2xl font-extrabold text-base-subtitle xl:text-start xl:text-4xl">
          Nossos cafés
        </h1>

        {/* Catalog */}
        <div className="grid w-full items-center justify-center space-y-10 px-10 py-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-9 xl:space-y-0 2xl:grid-cols-4 2xl:grid-rows-4">
          {coffees.map((coffee) => (
            <Catalog
              coffee_image={coffee.coffee_image}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
              key={coffee.title}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

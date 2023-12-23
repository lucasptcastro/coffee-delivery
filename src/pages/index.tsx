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
      <section className="flex h-[544px] w-full items-center justify-evenly bg-[url('/background.svg')] px-64">
        <div className="flex w-[588px] flex-col gap-16">
          {/* Textos */}
          <div className="flex flex-col gap-4">
            <h1 className="font-baloo2 text-5xl font-extrabold text-base-title">
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
      <section className="flex h-[1645px] w-full flex-col gap-9 px-[370px]">
        <h1 className="font-baloo2 text-4xl font-extrabold text-base-subtitle">
          Nossos cafés
        </h1>

        {/* Catalog */}
        <div className="grid w-full grid-cols-4 grid-rows-4 gap-9">
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

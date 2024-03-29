const COFFEES = [
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/expresso.svg",
    tags: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/americano.svg",
    tags: ["Tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/expresso_cremoso.svg",
    tags: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/cafe_gelado.svg",
    tags: ["Tradicional", "Gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/cafe_com_leite.svg",
    tags: ["Tradicional", "Com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/latte.svg",
    tags: ["Tradicional", "Com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/capuccino.svg",
    tags: ["Tradicional", "Com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/macchiato.svg",
    tags: ["Tradicional", "Com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/mochaccino.svg",
    tags: ["Tradicional", "Com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/chocolate_quente.svg",
    tags: ["Tradicional", "Com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/cubano.svg",
    tags: ["Especial", "Alcoólico", "Gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/havaiano.svg",
    tags: ["Especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/arabe.svg",
    tags: ["Especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
  {
    id: crypto.randomUUID(),
    coffee_image: "/coffees/irlandes.svg",
    tags: ["Especial", "Alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  },
];

export { COFFEES };

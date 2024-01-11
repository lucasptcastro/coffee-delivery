import Section from "@/components/Section";
import Layout from "../layout";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Image from "next/image";
import Button from "@/components/Button";

interface ICafeTeste {
  type: string;
  value: number;
  quantity: number;
  image: string;
}

export default function Checkout() {
  const paymentMethods = [
    {
      label: "Cartão de crédito",
      icon: <CreditCard className="text-base text-purple" />,
    },
    {
      label: "Cartão de crédito",
      icon: <Bank className="text-base text-purple" />,
    },
    {
      label: "Cartão de crédito",
      icon: <Money className="text-base text-purple" />,
    },
  ];

  const cafesTeste: ICafeTeste[] = [
    {
      type: "Expresso Tradicional",
      value: 9.9,
      quantity: 1,
      image: "expresso.svg",
    },
    {
      type: "Latte",
      value: 19.8,
      quantity: 1,
      image: "latte.svg",
    },
  ];

  return (
    <Layout>
      <Section className="relative flex flex-col items-center justify-center gap-5 pt-40 xl:h-[544px] xl:px-64 xl:pt-96 3xl:flex-row 3xl:items-start 3xl:justify-between 3xl:px-[370px] 3xl:pt-32">
        <div className="flex flex-col">
          <h1 className="font-baloo2 text-lg font-bold text-base-subtitle">
            Complete seu pedido
          </h1>

          {/* Card de endereço */}
          <div className="mt-4 flex h-[372px] w-[640px] flex-col gap-8 rounded-md bg-base-card p-10">
            {/* Subtitulo */}
            <div className="flex flex-row items-start gap-2">
              <MapPinLine size={22} className="text-yellow-dark" />
              <span className="font-roboto text-base text-base-subtitle">
                Endereço de Entrega <br />{" "}
                <span className="font-roboto text-sm text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </span>
            </div>

            <div className="flex w-[560px] flex-col gap-4">
              {/* Row 1 */}
              <div>
                <Input
                  className="w-52"
                  type="text"
                  props={{ placeholder: "CEP" }}
                />
              </div>
              {/* Row 2 */}
              <div>
                <Input
                  className="w-full"
                  type="text"
                  props={{ placeholder: "Rua" }}
                />
              </div>
              {/* Row 3 */}
              <div className="flex gap-3">
                <Input
                  className="w-48"
                  type="text"
                  props={{ placeholder: "Número" }}
                />
                <Input
                  className="w-full"
                  type="text"
                  props={{ placeholder: "Complemento" }}
                />
              </div>
              {/* Row 4 */}
              <div className="flex gap-3">
                <Input
                  className="w-48"
                  type="text"
                  props={{ placeholder: "Bairro" }}
                />
                <Input
                  className="w-72"
                  type="text"
                  props={{ placeholder: "Cidade" }}
                />
                <Input
                  className="w-14"
                  type="text"
                  props={{ placeholder: "UF" }}
                />
              </div>
            </div>
          </div>

          {/* Card de pagamento */}
          <div className="mt-3 flex h-[372px] w-[640px] flex-col gap-8 rounded-md bg-base-card p-10">
            {/* Subtitulo */}
            <div className="flex flex-row items-start gap-2">
              <CurrencyDollar size={22} className="text-purple" />
              <span className="font-roboto text-base text-base-subtitle">
                Pagamento <br />{" "}
                <span className="font-roboto text-sm text-base-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </span>
            </div>

            <Select options={paymentMethods} />
          </div>
        </div>

        {/* Cafés selecionados */}
        <div className="flex flex-col">
          <h1 className="font-baloo2 text-lg font-bold text-base-subtitle">
            Cafés selecionados
          </h1>

          {/* Card do carrinho */}
          <div className="mt-4 flex h-fit w-[448px] flex-col rounded-md rounded-bl-[50px] rounded-tr-[50px] bg-base-card p-10">
            {/* Itens do carrinho */}
            {cafesTeste.map((coffee) => (
              <>
                <div
                  key={coffee.type}
                  className="flex flex-row items-center gap-5"
                >
                  <Image
                    alt=""
                    width={64}
                    height={64}
                    src={`/coffees/${coffee.image}`}
                  />

                  <div className="flex flex-col ">
                    <span className="font-roboto text-base text-base-subtitle">
                      {coffee.type}
                    </span>

                    <div className="flex flex-row items-center gap-2">
                      <Input type="number" />
                      <Button
                        label="Remover"
                        type="secundary"
                        icon={<Trash className="text-base text-purple" />}
                      />
                    </div>
                  </div>

                  {/* Valor */}
                  <div className="ml-3 h-full text-start">
                    <span className="font-roboto text-base font-bold text-base-text">
                      {coffee.value}
                    </span>
                  </div>
                </div>
                <div className="my-6 h-[1px] w-full bg-base-button" />
              </>
            ))}

            {/* Resumo */}
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full flex-row items-center justify-between">
                <span className="font-roboto text-sm text-base-text">
                  Total de itens
                </span>
                <span className="font-roboto text-base text-base-text">
                  R$ 29,70
                </span>
              </div>
              <div className="flex w-full flex-row items-center justify-between">
                <span className="font-roboto text-sm text-base-text">
                  Entrega
                </span>
                <span className="font-roboto text-base text-base-text">
                  R$ 3,50
                </span>
              </div>
              <div className="flex w-full flex-row items-center justify-between">
                <span className="font-roboto text-xl font-bold text-base-subtitle">
                  Total
                </span>
                <span className="font-roboto text-xl font-bold text-base-subtitle">
                  R$ 33,20
                </span>
              </div>
            </div>

            {/* Confirmar */}
            <Button type="primary" label="Confirmar" className="mt-6 w-full" />
          </div>
        </div>
      </Section>
    </Layout>
  );
}

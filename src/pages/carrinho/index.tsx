import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  ShoppingCart,
  Trash,
} from "@phosphor-icons/react";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/functions/format-currency";
import { useRouter } from "next/router";
import Section from "@/components/Section";
import Layout from "../layout";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Image from "next/image";
import Button from "@/components/Button";

export default function Checkout() {
  const { cartProducts, removeProductFromCart } = useCart();

  const router = useRouter();

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

  if (!cartProducts || cartProducts.length <= 0) {
    return (
      <Layout>
        <Section className="relative flex flex-col items-center justify-center gap-5 pt-40 xl:h-[544px] xl:px-64 xl:pt-96 3xl:flex-row 3xl:items-start 3xl:justify-between 3xl:px-[370px] 3xl:pt-32">
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 text-center">
            <ShoppingCart weight="thin" className="text-9xl text-purple-dark" />
            <span className="font-baloo2 font-semibold text-slate-800">
              O carrinho está vazio! <br />{" "}
              <span className="font-baloo2 font-normal text-slate-950">
                {" "}
                Adicione algo e volte para conferir!{" "}
              </span>
            </span>
            <Button
              label="Continuar comprando"
              typeButton="primary"
              onClick={() => router.push("/")}
            />
          </div>
        </Section>
      </Layout>
    );
  }

  const cartProductsValue = cartProducts.map(
    (product) => product.quantity! * product.price,
  );

  const total = cartProductsValue.reduce(
    (totalValue, currentValue) => (totalValue = totalValue + currentValue),
    0,
  );
  const delivery = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

  return (
    <Layout>
      <Section className="min-h-screen w-full flex-1 flex-col items-center justify-center gap-5 border border-red-500 px-10 pb-20 pt-40 sm:px-40 lg:px-64 2xl:flex 2xl:flex-row 2xl:items-start 2xl:justify-between 3xl:px-[370px] 3xl:pt-32">
        <div className="flex w-full flex-col">
          <h1 className="font-baloo2 text-lg font-bold text-base-subtitle">
            Complete seu pedido
          </h1>

          {/* Card de endereço */}
          <div className="mt-4 flex w-full flex-col gap-8 rounded-md bg-base-card p-10 xl:h-[372px] xl:w-[640px]">
            {/* Subtitulo */}
            <div className="flex w-full flex-col items-center gap-2 md:flex-row md:items-start">
              <MapPinLine className="text-xl text-yellow-dark md:text-2xl" />
              <span className="text-center font-roboto text-sm text-base-subtitle md:text-start md:text-base">
                Endereço de Entrega <br />{" "}
                <span className="font-roboto text-sm text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </span>
            </div>

            <div className="flex w-full flex-col gap-4 xl:w-[560px]">
              {/* Row 1 */}
              <div>
                <Input
                  className="w-full xl:w-52"
                  type="text"
                  placeholder="CEP"
                />
              </div>
              {/* Row 2 */}
              <div>
                <Input className="w-full" type="text" placeholder="Rua" />
              </div>
              {/* Row 3 */}
              <div className="flex flex-col gap-3 xl:flex-row">
                <Input
                  className="w-full xl:w-48"
                  type="text"
                  placeholder="Número"
                />
                <Input
                  className="w-full"
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              {/* Row 4 */}
              <div className="flex flex-col gap-3 xl:flex-row">
                <Input
                  className="w-full xl:w-48"
                  type="text"
                  placeholder="Bairro"
                />
                <Input
                  className="w-full xl:w-72"
                  type="text"
                  placeholder="Cidade"
                />
                <Input
                  className="w-full xl:w-14"
                  type="text"
                  placeholder="UF"
                />
              </div>
            </div>
          </div>

          {/* Card de pagamento */}
          <div className="mt-3 flex w-full flex-col gap-8 rounded-md bg-base-card p-10 xl:h-[372px] xl:w-[640px]">
            {/* Subtitulo */}
            <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
              <CurrencyDollar size={22} className="text-purple" />
              <span className="text-center font-roboto text-base text-base-subtitle md:text-start">
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
        <div className="flex h-full flex-col pt-4 2xl:pt-0">
          <h1 className="font-baloo2 text-lg font-bold text-base-subtitle">
            Cafés selecionados
          </h1>

          {/* Card do carrinho */}
          <div className="mt-4 flex h-fit flex-col rounded-md rounded-bl-[50px] rounded-tr-[50px] bg-base-card p-10 xl:w-[448px]">
            {/* Itens do carrinho */}
            {cartProducts?.length > 0 ? (
              cartProducts.map((product, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-5 md:flex-row"
                  >
                    <Image
                      alt=""
                      width={64}
                      height={64}
                      src={product.imagePath}
                    />

                    <div className="flex flex-col">
                      <span className="text-center font-roboto text-base text-base-subtitle xs:text-start">
                        {product.product}
                      </span>

                      <div className="flex flex-col items-center gap-4 pt-2 xs:gap-2 xs:pt-0 md:flex-row">
                        <Input type="number" product={product} />
                        <Button
                          label="Remover"
                          typeButton="secundary"
                          onClick={() => removeProductFromCart(product)}
                          icon={<Trash className="text-base text-purple" />}
                        />
                      </div>
                    </div>

                    {/* Valor */}
                    <div className="ml-3 h-full text-start">
                      <span className="font-roboto text-base font-bold text-base-text">
                        R${formatCurrency(product.price)}
                      </span>
                    </div>
                  </div>
                  <div className="my-6 h-[1px] w-full bg-base-button" />
                </>
              ))
            ) : (
              <></>
            )}

            {/* Resumo */}
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full flex-col items-center justify-between xs:flex-row">
                <span className="font-roboto text-sm text-base-text">
                  Total de itens
                </span>
                <span className="font-roboto text-base text-base-text">
                  R${formatCurrency(total!)}
                </span>
              </div>
              <div className="flex w-full flex-col items-center justify-between xs:flex-row">
                <span className="font-roboto text-sm text-base-text">
                  Entrega
                </span>
                <span className="font-roboto text-base text-base-text">
                  R${formatCurrency(delivery)}
                </span>
              </div>
              <div className="flex w-full flex-col items-center justify-between xs:flex-row">
                <span className="font-roboto text-xl font-bold text-base-subtitle">
                  Total
                </span>
                <span className="font-roboto text-xl font-bold text-base-subtitle">
                  R${formatCurrency(total! + delivery)}
                </span>
              </div>
            </div>

            {/* Confirmar */}
            <Button
              typeButton="primary"
              label="Confirmar"
              className="mt-6 w-full"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
}

// TODO: formatar valores
// TODO: deixar responsivo

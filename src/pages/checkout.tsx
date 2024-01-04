import Section from "@/components/Section";
import Layout from "./layout";
import { MapPinLine } from "@phosphor-icons/react";
import Input from "@/components/Input";

export default function Checkout() {
  return (
    <Layout>
      <Section className="flex flex-row justify-between">
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
        </div>
        <div>
          <h1 className="font-baloo2 text-lg font-bold text-base-subtitle">
            Cafés selecionados
          </h1>
        </div>
      </Section>
    </Layout>
  );
}

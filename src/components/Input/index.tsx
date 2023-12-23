import { Minus, Plus } from "@phosphor-icons/react";

interface IInput {
  type?: "number";
}

export default function Input({ type }: IInput) {
  return (
    <div className="flex h-8 w-[72px] flex-row items-center justify-center gap-2 rounded-md bg-base-button">
      <Minus size={14} weight="bold" className="text-purple" />
      <span className="font-roboto text-base-title">1</span>
      <Plus size={14} weight="bold" className="text-purple" />
    </div>
  );
}

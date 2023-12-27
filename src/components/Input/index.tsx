import { Minus, Plus } from "@phosphor-icons/react";

interface IInput {
  type?: "number";
}

export default function Input({ type }: IInput) {
  return (
    <div className="flex h-6 w-12 flex-row items-center justify-center gap-2 rounded-md bg-base-button p-1 xl:h-8 xl:w-[72px]">
      <Minus weight="bold" className="text-xs text-purple xl:text-sm" />
      <span className="font-roboto text-xs text-base-title xl:text-base">
        1
      </span>
      <Plus weight="bold" className="text-xs text-purple xl:text-sm" />
    </div>
  );
}

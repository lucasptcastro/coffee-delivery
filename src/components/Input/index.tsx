import { Minus, Plus } from "@phosphor-icons/react";
import { InputHTMLAttributes } from "react";

interface IInput {
  type?: "text" | "number";
  props?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

export default function Input({ type, props, className }: IInput) {
  if (type == "text") {
    return (
      <input
        className={`h-10 rounded border border-base-button bg-base-input p-3 font-roboto text-sm text-base-text ${className} outline-yellow-dark placeholder:text-base-label focus:text-base-text focus:placeholder:text-black/0`}
        type="text"
        {...props}
      />
    );
  } else if (type == "number") {
    return (
      <div className="flex h-6 w-12 flex-row items-center justify-center gap-2 rounded-md bg-base-button p-2 xl:h-fit xl:min-h-8 xl:w-[72px]">
        <Minus
          weight="bold"
          className="text-xs text-purple hover:cursor-pointer hover:text-purple-dark xs:text-sm"
        />
        <span className="font-roboto text-xs text-base-title xs:text-base">
          1
        </span>
        <Plus
          weight="bold"
          className="text-xs text-purple hover:cursor-pointer hover:text-purple-dark xs:text-sm"
        />
      </div>
    );
  }
}

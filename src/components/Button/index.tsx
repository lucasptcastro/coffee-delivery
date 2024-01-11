import { ButtonHTMLAttributes } from "react";

interface IButton {
  label: string;
  type?: "primary" | "secundary";
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  label,
  type = "primary",
  props,
  className,
  icon,
}: IButton) {
  if (type == "primary")
    return (
      <button
        className={`text-base-white h-fit min-h-8 w-fit rounded-md bg-yellow p-2 font-roboto text-sm uppercase transition-colors hover:bg-yellow-dark ${className}`}
        {...props}
      >
        {label}
      </button>
    );
  else
    return (
      <button
        className={`h-fit min-h-8 w-fit rounded-md bg-base-button p-2 transition-colors hover:bg-base-hover ${className} flex items-center gap-1`}
        {...props}
      >
        {icon}
        <span className="font-roboto text-sm uppercase text-base-subtitle">
          {label}
        </span>
      </button>
    );
}

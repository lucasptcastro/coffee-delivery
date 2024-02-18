import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  typeButton?: "primary" | "secundary";
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  label,
  typeButton = "primary",
  className,
  icon,
  ...rest
}: IButton) {
  if (typeButton == "primary")
    return (
      <button
        className={`h-fit min-h-8 w-fit rounded-md bg-yellow p-2 font-roboto text-sm uppercase text-base-white transition-colors hover:bg-yellow-dark ${className}`}
        {...rest}
      >
        {label}
      </button>
    );
  else
    return (
      <button
        className={`h-fit min-h-8 w-fit rounded-md bg-base-button p-2 transition-colors hover:bg-base-hover ${className} flex items-center gap-1`}
        {...rest}
      >
        {icon}
        <span className="font-roboto text-sm uppercase text-base-subtitle">
          {label}
        </span>
      </button>
    );
}

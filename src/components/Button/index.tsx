import { ButtonHTMLAttributes } from "react";

interface IButton {
  label: string;
  type?: "primary" | "secundary";
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Button({
  label,
  type = "primary",
  props,
  className,
}: IButton) {
  return (
    <button
      className={`h-fit w-fit rounded bg-yellow p-2 transition-colors hover:bg-yellow-dark ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

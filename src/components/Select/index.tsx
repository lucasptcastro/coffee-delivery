interface ISelect {
  className?: string;
  options: {
    label: string;
    icon: React.ReactNode;
  }[];
}

export default function Select({ className, options }: ISelect) {
  return (
    <ul className={`flex flex-col gap-3 xl:flex-row ${className}`}>
      {options.map((option, key) => (
        <li
          key={key}
          className="flex flex-row items-center gap-3 rounded-md border border-transparent bg-base-button p-4 transition-all hover:cursor-pointer  hover:bg-base-hover focus:border-purple focus:bg-purple-light xl:min-w-44"
        >
          {option.icon}
          <span className="font-roboto text-xs uppercase leading-[160%] text-base-text">
            {option.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

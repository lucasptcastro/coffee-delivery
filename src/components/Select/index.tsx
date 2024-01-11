interface ISelect {
  className?: string;
  options: {
    label: string;
    icon: React.ReactNode;
  }[];
}

export default function Select({ className, options }: ISelect) {
  return (
    <ul className={`flex flex-row gap-3 ${className}`}>
      {options.map((option) => (
        <li
          key={option.label}
          className="flex min-w-44 flex-row items-center gap-3 rounded-md border border-transparent bg-base-button p-4 transition-all  hover:cursor-pointer hover:bg-base-hover focus:border-purple focus:bg-purple-light"
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

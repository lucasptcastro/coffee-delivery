interface ISection {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: ISection) {
  return (
    <section
      className={`pt-40 xl:h-[544px] xl:px-64 xl:pt-96 2xl:flex-row 2xl:gap-0 2xl:pt-32 3xl:px-[370px] ${className}`}
    >
      {children}
    </section>
  );
}

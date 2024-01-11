interface ISection {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: ISection) {
  return <section className={`${className}`}>{children}</section>;
}

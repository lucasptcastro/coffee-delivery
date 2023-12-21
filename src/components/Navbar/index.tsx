import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex h-16 w-full flex-row justify-between bg-orange-300 px-20">
      <Image alt="" src={"/Logo.svg"} width={84.95} height={40} />

      <div></div>
    </nav>
  );
}

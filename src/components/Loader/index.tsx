import Image from "next/image";

interface ILoader {
  type: "primary" | "logo";
}

export default function Loader({ type = "primary" }: ILoader) {
  if (type == "primary")
    return (
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    );
  else {
    return (
      <div className="loader-logo">
        <Image alt="" src="/Logo.svg" width={300} height={300} />
      </div>
    );
  }
}

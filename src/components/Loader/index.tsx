import Image from "next/image";
import Style from "./index.module.css";

interface ILoader {
  type?: "primary" | "logo";
}

export default function Loader({ type = "primary" }: ILoader) {
  if (type == "primary")
    return (
      <div className={Style.dot_spinner}>
        <div className={Style.dot_spinner__dot}></div>
        <div className={Style.dot_spinner__dot}></div>
        <div className={Style.dot_spinner__dot}></div>
        <div className={Style.dot_spinner__dot}></div>
        <div className={Style.dot_spinner__dot}></div>
        <div className={Style.dot_spinner__dot}></div>
        <div className={Style.dot_spinner__dot}></div>
        <div className={Style.dot_spinner__dot}></div>
      </div>
    );
  else {
    return (
      <div className={Style.loader_logo}>
        <Image alt="" src="/Logo.svg" width={300} height={300} />
      </div>
    );
  }
}

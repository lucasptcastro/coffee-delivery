import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { Baloo_2 } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const baloo2 = Baloo_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-baloo2",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.className} ${baloo2.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

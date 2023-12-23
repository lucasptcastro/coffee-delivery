"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Baloo_2 } from "next/font/google";

import Navbar from "../components/Navbar";

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

// export const metadata: Metadata = {
//   title: "Coffee Delivery",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${baloo2.className} ${roboto.className}`}>
      <Navbar />
      {children}
    </div>
  );
}

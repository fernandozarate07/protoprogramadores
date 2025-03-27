import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { Questrial } from "next/font/google";
import Nav from "./nav/nav";
// import { FaHome, FaCode, FaSlackHash } from "react-icons/fa";

export const metadata = {
  title: "Protoprogramadores",
  description: "Agencia de diseño y desarrollo web",
};
const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={questrial.className}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

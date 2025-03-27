import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { Questrial, Host_Grotesk } from "next/font/google";
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
const host_grotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={questrial.className}>
      <body>
        <Nav />
        {/* <nav className={host_grotesk.className}>
          <Link href="/" className="logo_container">
            <Image src="/image/logo.svg" alt="imagen de avatar de perfil" className="logo" width={80} height={80} />
            <span className="logo_text">Protoprogramadores</span>
          </Link>
          <div className="nav_bar">
            <Link href="/" className="page">
              Inicio
            </Link>
            <Link href="/about" className="page">
              Sobre Nosotros
            </Link>
            <Link href="/contact" className="page">
              Contacto
            </Link>
          </div>
        </nav> */}
        {children}
      </body>
    </html>
  );
}

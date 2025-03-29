import "./globals.css";
import { Questrial } from "next/font/google";
import Nav from "./nav/nav";

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

import type { Metadata } from "next";
import { Baskervville, Lato } from "next/font/google";
import "./globals.css";

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-baskervville",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Sindicato dos Radialistas do Pará",
  description: "Sindicato dos Radialistas do Pará - Página Inicial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baskervville.variable} ${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

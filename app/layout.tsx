import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";
import DarkModeButton from "./components/DarkModeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.Js Todo",
  description: "Created by Me :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <DarkModeButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}

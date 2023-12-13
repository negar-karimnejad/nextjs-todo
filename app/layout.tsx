import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    // <ThemeProvider enableSystem={true} attribute="class">
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    // </ThemeProvider>
  );
}

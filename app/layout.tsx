import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

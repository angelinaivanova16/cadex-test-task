import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";
import { Header, Footer, FloatingCallButton } from '@/components';


const manropeSans = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Some Company",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manropeSans.className}>
        <Header />
        <FloatingCallButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

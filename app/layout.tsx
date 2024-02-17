import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarBottomSection from "@/components/navbarBottom";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Todo List APP",
  description: "todo list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="sm:w-1/5 sm:max-h-96 sm:mt-20 sm:mx-auto">
          <NavbarBottomSection />
          {children}
        </div>
      </body>
    </html>
  );
}

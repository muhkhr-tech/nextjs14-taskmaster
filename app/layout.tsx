import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarBottomSection from "@/components/navbarBottom";
import NavbarTopSection from "@/components/navbarTop";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "TaskMaster APP",
  description: "task master app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="">
          <NavbarBottomSection />
          <NavbarTopSection/>
          <div className="sm:w-4/5 max-w-full mx-auto justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}

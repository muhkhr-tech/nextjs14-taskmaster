'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuNavbarBottom from "../lib/navigation/menuNavbarBottom";

export default function NavbarBottomSection() {
  const menu = MenuNavbarBottom()
  const pathname = usePathname()

  return (
    <ul className="flex sm:hidden bg-base-100 fixed bottom-0 justify-center w-screen z-10 border-t-2">
      {menu.map((item, index) => (
        <li key={index} className={`${pathname===item.path && 'self-center text-blue-700'} p-2`}>
          <Link href={item.path} className="flex flex-col items-center w-full"><span>{item.icon}</span> <span className="text-xs">{item.name}</span></Link></li>
      ))}
    </ul>
  )
}
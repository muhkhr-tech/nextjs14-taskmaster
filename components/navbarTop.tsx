'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuNavbarBottom from "../lib/navigation/menuNavbarBottom";

export default function NavbarTopSection() {
  const menu = MenuNavbarBottom()
  const pathname = usePathname()

  return (
    <ul className="hidden sm:flex bg-base-100 justify-center w-screen">
      {menu.map((item, index) => (
        <li key={index} className={`${pathname===item.path && 'self-center text-blue-700'} p-2`}>
          <Link href={item.path} className="flex flex-col items-center w-full"><span>{item.icon}</span> <span className="text-xs">{item.name}</span></Link></li>
      ))}
    </ul>
  )
}
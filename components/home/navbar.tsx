'use client'

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-center lg:justify-start items-start lg:px-60 fixed z-100 top-5 w-[60vw]">
      <ul className="flex justify-center lg:justify-start gap-5">
        <li>
            <Link href={'/'}>
                <div className="border-2 border-[#9f1d21] rounded-2xl px-5 md:px-10 py-2 text-lg md:text-xl text-[#9f1d21]">
                    <p>Home</p>
                </div>
            </Link>
        </li>
        <li>
            <Link href={'/contact'}>
                <div className="border-2 border-[#9f1d21] rounded-2xl px-5 md:px-10 py-2 text-lg md:text-xl text-[#9f1d21]">
                    <p>Contact</p>
                </div>
            </Link>
        </li>
      </ul>
    </nav>
  )
}



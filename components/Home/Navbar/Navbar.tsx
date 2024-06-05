import Link from 'next/link'
import React from 'react'
import { IoBuildSharp } from 'react-icons/io5'
import { PiMegaphoneSimpleFill } from 'react-icons/pi'

export default function Navbar() {
  return (
    <div
        className="absolute right-[5%] top-[3%] z-10 flex flex-col gap-2"
    >
        <button type="button" className="w-10 h-10 bg-white flex items-center justify-center rounded border text-xl cursor-pointer">
            <IoBuildSharp/>
        </button>
        <Link href={'/report'} className="w-10 h-10 bg-white flex items-center justify-center rounded border text-xl cursor-pointer">
            <PiMegaphoneSimpleFill />
        </Link>
    </div>
  )
}

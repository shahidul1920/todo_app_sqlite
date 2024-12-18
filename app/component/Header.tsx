import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
  const links = [
    { href: "/", tothe: "Home" },
    { href: "/todos", tothe: "Add Todo" },
    { href: "https://shahidulshakil.me", tothe: "My Web" },
  ]
  return (
    <div className='w-[100%] h-[auto] px-[2rem] py-[1rem] bg-green-500 flex gap-[2rem] justify-between items-center text-[#fff]'>
      <div><h1 className='font-bold text-3xl text-[#fff]'>Daily Work</h1></div>

      <div className='flex gap-[2rem]'>
        {links.map((link) => (
          <div key={link.tothe}>
            <div>
              <ul className='font-semibold text-[18px]'>
                <li>
                  <Link href={link.href}>{link.tothe}</Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
  const links = [
    {href: "/", tothe:"Home"},
    {href: "/pannel", tothe:"Add Todo"},
  ]
  return (
    <div>
      {links.map((link)=>(
        <div key={link.tothe}>
          <ul>
            <li>
              <Link href={link.href}>{link.tothe}</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

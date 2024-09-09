import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

export default function Navbar() {
  return (
    <div>
        <div className="brand">
        <Link href="/">
            LOGO
        </Link>

        </div>
        <div className="nav-links">
            <Links />
        </div>
    </div>
  )
}

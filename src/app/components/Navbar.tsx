'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { withRouter } from 'next/router'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href="/" className = "text-white text-xl font-bold">
          My Portfolio
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href = "/"
            className={`${
              pathname === '/'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href = "/about"
            className={`${
              pathname === '/about'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            href = "/projects"
            className={`${
              pathname === '/projects'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}
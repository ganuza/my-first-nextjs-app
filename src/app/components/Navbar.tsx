'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { withRouter } from 'next/router'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href="/" className = "text-gray-700 text-2xl font-bold">
          Adrian <span className="text-red-700 text-2xl">.</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href = "/"
            className={`${
              pathname === '/'
              ? 'text-gray-300'
              : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
          </Link>
          <Link
            href = "/about"
            className={`${
              pathname === '/about'
              ? 'text-gray-300'
              : 'text-gray-600 hover:text-black hover:font-semibold'
            }`}
          >
            About
          </Link>
          <Link
            href = "/projects"
            className={`${
              pathname === '/projects'
              ? 'text-gray-300'
              : 'text-gray-600 hover:text-black'
            }`}
          >
            Projects
          </Link>
          <Link
            href = "/error-test"
            className={`${
              pathname === 'error-test'
              ? 'text-gray-300'
              : 'text-gray-600 hover:text-black'
            }`}
            >
              Test Error
            </Link>
        </div>
      </div>
    </nav>
  )
}
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
        </div>

        
      </div>
    </nav>
  )
}
"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => {
    return pathname === path ? "font-semibold" : "text-gray-600 hover:text-black"
  }

  // Handle click outside to close dropdown on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-light tracking-wider">
          Draneyes
        </Link>
        <div className="flex space-x-8">
          <Link href="/" className={`${isActive("/")} transition-colors`}>
            About
          </Link>

          {/* Photography Dropdown - Using CSS hover for desktop and state for mobile */}
          <div ref={dropdownRef} className="group relative">
            {/* For mobile - toggle dropdown on click */}
            <button
              className={`md:hidden flex items-center gap-1 ${
                pathname === "/photography" || pathname === "/commercial"
                  ? "font-semibold"
                  : "text-gray-600 hover:text-black"
              } transition-colors`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Photography
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* For desktop - show on hover */}
            <div
              className={`hidden md:flex items-center gap-1 cursor-default ${
                pathname === "/photography" || pathname === "/commercial"
                  ? "font-semibold"
                  : "text-gray-600 group-hover:text-black"
              } transition-colors`}
            >
              Photography
              <ChevronDown className="h-4 w-4" />
            </div>

            {/* Dropdown Menu - CSS hover for desktop */}
            <div
              className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 
              md:invisible md:group-hover:visible md:opacity-0 md:group-hover:opacity-100 md:translate-y-1 md:group-hover:translate-y-0
              ${isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none md:pointer-events-auto"}`}
            >
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link
                  href="/photography"
                  className={`block px-4 py-2 text-sm ${
                    pathname === "/photography" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Personal Work
                </Link>
                <Link
                  href="/commercial"
                  className={`block px-4 py-2 text-sm ${
                    pathname === "/commercial" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Commercial
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact" className={`${isActive("/contact")} transition-colors`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

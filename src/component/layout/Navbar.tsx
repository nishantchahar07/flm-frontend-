// ===== src/components/layout/Navbar.tsx =====
import { MenuIcon } from '@/components/icons/Icons'

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">FLM</span>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Arjith</p>
            <p className="text-xs text-gray-500">Instructor</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ===== src/components/icons/Icons.tsx =====
import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export const MenuIcon = (props: IconProps) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

// ===== Usage Example in a page =====
'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen)
    // Add your sidebar toggle logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuClick={handleMenuClick} />
      
      {/* Your page content goes here */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Page Content</h1>
      </main>
    </div>
  )
}
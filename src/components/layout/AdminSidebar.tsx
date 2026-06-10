'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Building2,
  FileText,
  CreditCard,
  Users,
  HeadphonesIcon,
  ScrollText,
  Settings,
} from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Pasqyra', icon: LayoutDashboard, exact: true },
  { href: '/admin/businesses', label: 'Bizneset', icon: Building2 },
  { href: '/admin/applications', label: 'Aplikimet', icon: FileText },
  { href: '/admin/subscriptions', label: 'Abonimi', icon: CreditCard },
  { href: '/admin/users', label: 'Përdoruesit', icon: Users },
  { href: '/admin/support', label: 'Mbështetja', icon: HeadphonesIcon },
  { href: '/admin/audit-logs', label: 'Audit Logs', icon: ScrollText },
  { href: '/admin/settings', label: 'Cilësimet', icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 min-h-screen border-r border-gray-100 bg-white flex flex-col">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-gray-100">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">W</span>
          </div>
          <span className="font-semibold text-gray-900 text-sm">WellFlow</span>
        </Link>
      </div>

      {/* Label */}
      <div className="px-5 pt-5 pb-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
          Platform Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 pb-4">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm mb-0.5 transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-5 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">Platform Admin</p>
      </div>
    </aside>
  )
}
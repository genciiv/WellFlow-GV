'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  CalendarDays,
  CalendarClock,
  Users,
  UserCog,
  Scissors,
  Package,
  Warehouse,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Megaphone,
  Settings,
} from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'Pasqyra', icon: LayoutDashboard, exact: true },
  { href: '/dashboard/calendar', label: 'Kalendari', icon: CalendarDays },
  { href: '/dashboard/appointments', label: 'Takimet', icon: CalendarClock },
  { href: '/dashboard/clients', label: 'Klientët', icon: Users },
  { href: '/dashboard/staff', label: 'Stafi', icon: UserCog },
  { href: '/dashboard/services', label: 'Shërbimet', icon: Scissors },
  { href: '/dashboard/products', label: 'Produktet', icon: Package },
  { href: '/dashboard/inventory', label: 'Magazina', icon: Warehouse },
  { href: '/dashboard/sales', label: 'Shitjet', icon: ShoppingCart },
  { href: '/dashboard/payments', label: 'Pagesat', icon: CreditCard },
  { href: '/dashboard/reports', label: 'Raportet', icon: BarChart3 },
  { href: '/dashboard/marketing', label: 'Marketingu', icon: Megaphone },
  { href: '/dashboard/settings', label: 'Cilësimet', icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 min-h-screen border-r border-gray-100 bg-white flex flex-col">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">W</span>
          </div>
          <span className="font-semibold text-gray-900 text-sm">WellFlow</span>
        </Link>
      </div>

      {/* Business name placeholder */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-medium text-gray-900 truncate">Style Cut Barber</p>
        <p className="text-xs text-gray-400 mt-0.5">Business Owner</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 pb-4 overflow-y-auto">
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
        <p className="text-xs text-gray-400">Plan: Business</p>
      </div>
    </aside>
  )
}
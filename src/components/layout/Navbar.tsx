import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">W</span>
          </div>
          <span className="font-semibold text-gray-900 text-sm tracking-tight">
            WellFlow
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/features"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Funksionet
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Çmimet
          </Link>
          <Link
            href="/search"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Kërko biznes
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Hyr
          </Link>
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 text-sm">
            <Link href="/apply">Fillo falas</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span className="font-semibold text-gray-900 text-sm">WellFlow Beauty</span>
            </div>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              Platforma e menaxhimit për bizneset e bukurisë në Shqipëri.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-medium text-gray-900 mb-3 text-xs uppercase tracking-wide">Produkt</div>
              <div className="flex flex-col gap-2">
                <Link href="/features" className="text-gray-500 hover:text-gray-900 transition-colors">Funksionet</Link>
                <Link href="/pricing" className="text-gray-500 hover:text-gray-900 transition-colors">Çmimet</Link>
                <Link href="/search" className="text-gray-500 hover:text-gray-900 transition-colors">Marketplace</Link>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-3 text-xs uppercase tracking-wide">Kompania</div>
              <div className="flex flex-col gap-2">
                <Link href="/apply" className="text-gray-500 hover:text-gray-900 transition-colors">Regjistrohu</Link>
                <Link href="/login" className="text-gray-500 hover:text-gray-900 transition-colors">Hyr</Link>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-3 text-xs uppercase tracking-wide">Ligjore</div>
              <div className="flex flex-col gap-2">
                <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">Kushtet</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">Privatësia</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">© 2025 WellFlow Beauty. Të gjitha të drejtat e rezervuara.</p>
          <p className="text-xs text-gray-400">Ndërtuar me 🤍 për Shqipërinë</p>
        </div>
      </div>
    </footer>
  )
}
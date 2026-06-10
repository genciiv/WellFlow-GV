import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarDays, Users, Package, BarChart3, Clock, Star } from 'lucide-react'

const features = [
  {
    icon: CalendarDays,
    title: 'Rezervime',
    description: 'Klientët rezervojnë 24/7 nga telefoni. Ti menaxhon gjithçka nga dashbordi.',
  },
  {
    icon: Users,
    title: 'Klientë & Staf',
    description: 'Historiku i çdo klienti, performanca e stafit dhe komisionet automatike.',
  },
  {
    icon: Package,
    title: 'Produkte & Magazinë',
    description: 'Shto produktet, gjurmo stokun dhe merr alert kur mbarojnë.',
  },
  {
    icon: BarChart3,
    title: 'Raporte',
    description: 'Të ardhurat ditore, shërbimet më të kërkuara dhe punonjësi më produktiv.',
  },
  {
    icon: Clock,
    title: 'Kalendarë',
    description: 'Pamja ditore dhe javore e të gjitha takimeve. Pa konflikte, pa humbje.',
  },
  {
    icon: Star,
    title: 'Marketplace',
    description: 'Biznesi yt shfaqet te klientët e rinj që kërkojnë shërbime në qytetin tënd.',
  },
]

const categories = [
  { label: 'Berber', emoji: '✂️', count: '120+ berberë' },
  { label: 'Sallon Bukurie', emoji: '💇', count: '80+ sallone' },
  { label: 'Studio Thonjsh', emoji: '💅', count: '60+ studio' },
  { label: 'Qendër Estetike', emoji: '✨', count: '40+ qendra' },
]

const steps = [
  { step: '01', title: 'Regjistro biznesin', description: 'Plotëso formularin e aplikimit. Brenda 24 orësh e aprovojmë.' },
  { step: '02', title: 'Konfiguron shërbimet', description: 'Shto shërbimet, stafin dhe oraret e punës.' },
  { step: '03', title: 'Klientët rezervojnë', description: 'Jep linkun tënd. Klientët rezervojnë direkt nga telefoni.' },
  { step: '04', title: 'Ti menaxhon', description: 'Shiko takimet, regjistro shitjet dhe kontrollo raportet.' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Platforma #1 për bizneset e bukurisë në Shqipëri
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Menaxho biznesin tënd të bukurisë{' '}
          <span className="text-blue-600">në mënyrë profesionale</span>
        </h1>

        <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Rezervime, klientë, staf, produkte dhe pagesa në një vend.
          Ndërtuar për berberë, sallone, studio thonjsh dhe qendra estetike.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-md">
            <Link href="/apply">
              Fillo 30 ditë falas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md px-6 border-gray-200 text-gray-600">
            <Link href="/pricing">Shiko çmimet</Link>
          </Button>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Pa kartë krediti · Anulim në çdo kohë
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '300+', label: 'Biznese aktive' },
            { value: '15,000+', label: 'Rezervime/muaj' },
            { value: '4 qytete', label: 'Tirana, Vlora, Fier, Durrës' },
            { value: '4.9 ★', label: 'Vlerësim mesatar' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Gjithçka që i duhet biznesit tënd</h2>
          <p className="mt-2 text-gray-500 text-sm">Një platformë. Zero konfuzione.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-5 rounded-lg border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center mb-4">
                <f.icon className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 text-sm">{f.title}</h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Ndërtuar për çdo biznes bukurie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="p-5 bg-white rounded-lg border border-gray-100 text-center hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{cat.emoji}</div>
                <div className="font-medium text-gray-900 text-sm">{cat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{cat.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Si funksionon</h2>
          <p className="mt-2 text-gray-500 text-sm">Nga aplikimi tek rezervimet e para — brenda 24 orësh.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="text-xs font-mono text-blue-500 mb-3">{s.step}</div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Gati të fillosh?
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            30 ditë falas. Pa kartë krediti. Konfigurimi bëhet në 10 minuta.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6">
              <Link href="/apply">
                Regjistro biznesin
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-md px-6 border-gray-200 text-gray-600">
              <Link href="/search">Kërko biznes</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
import {
  CalendarClock, TrendingUp, Users,
  Package, CreditCard, AlertTriangle
} from 'lucide-react'
import { StatCard } from '@/components/shared/StatCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

const todayAppointments = [
  { id: '1', time: '09:00', client: 'Ardit Berberi', service: 'Qethje + Mjekër', staff: 'Andi', status: 'confirmed', duration: '45 min' },
  { id: '2', time: '10:00', client: 'Blerim Hoxha', service: 'Qethje', staff: 'Andi', status: 'confirmed', duration: '30 min' },
  { id: '3', time: '11:30', client: 'Fatjon Kelmendi', service: 'Mjekër', staff: 'Erjon', status: 'pending', duration: '20 min' },
  { id: '4', time: '13:00', client: 'Gent Marku', service: 'Qethje', staff: 'Andi', status: 'completed', duration: '30 min' },
  { id: '5', time: '14:30', client: 'Ilir Shehu', service: 'Qethje + Mjekër', staff: 'Erjon', status: 'cancelled', duration: '45 min' },
]

const lowStockProducts = [
  { name: 'Wax flokësh', stock: 2, alert: 5 },
  { name: 'Pomade', stock: 1, alert: 3 },
  { name: 'Vaj për mjekër', stock: 3, alert: 5 },
]

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-gray-900">Mirëmëngjes 👋</h1>
        <p className="text-sm text-gray-500 mt-0.5">E Martë, 10 Qershor 2025 — Sot keni 5 takime.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
        <StatCard
          title="Takime sot"
          value="5"
          subtitle="2 të konfirmuara"
          icon={CalendarClock}
        />
        <StatCard
          title="Të ardhura mujore"
          value="184,500 L"
          icon={TrendingUp}
          trend={{ value: '+12% vs muajit kaluar', positive: true }}
        />
        <StatCard
          title="Klientë të rinj"
          value="14"
          subtitle="Këtë muaj"
          icon={Users}
          trend={{ value: '+3 vs muajit kaluar', positive: true }}
        />
        <StatCard
          title="Shitje produktesh"
          value="32,000 L"
          icon={Package}
          trend={{ value: '+8% vs muajit kaluar', positive: true }}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">

        {/* Today appointments */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-100">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-900">Takimet e sotme</h2>
            <a href="/dashboard/calendar" className="text-xs text-blue-600 hover:text-blue-700">
              Shiko kalendarin →
            </a>
          </div>
          <div className="divide-y divide-gray-50">
            {todayAppointments.map((apt) => (
              <div key={apt.id} className="flex items-center justify-between px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="text-xs font-mono text-gray-400 w-12 shrink-0">
                    {apt.time}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{apt.client}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {apt.service} · {apt.staff} · {apt.duration}
                    </p>
                  </div>
                </div>
                <StatusBadge status={apt.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">

          {/* Unpaid */}
          <div className="bg-white rounded-lg border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 text-gray-400" />
              <h2 className="text-sm font-medium text-gray-900">Pagesa në pritje</h2>
            </div>
            <p className="text-2xl font-semibold text-gray-900">24,500 L</p>
            <p className="text-xs text-gray-400 mt-1">4 fatura të hapura</p>
            
              href="/dashboard/payments"
              className="mt-3 inline-block text-xs text-blue-600 hover:text-blue-700"
            >
              Shiko pagesat →
            </a>
          </div>

          {/* Low stock */}
          <div className="bg-white rounded-lg border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <h2 className="text-sm font-medium text-gray-900">Stok i ulët</h2>
            </div>
            <div className="flex flex-col gap-2.5">
              {lowStockProducts.map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <p className="text-sm text-gray-700">{p.name}</p>
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {p.stock} mbetur
                  </span>
                </div>
              ))}
            </div>
            
              href="/dashboard/inventory"
              className="mt-3 inline-block text-xs text-blue-600 hover:text-blue-700"
            >
              Shiko magazinën →
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
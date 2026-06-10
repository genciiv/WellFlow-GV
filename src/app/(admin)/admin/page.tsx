import {
  Building2, FileText, CreditCard,
  TrendingUp, AlertCircle, Users
} from 'lucide-react'
import { StatCard } from '@/components/shared/StatCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

const recentApplications = [
  { id: '1', name: 'Bella Beauty Salon', city: 'Tiranë', category: 'Sallon Bukurie', status: 'pending', date: '10 Qer 2025' },
  { id: '2', name: 'Style Cut Barber', city: 'Vlorë', category: 'Berber', status: 'pending', date: '09 Qer 2025' },
  { id: '3', name: 'Nail Art Studio', city: 'Fier', category: 'Studio Thonjsh', status: 'approved', date: '08 Qer 2025' },
  { id: '4', name: 'Glow Aesthetic', city: 'Durrës', category: 'Qendër Estetike', status: 'approved', date: '07 Qer 2025' },
]

const recentBusinesses = [
  { id: '1', name: 'Ardi Barber Shop', plan: 'Business', city: 'Tiranë', status: 'approved', revenue: '5,000 L' },
  { id: '2', name: 'Lux Beauty Salon', plan: 'Pro', city: 'Vlorë', status: 'approved', revenue: '9,000 L' },
  { id: '3', name: 'Pink Nails', plan: 'Starter', city: 'Fier', status: 'suspended', revenue: '0 L' },
]

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-gray-900">Pasqyra e Platformës</h1>
        <p className="text-sm text-gray-500 mt-0.5">Gjithçka ndodh këtu — biznese, aplikime, të ardhura.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
        <StatCard
          title="Biznese aktive"
          value="284"
          icon={Building2}
          trend={{ value: '+12 këtë muaj', positive: true }}
        />
        <StatCard
          title="Aplikime në pritje"
          value="7"
          subtitle="Duhet shqyrtim"
          icon={FileText}
        />
        <StatCard
          title="Abonime aktive"
          value="261"
          icon={CreditCard}
          trend={{ value: '+8 këtë muaj', positive: true }}
        />
        <StatCard
          title="Të ardhura mujore"
          value="1.2M L"
          icon={TrendingUp}
          trend={{ value: '+18% vs muajit kaluar', positive: true }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-5">
        <StatCard
          title="Biznese papaguara"
          value="23"
          subtitle="Nevojitet veprim"
          icon={AlertCircle}
        />
        <StatCard
          title="Përdorues total"
          value="1,840"
          icon={Users}
          trend={{ value: '+134 këtë muaj', positive: true }}
        />
      </div>

      {/* Applications */}
      <div className="bg-white rounded-lg border border-gray-100 mb-5">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-medium text-gray-900">Aplikimet e fundit</h2>
          <a href="/admin/applications" className="text-xs text-blue-600 hover:text-blue-700">
            Shiko të gjitha →
          </a>
        </div>
        <div className="divide-y divide-gray-50">
          {recentApplications.map((app) => (
            <div key={app.id} className="flex items-center justify-between px-5 py-3.5">
              <div>
                <p className="text-sm font-medium text-gray-900">{app.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{app.city} · {app.category} · {app.date}</p>
              </div>
              <StatusBadge status={app.status} />
            </div>
          ))}
        </div>
      </div>

      {/* Businesses */}
      <div className="bg-white rounded-lg border border-gray-100">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-medium text-gray-900">Bizneset aktive</h2>
          <a href="/admin/businesses" className="text-xs text-blue-600 hover:text-blue-700">
            Shiko të gjitha →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400">Biznesi</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400">Plani</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400">Qyteti</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400">Pagesa</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400">Statusi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentBusinesses.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-gray-900">{b.name}</td>
                  <td className="px-5 py-3.5 text-gray-500">{b.plan}</td>
                  <td className="px-5 py-3.5 text-gray-500">{b.city}</td>
                  <td className="px-5 py-3.5 text-gray-500">{b.revenue}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={b.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
'use client'

import { useState } from 'react'
import { Plus, Search } from 'lucide-react'
import { StatusBadge } from '@/components/shared/StatusBadge'

const mockAppointments = [
  { id: '1', date: '10 Qer', time: '09:00', client: 'Ardit Berberi', phone: '+355 69 123 4567', service: 'Qethje + Mjekër', staff: 'Andi', duration: '45 min', price: '1,200 L', status: 'confirmed' },
  { id: '2', date: '10 Qer', time: '10:00', client: 'Blerim Hoxha', phone: '+355 68 234 5678', service: 'Qethje', staff: 'Erjon', duration: '30 min', price: '700 L', status: 'confirmed' },
  { id: '3', date: '10 Qer', time: '11:30', client: 'Fatjon Kelmendi', phone: '+355 67 345 6789', service: 'Mjekër', staff: 'Andi', duration: '20 min', price: '500 L', status: 'pending' },
  { id: '4', date: '10 Qer', time: '13:00', client: 'Gent Marku', phone: '+355 66 456 7890', service: 'Qethje', staff: 'Erjon', duration: '30 min', price: '700 L', status: 'completed' },
  { id: '5', date: '09 Qer', time: '14:30', client: 'Ilir Shehu', phone: '+355 65 567 8901', service: 'Qethje + Mjekër', staff: 'Andi', duration: '45 min', price: '1,200 L', status: 'cancelled' },
  { id: '6', date: '09 Qer', time: '16:00', client: 'Jeton Prifti', phone: '+355 64 678 9012', service: 'Qethje', staff: 'Erjon', duration: '30 min', price: '700 L', status: 'no_show' },
]

const statusOptions = ['all', 'pending', 'confirmed', 'completed', 'cancelled', 'no_show'] as const
const statusLabels: Record<string, string> = {
  all: 'Të gjitha',
  pending: 'Në pritje',
  confirmed: 'Konfirmuar',
  completed: 'Përfunduar',
  cancelled: 'Anuluar',
  no_show: 'Nuk erdhi',
}

export default function AppointmentsPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<typeof statusOptions[number]>('all')

  const filtered = mockAppointments.filter((a) => {
    const matchSearch = a.client.toLowerCase().includes(search.toLowerCase()) ||
      a.service.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || a.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Takimet</h1>
          <p className="text-sm text-gray-500 mt-0.5">{mockAppointments.length} takime gjithsej</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors">
          <Plus className="w-4 h-4" />
          Takim i ri
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kërko klient ose shërbim..."
            className="w-full h-9 pl-9 pr-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
          />
        </div>

        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                filter === s
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {statusLabels[s]}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Data & Ora</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Klienti</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Shërbimi</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Stafi</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Çmimi</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Statusi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400">
                    Nuk u gjet asnjë takim.
                  </td>
                </tr>
              ) : (
                filtered.map((apt) => (
                  <tr key={apt.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-gray-900 font-mono text-xs">{apt.time}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{apt.date} · {apt.duration}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-gray-900">{apt.client}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{apt.phone}</p>
                    </td>
                    <td className="px-5 py-3.5 text-gray-600">{apt.service}</td>
                    <td className="px-5 py-3.5 text-gray-600">{apt.staff}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{apt.price}</td>
                    <td className="px-5 py-3.5"><StatusBadge status={apt.status} /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
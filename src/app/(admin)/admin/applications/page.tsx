'use client'

import { useState } from 'react'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { Check, X } from 'lucide-react'

const mockApplications = [
  { id: '1', business_name: 'Bella Beauty Salon', owner_name: 'Arta Hoxha', city: 'Tiranë', category: 'Sallon Bukurie', phone: '+355 69 123 4567', email: 'arta@bella.al', status: 'pending', created_at: '10 Qer 2025' },
  { id: '2', business_name: 'Style Cut Barber', owner_name: 'Ardi Kelmendi', city: 'Vlorë', category: 'Berber', phone: '+355 68 234 5678', email: 'ardi@stylecut.al', status: 'pending', created_at: '09 Qer 2025' },
  { id: '3', business_name: 'Nail Art Studio', owner_name: 'Blerta Marku', city: 'Fier', category: 'Studio Thonjsh', phone: '+355 67 345 6789', email: 'blerta@nailart.al', status: 'approved', created_at: '08 Qer 2025' },
  { id: '4', business_name: 'Glow Aesthetic', owner_name: 'Erinda Lleshi', city: 'Durrës', category: 'Qendër Estetike', phone: '+355 66 456 7890', email: 'erinda@glow.al', status: 'rejected', created_at: '07 Qer 2025' },
]

export default function ApplicationsPage() {
  const [applications, setApplications] = useState(mockApplications)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all')

  function handleAction(id: string, action: 'approved' | 'rejected') {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: action } : a))
    )
  }

  const filtered = filter === 'all' ? applications : applications.filter((a) => a.status === filter)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-gray-900">Aplikimet</h1>
        <p className="text-sm text-gray-500 mt-0.5">Shqyrto dhe aprovo bizneset e reja.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 mb-5 bg-gray-100 p-1 rounded-lg w-fit">
        {(['all', 'pending', 'approved', 'rejected'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === f
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {f === 'all' ? 'Të gjitha' : f === 'pending' ? 'Në pritje' : f === 'approved' ? 'Aprovuar' : 'Refuzuar'}
            {f !== 'all' && (
              <span className="ml-1.5 text-gray-400">
                {applications.filter((a) => a.status === f).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Biznesi</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Pronari</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Qyteti</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Kategoria</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Data</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Statusi</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Veprimet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">{app.business_name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{app.email}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-gray-700">{app.owner_name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{app.phone}</p>
                  </td>
                  <td className="px-5 py-4 text-gray-500">{app.city}</td>
                  <td className="px-5 py-4 text-gray-500">{app.category}</td>
                  <td className="px-5 py-4 text-gray-500">{app.created_at}</td>
                  <td className="px-5 py-4"><StatusBadge status={app.status} /></td>
                  <td className="px-5 py-4">
                    {app.status === 'pending' && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAction(app.id, 'approved')}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-green-50 text-green-700 text-xs font-medium hover:bg-green-100 transition-colors border border-green-200"
                        >
                          <Check className="w-3 h-3" />
                          Aprovo
                        </button>
                        <button
                          onClick={() => handleAction(app.id, 'rejected')}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-red-50 text-red-600 text-xs font-medium hover:bg-red-100 transition-colors border border-red-200"
                        >
                          <X className="w-3 h-3" />
                          Refuzo
                        </button>
                      </div>
                    )}
                    {app.status !== 'pending' && (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
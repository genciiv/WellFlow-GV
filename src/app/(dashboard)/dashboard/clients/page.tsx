'use client'

import { useState } from 'react'
import { Plus, Search, Phone, Mail, MoreHorizontal } from 'lucide-react'

const mockClients = [
  { id: '1', full_name: 'Ardit Berberi', phone: '+355 69 123 4567', email: 'ardit@gmail.com', gender: 'male', visits: 12, last_visit: '10 Qer 2025', total_spent: '14,400 L', notes: 'Preferon qethje të shkurtër' },
  { id: '2', full_name: 'Blerim Hoxha', phone: '+355 68 234 5678', email: 'blerim@gmail.com', gender: 'male', visits: 8, last_visit: '08 Qer 2025', total_spent: '5,600 L', notes: '' },
  { id: '3', full_name: 'Fatjon Kelmendi', phone: '+355 67 345 6789', email: 'fatjon@gmail.com', gender: 'male', visits: 5, last_visit: '05 Qer 2025', total_spent: '3,500 L', notes: 'Alergjik ndaj disa produkteve' },
  { id: '4', full_name: 'Gent Marku', phone: '+355 66 456 7890', email: 'gent@gmail.com', gender: 'male', visits: 20, last_visit: '03 Qer 2025', total_spent: '28,000 L', notes: 'Klient i rregullt' },
  { id: '5', full_name: 'Ilir Shehu', phone: '+355 65 567 8901', email: 'ilir@gmail.com', gender: 'male', visits: 3, last_visit: '01 Qer 2025', total_spent: '2,100 L', notes: '' },
  { id: '6', full_name: 'Jeton Prifti', phone: '+355 64 678 9012', email: 'jeton@gmail.com', gender: 'male', visits: 15, last_visit: '28 Maj 2025', total_spent: '18,750 L', notes: 'Preferon Erjonin' },
]

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase()
}

function getAvatarColor(name: string) {
  const colors = [
    'bg-blue-100 text-blue-700',
    'bg-purple-100 text-purple-700',
    'bg-green-100 text-green-700',
    'bg-amber-100 text-amber-700',
    'bg-rose-100 text-rose-700',
    'bg-teal-100 text-teal-700',
  ]
  return colors[name.charCodeAt(0) % colors.length]
}

export default function ClientsPage() {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const filtered = mockClients.filter((c) =>
    c.full_name.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  )

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Klientët</h1>
          <p className="text-sm text-gray-500 mt-0.5">{mockClients.length} klientë gjithsej</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Klient i ri
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-xs mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Kërko emër ose telefon..."
          className="w-full h-9 pl-9 pr-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Klienti</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Kontakti</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Vizita</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Vizita e fundit</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Totali shpenzuar</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-400">Shënime</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-sm text-gray-400">
                    Nuk u gjet asnjë klient.
                  </td>
                </tr>
              ) : (
                filtered.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${getAvatarColor(client.full_name)}`}>
                          {getInitials(client.full_name)}
                        </div>
                        <p className="font-medium text-gray-900">{client.full_name}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Phone className="w-3 h-3" />
                          {client.phone}
                        </div>
                        {client.email && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <Mail className="w-3 h-3" />
                            {client.email}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-sm font-medium text-gray-900">{client.visits}</span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 text-xs">{client.last_visit}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{client.total_spent}</td>
                    <td className="px-5 py-3.5 text-xs text-gray-400 max-w-[160px] truncate">
                      {client.notes || '—'}
                    </td>
                    <td className="px-5 py-3.5">
                      <button className="p-1 hover:bg-gray-100 rounded-md transition-colors text-gray-400">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Client Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border border-gray-100 shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-900">Klient i ri</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none"
              >
                ×
              </button>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Emri i plotë *</label>
                <input
                  placeholder="Emri Mbiemri"
                  className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700">Telefoni</label>
                  <input
                    placeholder="+355 6X XXX XXXX"
                    className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700">Gjinia</label>
                  <select className="h-9 px-3 rounded-md border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors">
                    <option value="">Zgjidh</option>
                    <option value="male">Mashkull</option>
                    <option value="female">Femër</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Shënime</label>
                <textarea
                  rows={2}
                  placeholder="Preferencat e klientit..."
                  className="px-3 py-2 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors resize-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-100">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Anulo
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors">
                Shto klientin
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
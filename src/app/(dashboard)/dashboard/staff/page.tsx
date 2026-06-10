'use client'

import { useState } from 'react'
import { Plus, Phone, Mail, MoreHorizontal } from 'lucide-react'

const mockStaff = [
  { id: '1', full_name: 'Andi Kelmendi', phone: '+355 69 111 2222', email: 'andi@stylecut.al', specialty: 'Qethje & Mjekër', commission_percentage: 30, appointments_month: 48, revenue_month: '42,000 L', commission_earned: '12,600 L', is_active: true },
  { id: '2', full_name: 'Erjon Hoxha', phone: '+355 68 333 4444', email: 'erjon@stylecut.al', specialty: 'Qethje', commission_percentage: 25, appointments_month: 35, revenue_month: '24,500 L', commission_earned: '6,125 L', is_active: true },
  { id: '3', full_name: 'Klajdi Marku', phone: '+355 67 555 6666', email: 'klajdi@stylecut.al', specialty: 'Mjekër & Stilim', commission_percentage: 28, appointments_month: 20, revenue_month: '14,000 L', commission_earned: '3,920 L', is_active: false },
]

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase()
}

export default function StaffPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Stafi</h1>
          <p className="text-sm text-gray-500 mt-0.5">{mockStaff.length} punonjës gjithsej</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Punonjës i ri
        </button>
      </div>

      {/* Staff cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {mockStaff.map((staff) => (
          <div key={staff.id} className="bg-white rounded-lg border border-gray-100 p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-semibold">
                  {getInitials(staff.full_name)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{staff.full_name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{staff.specialty}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${staff.is_active ? 'bg-green-500' : 'bg-gray-300'}`} />
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Phone className="w-3 h-3" />
                {staff.phone}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Mail className="w-3 h-3" />
                {staff.email}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-50">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-900">{staff.appointments_month}</p>
                <p className="text-xs text-gray-400 mt-0.5">Takime</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-900">{staff.revenue_month}</p>
                <p className="text-xs text-gray-400 mt-0.5">Të ardhura</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-600">{staff.commission_percentage}%</p>
                <p className="text-xs text-gray-400 mt-0.5">Komisioni</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-50">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">Komisioni këtë muaj</p>
                <p className="text-xs font-semibold text-green-600">{staff.commission_earned}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Staff Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border border-gray-100 shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-900">Punonjës i ri</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
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
                  <label className="text-xs font-medium text-gray-700">Komisioni %</label>
                  <input
                    type="number"
                    placeholder="30"
                    min={0}
                    max={100}
                    className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Specialiteti</label>
                <input
                  placeholder="p.sh. Qethje & Mjekër"
                  className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="punonjes@biznesi.al"
                  className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
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
                Shto punonjësin
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
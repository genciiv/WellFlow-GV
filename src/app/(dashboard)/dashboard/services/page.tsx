'use client'

import { useState } from 'react'
import { Plus, Clock, Banknote, MoreHorizontal } from 'lucide-react'

const mockServices = [
  { id: '1', name: 'Qethje', category: 'Flokë', price: 700, duration_minutes: 30, is_active: true, bookings_month: 45 },
  { id: '2', name: 'Mjekër', category: 'Mjekër', price: 500, duration_minutes: 20, is_active: true, bookings_month: 32 },
  { id: '3', name: 'Qethje + Mjekër', category: 'Kombo', price: 1200, duration_minutes: 45, is_active: true, bookings_month: 28 },
  { id: '4', name: 'Larje + Stilim', category: 'Flokë', price: 1500, duration_minutes: 60, is_active: true, bookings_month: 12 },
  { id: '5', name: 'Ngjyrosje flokësh', category: 'Flokë', price: 3500, duration_minutes: 120, is_active: false, bookings_month: 0 },
]

const categories = ['Të gjitha', 'Flokë', 'Mjekër', 'Kombo']

export default function ServicesPage() {
  const [showModal, setShowModal] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Të gjitha')

  const filtered = activeCategory === 'Të gjitha'
    ? mockServices
    : mockServices.filter((s) => s.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Shërbimet</h1>
          <p className="text-sm text-gray-500 mt-0.5">{mockServices.filter(s => s.is_active).length} shërbime aktive</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Shërbim i ri
        </button>
      </div>

      {/* Category filter */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((service) => (
          <div
            key={service.id}
            className={`bg-white rounded-lg border p-5 transition-all ${
              service.is_active ? 'border-gray-100' : 'border-gray-100 opacity-60'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-medium text-gray-900 text-sm">{service.name}</p>
                <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                  {service.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${service.is_active ? 'bg-green-500' : 'bg-gray-300'}`} />
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-gray-50">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Banknote className="w-3.5 h-3.5 text-gray-400" />
                <span className="font-semibold text-gray-900">{service.price.toLocaleString()} L</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                {service.duration_minutes} min
              </div>
              <div className="ml-auto text-xs text-gray-400">
                {service.bookings_month} rezervime/muaj
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Service Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border border-gray-100 shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-900">Shërbim i ri</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ×
              </button>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Emri i shërbimit *</label>
                <input
                  placeholder="p.sh. Qethje + Mjekër"
                  className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700">Çmimi (L) *</label>
                  <input
                    type="number"
                    placeholder="700"
                    className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700">Kohëzgjatja (min) *</label>
                  <input
                    type="number"
                    placeholder="30"
                    className="h-9 px-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Kategoria</label>
                <select className="h-9 px-3 rounded-md border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors">
                  <option>Flokë</option>
                  <option>Mjekër</option>
                  <option>Kombo</option>
                  <option>Tjetër</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">Përshkrimi</label>
                <textarea
                  rows={2}
                  placeholder="Përshkrim i shkurtër i shërbimit..."
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
                Shto shërbimin
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
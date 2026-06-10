'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { StatusBadge } from '@/components/shared/StatusBadge'

const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

const appointments = [
  { id: '1', hour: '09:00', client: 'Ardit Berberi', service: 'Qethje + Mjekër', staff: 'Andi', status: 'confirmed', duration: 2 },
  { id: '2', hour: '11:00', client: 'Blerim Hoxha', service: 'Qethje', staff: 'Erjon', status: 'pending', duration: 1 },
  { id: '3', hour: '13:00', client: 'Fatjon Kelmendi', service: 'Mjekër', staff: 'Andi', status: 'completed', duration: 1 },
  { id: '4', hour: '15:00', client: 'Gent Marku', service: 'Qethje', staff: 'Erjon', status: 'confirmed', duration: 1 },
]

const days = ['Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht', 'Die']
const dates = [9, 10, 11, 12, 13, 14, 15]
const todayIndex = 1

export default function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState(1)

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Kalendari</h1>
          <p className="text-sm text-gray-500 mt-0.5">Qershor 2025</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors">
          <Plus className="w-4 h-4" />
          Takim i ri
        </button>
      </div>

      {/* Week navigation */}
      <div className="bg-white rounded-lg border border-gray-100 mb-5">
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <button className="p-1.5 hover:bg-gray-50 rounded-md transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-500" />
          </button>
          <span className="text-sm font-medium text-gray-900">9 — 15 Qershor 2025</span>
          <button className="p-1.5 hover:bg-gray-50 rounded-md transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 divide-x divide-gray-50">
          {days.map((day, i) => (
            <button
              key={day}
              onClick={() => setSelectedDay(i)}
              className={`py-3 text-center transition-colors ${
                selectedDay === i ? 'bg-blue-50' : 'hover:bg-gray-50'
              }`}
            >
              <p className="text-xs text-gray-400">{day}</p>
              <p className={`text-sm font-medium mt-1 w-7 h-7 rounded-full flex items-center justify-center mx-auto ${
                i === todayIndex
                  ? 'bg-blue-600 text-white'
                  : selectedDay === i
                  ? 'text-blue-700'
                  : 'text-gray-900'
              }`}>
                {dates[i]}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Time grid */}
      <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {hours.map((hour) => {
            const apt = appointments.find((a) => a.hour === hour)
            return (
              <div key={hour} className="flex min-h-[56px]">
                <div className="w-16 shrink-0 px-4 py-3.5 text-xs text-gray-400 font-mono border-r border-gray-50">
                  {hour}
                </div>
                <div className="flex-1 px-3 py-2">
                  {apt && (
                    <div className={`px-3 py-2 rounded-md border text-sm ${
                      apt.status === 'confirmed'
                        ? 'bg-blue-50 border-blue-200'
                        : apt.status === 'completed'
                        ? 'bg-green-50 border-green-200'
                        : apt.status === 'pending'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-gray-50 border-gray-200'
                    }`} style={{ minHeight: `${apt.duration * 56 - 16}px` }}>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-medium text-gray-900 text-xs">{apt.client}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{apt.service} · {apt.staff}</p>
                        </div>
                        <StatusBadge status={apt.status} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
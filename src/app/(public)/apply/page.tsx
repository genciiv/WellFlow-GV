'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

const cities = ['Tiranë', 'Vlorë', 'Fier', 'Durrës', 'Shkodër', 'Elbasan', 'Korçë', 'Berat']

const categories = [
  { value: 'berber', label: 'Berber' },
  { value: 'sallon_bukurie', label: 'Sallon Bukurie' },
  { value: 'studio_thonjsh', label: 'Studio Thonjsh' },
  { value: 'qender_estetike', label: 'Qendër Estetike' },
]

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    business_name: '',
    category: '',
    owner_name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    instagram: '',
    description: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Aplikimi u dërgua!</h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Ekipi ynë do ta shqyrtojë aplikimin brenda 24 orësh dhe do t'ju kontaktojë në email.
        </p>
        <p className="mt-4 text-xs text-gray-400">
          Statusi: <span className="font-medium text-amber-600">Në pritje</span>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900">Regjistro biznesin tënd</h1>
        <p className="mt-2 text-sm text-gray-500">
          Plotëso formularin. Brenda 24 orësh e aprovojmë dhe fillon periudha 30 ditë falas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Business info */}
        <div className="p-5 rounded-lg border border-gray-100 bg-white flex flex-col gap-4">
          <h2 className="text-sm font-medium text-gray-900">Informacioni i biznesit</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Emri i biznesit *</label>
              <input
                name="business_name"
                value={form.business_name}
                onChange={handleChange}
                required
                placeholder="p.sh. Style Cut Barber"
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Kategoria *</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors bg-white"
              >
                <option value="">Zgjidh kategorinë</option>
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Qyteti *</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors bg-white"
              >
                <option value="">Zgjidh qytetin</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Adresa *</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="p.sh. Rruga Sadik Zotaj, nr. 12"
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">Përshkrimi i biznesit</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Çfarë shërbimesh ofron biznesi juaj?"
              className="px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">Instagram (opsionale)</label>
            <input
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              placeholder="@biznesijuaj"
              className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
            />
          </div>
        </div>

        {/* Owner info */}
        <div className="p-5 rounded-lg border border-gray-100 bg-white flex flex-col gap-4">
          <h2 className="text-sm font-medium text-gray-900">Të dhënat e pronarit</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Emri i plotë *</label>
              <input
                name="owner_name"
                value={form.owner_name}
                onChange={handleChange}
                required
                placeholder="Emri Mbiemri"
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Numri i telefonit *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+355 6X XXX XXXX"
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-xs font-medium text-gray-700">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="email@biznesi.al"
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 text-sm font-medium disabled:opacity-60"
        >
          {loading ? 'Duke dërguar...' : 'Dërgo aplikimin'}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Duke dërguar, pranoni{' '}
          <a href="/terms" className="underline hover:text-gray-600">kushtet e shërbimit</a>{' '}
          dhe{' '}
          <a href="/privacy" className="underline hover:text-gray-600">politikën e privatësisë</a>.
        </p>
      </form>
    </div>
  )
}
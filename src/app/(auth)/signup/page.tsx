'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { CheckCircle2, Eye, EyeOff } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState<'form' | 'verify'>('form')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (form.password.length < 8) {
      setError('Fjalëkalimi duhet të ketë të paktën 8 karaktere.')
      setLoading(false)
      return
    }

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.full_name,
          role: 'client',
        },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setStep('verify')
    setLoading(false)
  }

  if (step === 'verify') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-sm w-full text-center">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Kontrolloni emailin</h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Kemi dërguar një link verifikimi te{' '}
            <span className="font-medium text-gray-700">{form.email}</span>.
            Klikoni linkun për të aktivizuar llogarinë.
          </p>
          <Link href="/login" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Kthehu te hyrja →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">

      {/* Left — Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">

          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">WellFlow</span>
          </Link>

          <h1 className="text-xl font-semibold text-gray-900 mb-1">Krijo llogari</h1>
          <p className="text-sm text-gray-500 mb-7">
            Filloni falas sot — 30 ditë pa pagesë
          </p>

          {error && (
            <div className="mb-5 px-3 py-2.5 rounded-md bg-red-50 border border-red-100 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Emri i plotë</label>
              <input
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                placeholder="Emri Mbiemri"
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Email</label>
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

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Fjalëkalimi</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Minimum 8 karaktere"
                  className="h-9 w-full px-3 pr-9 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md h-9 text-sm mt-1 disabled:opacity-60"
            >
              {loading ? 'Duke krijuar llogarinë...' : 'Krijo llogari'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Keni llogari?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Hyni këtu
            </Link>
          </p>

          <p className="mt-4 text-center text-xs text-gray-400">
            Duke u regjistruar, pranoni{' '}
            <Link href="/terms" className="underline">kushtet</Link> dhe{' '}
            <Link href="/privacy" className="underline">privatësinë</Link>.
          </p>
        </div>
      </div>

      {/* Right — Visual */}
      <div className="hidden lg:flex flex-1 bg-gray-50 border-l border-gray-100 items-center justify-center p-12">
        <div className="max-w-xs text-center">
          <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-5">
            <span className="text-white text-xl font-bold">W</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            30 ditë falas
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Pa kartë krediti. Anulim në çdo kohë. Konfigurimi bëhet në 10 minuta.
          </p>
        </div>
      </div>

    </div>
  )
}
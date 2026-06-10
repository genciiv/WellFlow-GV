'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Email ose fjalëkalimi është i gabuar.')
      setLoading(false)
      return
    }

    // Merr rolin e userit
    const { data: profile } = await supabase
      .from('users')
      .select('role')
      .eq('id', data.user.id)
      .single()

    if (profile?.role === 'platform_admin') {
      router.push('/admin')
    } else if (profile?.role === 'business_owner' || profile?.role === 'manager' || profile?.role === 'staff') {
      router.push('/dashboard')
    } else {
      router.push('/client')
    }
  }

  return (
    <div className="min-h-screen flex">

      {/* Left — Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">WellFlow</span>
          </Link>

          <h1 className="text-xl font-semibold text-gray-900 mb-1">Mirë se u kthyet</h1>
          <p className="text-sm text-gray-500 mb-7">Hyni në llogarinë tuaj</p>

          {error && (
            <div className="mb-5 px-3 py-2.5 rounded-md bg-red-50 border border-red-100 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email@biznesi.al"
                className="h-9 px-3 rounded-md border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">Fjalëkalimi</label>
                <Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-700">
                  Harruat fjalëkalimin?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
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
              {loading ? 'Duke hyrë...' : 'Hyr'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Nuk keni llogari?{' '}
            <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
              Regjistrohu
            </Link>
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
            Gjithçka në një vend
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Rezervime, klientë, staf, produkte dhe pagesa — menaxhoni biznesin tuaj të bukurisë me lehtësi.
          </p>
        </div>
      </div>

    </div>
  )
}
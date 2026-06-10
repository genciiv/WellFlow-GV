export type UserRole = 'platform_admin' | 'business_owner' | 'manager' | 'staff' | 'client'

export type BusinessStatus = 'pending' | 'approved' | 'rejected' | 'suspended'

export type BusinessCategory = 'berber' | 'sallon_bukurie' | 'studio_thonjsh' | 'qender_estetike'

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'

export type PaymentStatus = 'unpaid' | 'paid' | 'partial' | 'refunded' | 'cancelled'

export type PaymentMethod = 'cash' | 'card' | 'bank_transfer' | 'online'

export interface User {
  id: string
  full_name: string
  email: string
  role: UserRole
  created_at: string
}

export interface Business {
  id: string
  owner_id: string
  name: string
  slug: string
  category: BusinessCategory
  description: string
  phone: string
  email: string
  city: string
  address: string
  instagram?: string
  logo_url?: string
  status: BusinessStatus
  created_at: string
}
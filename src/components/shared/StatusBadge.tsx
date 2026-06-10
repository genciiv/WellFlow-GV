const variants: Record<string, string> = {
  pending:   'bg-amber-50  text-amber-700  border-amber-200',
  approved:  'bg-green-50  text-green-700  border-green-200',
  rejected:  'bg-red-50    text-red-600    border-red-200',
  suspended: 'bg-gray-100  text-gray-600   border-gray-200',
  active:    'bg-green-50  text-green-700  border-green-200',
  inactive:  'bg-gray-100  text-gray-500   border-gray-200',
  paid:      'bg-green-50  text-green-700  border-green-200',
  unpaid:    'bg-red-50    text-red-600    border-red-200',
  partial:   'bg-amber-50  text-amber-700  border-amber-200',
}

const labels: Record<string, string> = {
  pending:   'Në pritje',
  approved:  'Aprovuar',
  rejected:  'Refuzuar',
  suspended: 'Pezulluar',
  active:    'Aktiv',
  inactive:  'Joaktiv',
  paid:      'Paguar',
  unpaid:    'Papaguar',
  partial:   'Pjesërisht',
}

export function StatusBadge({ status }: { status: string }) {
  const style = variants[status] ?? 'bg-gray-100 text-gray-500 border-gray-200'
  const label = labels[status] ?? status

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${style}`}>
      {label}
    </span>
  )
}
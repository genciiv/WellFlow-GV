import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Minus } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '3,000',
    description: 'Për bizneset e vogla që po fillojnë.',
    highlight: false,
    features: [
      { text: '1 lokacion biznesi', included: true },
      { text: 'Deri 3 punonjës', included: true },
      { text: 'Rezervime bazë', included: true },
      { text: 'Menaxhim klientësh', included: true },
      { text: 'Shërbime të pakufizuara', included: true },
      { text: 'Pagesa manuale', included: true },
      { text: 'Produkte & magazinë', included: false },
      { text: 'Raporte të avancuara', included: false },
      { text: 'Komisionet e stafit', included: false },
      { text: 'Prioritet në marketplace', included: false },
    ],
  },
  {
    name: 'Business',
    price: '5,000',
    description: 'Për bizneset në rritje me ekip.',
    highlight: true,
    features: [
      { text: '1 lokacion biznesi', included: true },
      { text: 'Deri 10 punonjës', included: true },
      { text: 'Rezervime bazë', included: true },
      { text: 'Menaxhim klientësh', included: true },
      { text: 'Shërbime të pakufizuara', included: true },
      { text: 'Pagesa manuale', included: true },
      { text: 'Produkte & magazinë', included: true },
      { text: 'Raporte të avancuara', included: true },
      { text: 'Komisionet e stafit', included: true },
      { text: 'Prioritet në marketplace', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '9,000',
    description: 'Për bizneset profesionale me nevojat e plota.',
    highlight: false,
    features: [
      { text: '1 lokacion biznesi', included: true },
      { text: 'Punonjës të pakufizuar', included: true },
      { text: 'Rezervime bazë', included: true },
      { text: 'Menaxhim klientësh', included: true },
      { text: 'Shërbime të pakufizuara', included: true },
      { text: 'Pagesa manuale', included: true },
      { text: 'Produkte & magazinë', included: true },
      { text: 'Raporte të avancuara', included: true },
      { text: 'Komisionet e stafit', included: true },
      { text: 'Prioritet në marketplace', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'A mund ta anuloj abonimin në çdo kohë?',
    a: 'Po. Nuk ka kontratë afatgjatë. Anuloni kur të doni.',
  },
  {
    q: 'Si funksionon periudha falas 30 ditë?',
    a: 'Pas aprovimit të biznesit tuaj, keni 30 ditë falas me të gjitha funksionet e planit Business.',
  },
  {
    q: 'Si paguajnë klientët e mi?',
    a: 'Klientët nuk paguajnë asgjë për të rezervuar. WellFlow është falas për klientët fundorë.',
  },
  {
    q: 'A mund të kaloj nga një plan në tjetrin?',
    a: 'Po, në çdo kohë. Ndryshimi hyn në fuqi menjëherë.',
  },
]

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-semibold text-gray-900">Çmime të qarta, pa surpriza</h1>
        <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto">
          Zgjidh planin që i përshtatet biznesit tënd. 30 ditë falas pa kartë krediti.
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-5 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border p-6 relative ${
              plan.highlight
                ? 'border-blue-200 bg-blue-50/40 shadow-sm'
                : 'border-gray-100 bg-white'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Më i popullarit
                </span>
              </div>
            )}

            <div className="mb-5">
              <h2 className="font-semibold text-gray-900">{plan.name}</h2>
              <p className="text-xs text-gray-500 mt-1">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-400">lekë/muaj</span>
              </div>
            </div>

            <Button
              asChild
              className={`w-full rounded-md text-sm mb-6 ${
                plan.highlight
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
            >
              <Link href="/apply">Fillo falas</Link>
            </Button>

            <div className="flex flex-col gap-3">
              {plan.features.map((f) => (
                <div key={f.text} className="flex items-center gap-2.5">
                  {f.included ? (
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  ) : (
                    <Minus className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                  )}
                  <span className={`text-sm ${f.included ? 'text-gray-700' : 'text-gray-400'}`}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
          Pyetje të shpeshta
        </h2>
        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-5">
              <h3 className="font-medium text-gray-900 text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
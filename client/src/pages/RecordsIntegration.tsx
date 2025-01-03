import { useNavigate } from '@tanstack/react-router'
import FlexpaLink from '@flexpa/link'

export function RecordsIntegration() {
  const navigate = useNavigate()

  const open = () => {
    FlexpaLink.create({
      publishableKey: `${import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY}`,
      user: { externalId: crypto.randomUUID() },
      usage: 'MULTIPLE',
      onSuccess: async (publicToken: string) => {
        await fetch('/api/flexpa/exchange', { method: 'POST', body: JSON.stringify({ publicToken }) })
        navigate({ to: '/success' })
      }
    })

    FlexpaLink.open();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Connect Your Health Records</h2>
          <p className="text-gray-600 mt-1">
            Securely access your health records to provide better care recommendations
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
          </div>
          <p className="text-sm text-gray-600 mt-2">Step 3 of 4</p>
        </div>

        <div className="space-y-6">
          <div className="bg-primary-50 p-4 rounded-lg space-y-4">
            <h3 className="font-semibold text-primary-900">Why connect your records?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-primary-700">
                  Get personalized health recommendations based on your medical history
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-primary-700">
                  Ensure accurate and complete health information for better care
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <button
              onClick={open}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Launch Link
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Your data is encrypted and secure. We comply with HIPAA and other healthcare privacy regulations.
          </p>
        </div>
      </div>
    </div>
  )
} 
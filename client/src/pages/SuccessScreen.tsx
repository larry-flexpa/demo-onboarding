import { Link } from '@tanstack/react-router'

export function SuccessScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">All Set!</h2>
          <p className="text-gray-600 mt-1">
            Thank you for completing your health profile
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
          </div>
          <p className="text-sm text-gray-600 mt-2">Step 4 of 4</p>
        </div>

        <div className="space-y-6">
          <div className="bg-primary-50 p-4 rounded-lg space-y-4">
            <h3 className="font-semibold text-primary-900">What's Next?</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-primary-700">
                  Our team will review your health information
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-primary-700">
                  You'll receive a personalized care plan within 48 hours
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-primary-700">
                  A healthcare professional will reach out to schedule a consultation
                </span>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="inline-block text-primary-600 hover:text-primary-700 font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 
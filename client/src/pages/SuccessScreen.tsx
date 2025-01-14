import { Link } from '@tanstack/react-router'

export function SuccessScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Records Connected!</h2>
          <p className="text-gray-600 mt-1">
            Your medical records have been successfully connected
          </p>
        </div>

        {/* Sample Medical Data Display */}
        <div className="mb-8 text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Relevant Health Records to Your Injury Claim</h3>
          
          {/* Medical Events */}
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-blue-900 mb-3">Medical Events</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                <div>
                  <p className="text-sm font-medium text-blue-900">Motor Vehicle Accident</p>
                  <p className="text-xs text-blue-700">ICD-10: V43.52XA - Driver injured in collision with car</p>
                  <p className="text-xs text-blue-600">Provider: Dr. Sarah Chen (NPI: 1234567890)</p>
                </div>
                <span className="text-sm text-blue-600">March 15, 2024</span>
              </div>
              <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                <div>
                  <p className="text-sm font-medium text-blue-900">Emergency Room Visit</p>
                  <p className="text-xs text-blue-700">CPT: 99285 - Emergency dept visit, high severity</p>
                  <p className="text-xs text-blue-700">CPT: 73090 - X-ray examination of forearm</p>
                  <p className="text-xs text-blue-600">Provider: Dr. Michael Torres (NPI: 9876543210)</p>
                </div>
                <span className="text-sm text-blue-600">March 15, 2024</span>
              </div>
              <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                <div>
                  <p className="text-sm font-medium text-blue-900">Multiple Injury Diagnosis</p>
                  <p className="text-xs text-blue-700">ICD-10: S52.501A - Fracture of lower end of radius</p>
                  <p className="text-xs text-blue-700">ICD-10: S60.22XA - Contusion of left wrist</p>
                  <p className="text-xs text-blue-700">ICD-10: S43.401A - Sprain of right shoulder joint</p>
                  <p className="text-xs text-blue-600">Provider: Dr. Michael Torres (NPI: 9876543210)</p>
                </div>
                <span className="text-sm text-blue-600">March 15, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-900">Fracture Repair Surgery</p>
                  <p className="text-xs text-blue-700">CPT: 25606 - Percutaneous skeletal fixation of distal radius fracture</p>
                  <p className="text-xs text-blue-700">CPT: 01810 - Anesthesia for forearm/wrist surgery</p>
                  <p className="text-xs text-blue-600">Surgeon: Dr. Emily Rodriguez (NPI: 2468101214)</p>
                  <p className="text-xs text-blue-600">Anesthesiologist: Dr. James Wilson (NPI: 1357924680)</p>
                </div>
                <span className="text-sm text-blue-600">March 16, 2024</span>
              </div>
            </div>
          </div>

          {/* Medications */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-3">Medications</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-green-100 pb-2">
                <div>
                  <p className="text-sm font-medium text-green-900">Oxycodone-Acetaminophen</p>
                  <p className="text-xs text-green-700">NDC: 63304-479-70 - Pain management</p>
                  <p className="text-xs text-green-600">Prescribed by: Dr. Emily Rodriguez (NPI: 2468101214)</p>
                </div>
                <span className="text-sm text-green-600">Prescribed: March 16, 2024</span>
              </div>
              <div className="flex items-center justify-between border-b border-green-100 pb-2">
                <div>
                  <p className="text-sm font-medium text-green-900">Cefazolin</p>
                  <p className="text-xs text-green-700">NDC: 25021-0121-15 - Post-surgical infection prevention</p>
                  <p className="text-xs text-green-600">Prescribed by: Dr. Emily Rodriguez (NPI: 2468101214)</p>
                </div>
                <span className="text-sm text-green-600">Prescribed: March 16, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-900">Naproxen</p>
                  <p className="text-xs text-green-700">NDC: 00093-0148-01 - Anti-inflammatory</p>
                  <p className="text-xs text-green-600">Prescribed by: Dr. Emily Rodriguez (NPI: 2468101214)</p>
                </div>
                <span className="text-sm text-green-600">Prescribed: March 16, 2024</span>
              </div>
            </div>
          </div>
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
                  YoCierge will securely process and organize your medical records
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-primary-700">
                  Your records will be delivered to your legal team through our secure platform
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-primary-700">
                  Your law firm will be notified that your records are ready for review
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
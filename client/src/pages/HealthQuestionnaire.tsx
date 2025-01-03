import { useNavigate } from '@tanstack/react-router'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HealthQuestionnaire as HealthQuestionnaireType, healthQuestionnaireSchema } from '../types/schema'

const CHRONIC_CONDITIONS = [
  'Diabetes',
  'Hypertension',
  'Asthma',
  'Heart Disease',
  'Arthritis',
  'None of the above',
]

export function HealthQuestionnaire() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<HealthQuestionnaireType>({
    resolver: zodResolver(healthQuestionnaireSchema),
    defaultValues: {
      smoker: 'no',
      overallHealth: 3,
      chronicConditions: [],
    },
  })

  const onSubmit = async (data: HealthQuestionnaireType) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/onboarding/health-info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit health questionnaire')
      }

      navigate({ to: '/records' })
    } catch (error) {
      console.error('Failed to submit health questionnaire:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Health Questionnaire</h2>
          <p className="text-gray-600 mt-1">Please answer a few questions about your health</p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
          </div>
          <p className="text-sm text-gray-600 mt-2">Step 2 of 4</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Do you smoke?
            </label>
            <Controller
              name="smoker"
              control={control}
              render={({ field }) => (
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...field}
                      value="yes"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...field}
                      value="no"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              )}
            />
            {errors.smoker && (
              <p className="text-sm text-red-600">{errors.smoker.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              How would you rate your overall health? (1-5)
            </label>
            <Controller
              name="overallHealth"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="flex justify-between gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => onChange(rating)}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${value === rating
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }
                      `}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              )}
            />
            {errors.overallHealth && (
              <p className="text-sm text-red-600">{errors.overallHealth.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Do you have any chronic conditions?
            </label>
            <Controller
              name="chronicConditions"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="space-y-2">
                  {CHRONIC_CONDITIONS.map((condition) => (
                    <label key={condition} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={value.includes(condition)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            onChange([...value, condition])
                          } else {
                            onChange(value.filter((v) => v !== condition))
                          }
                        }}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2">{condition}</span>
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.chronicConditions && (
              <p className="text-sm text-red-600">{errors.chronicConditions.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  )
} 
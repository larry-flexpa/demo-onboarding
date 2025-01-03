import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonalInfo, personalInfoSchema } from '../types/schema'
import { FormInput } from '../components/forms/FormInput'

export function PersonalInfoForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
  })

  const onSubmit = async (data: PersonalInfo) => {
    try {
      console.log('Submitting form data:', data)
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/onboarding/personal-info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Server response:', errorData)
        throw new Error(errorData.error || 'Failed to submit personal info')
      }

      const result = await response.json()
      console.log('Server response:', result)

      navigate({ to: '/health-questionnaire' })
    } catch (error) {
      console.error('Submission error details:', error)
      throw error // Re-throw to let the form handler deal with it
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
          <p className="text-gray-600 mt-1">Please provide your basic details</p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 rounded-full bg-primary-500" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
          </div>
          <p className="text-sm text-gray-600 mt-2">Step 1 of 4</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            label="Full Name"
            type="text"
            {...register('fullName')}
            error={errors.fullName}
          />

          <FormInput
            label="Age"
            type="number"
            {...register('age', { valueAsNumber: true })}
            error={errors.age}
          />

          <FormInput
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email}
          />

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
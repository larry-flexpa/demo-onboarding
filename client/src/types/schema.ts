import { z } from 'zod'

export const personalInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  age: z.number().min(18, 'You must be at least 18 years old'),
  email: z.string().email('Invalid email address'),
})

export const healthQuestionnaireSchema = z.object({
  smoker: z.enum(['yes', 'no']),
  overallHealth: z.number().min(1).max(5),
  chronicConditions: z.array(z.string()),
})

export type PersonalInfo = z.infer<typeof personalInfoSchema>
export type HealthQuestionnaire = z.infer<typeof healthQuestionnaireSchema> 
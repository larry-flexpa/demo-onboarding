import express, { Request, Response } from 'express'

const router = express.Router()

interface PersonalInfoRequest {
  fullName: string
  age: number
  email: string
}

interface HealthInfoRequest {
  smoker: 'yes' | 'no'
  overallHealth: number
  chronicConditions: string[]
}

router.post('/personal-info', async (req: Request<{}, {}, PersonalInfoRequest>, res: Response) => {
  try {
    console.log('Received personal info request:', req.body)
    
    const { fullName, age, email } = req.body

    // Validate required fields
    if (!fullName || !age || !email) {
      console.error('Missing required fields:', { fullName, age, email })
      res.status(400).json({ error: 'Missing required fields' })
      return
    }

    // Validate age is a number and >= 18
    if (typeof age !== 'number' || age < 18) {
      console.error('Invalid age:', age)
      res.status(400).json({ error: 'Age must be a number and at least 18' })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email)
      res.status(400).json({ error: 'Invalid email format' })
      return
    }

    // In a production environment, you would:
    // 1. Validate the data more thoroughly
    // 2. Store the data in a database
    // 3. Associate it with a user session/account

    console.log('Successfully processed personal info')
    res.json({ success: true })
  } catch (error) {
    console.error('Personal info submission error:', error)
    res.status(500).json({ error: 'Failed to save personal information' })
  }
})

router.post('/health-info', async (req: Request<{}, {}, HealthInfoRequest>, res: Response) => {
  try {
    const { smoker, overallHealth, chronicConditions } = req.body

    // Validate required fields
    if (smoker === undefined || !overallHealth || !Array.isArray(chronicConditions)) {
      res.status(400).json({ error: 'Missing or invalid fields' })
      return
    }

    // In a production environment, you would:
    // 1. Validate the data more thoroughly
    // 2. Store the data in a database
    // 3. Associate it with a user session/account

    res.json({ success: true })
  } catch (error) {
    console.error('Health info submission error:', error)
    res.status(500).json({ error: 'Failed to save health information' })
  }
})

export default router 
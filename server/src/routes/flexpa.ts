import express from 'express'

const router = express.Router()

// Store access tokens in memory (use a proper database in production)
const accessTokens = new Map<string, string>()

router.post('/exchange', async (req, res) => {
  try {
    const { public_token } = req.body

    if (!public_token) {
      res.status(400).json({ error: 'Public token is required' })
      return
    }

    const response = await fetch('https://api.flexpa.com/link/exchange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        public_token,
        secret_key: process.env.FLEXPA_SECRET_KEY!
      })
    })

    if (!response.ok) {
      throw new Error('Failed to exchange token')
    }

    const { access_token } = await response.json() as { access_token: string }
    
    // In a production environment, store this securely in a database
    accessTokens.set('user_id', access_token) // Replace with actual user ID

    res.json({ success: true })
  } catch (error) {
    console.error('Flexpa token exchange error:', error)
    res.status(500).json({ error: 'Failed to exchange token' })
  }
})

router.get('/records', async (_req, res) => {
  try {
    // In production, get the user ID from the session and look up their token
    const accessToken = accessTokens.get('user_id')

    if (!accessToken) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const response = await fetch('https://api.flexpa.com/fhir/Patient/$everything', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch records')
    }

    const records = await response.json()
    res.json(records)
  } catch (error) {
    console.error('Failed to fetch health records:', error)
    res.status(500).json({ error: 'Failed to fetch health records' })
  }
})

export default router 
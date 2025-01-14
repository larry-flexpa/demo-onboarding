import express from 'express';

const router = express.Router();

const accessTokens = new Map<string, string>();

router.post('/exchange', async (req, res) => {
    try {
        const { publicToken } = req.body;

        if (!publicToken) {
            res.status(400).send('Missing publicToken');
            return
        }

        const response = await fetch('https://api.flexpa.com/link/exchange', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token: publicToken, secret_key: process.env.FLEXPA_SECRET_KEY }),
        })

        if (!response.ok) {
            throw new Error('Failed to exchange public token');
        }

        const { access_token } = await response.json() as { access_token: string };

        accessTokens.set('token', access_token);

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to exchange public token');
    }
})

router.get('/records', async(req, res) => {
    try {
        const accessToken = accessTokens.get('token');

        if(!accessToken) {
            res.status(400).send('Missing access token');
            return;
        }

        const response = await fetch("https://api.flexpa.com/fhir/Patient/$PATIENT_ID/$everything", {
            headers: {
              "content-type": "application/json",
              "authorization": `Bearer ${accessToken}`,
            },
          });

        if (!response.ok) {
            throw new Error('Failed to fetch records');
        }

        const records = await response.json();
        res.send(records);
    } catch (error) {
        console.error('Failed to fetch health records', error);
        res.status(500).json({error: 'Failed to fetch health records'});
    }
})

export default router;
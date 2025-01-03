# HealthConnect Onboarding Application

A modern healthcare onboarding web application built with React, TypeScript, and Flexpa integration.

## Features

- Multi-step onboarding process
- Personal information collection
- Health questionnaire
- Secure health records access via Flexpa
- Modern, responsive UI with Tailwind CSS
- Type-safe forms with Zod validation
- Type-safe routing with TanStack Router

## Prerequisites

- Node.js 18+ (required for native fetch API)
- npm or yarn
- Flexpa API credentials

## Project Structure

```
project-root/
├── client/          # Frontend React application
├── server/          # Backend Express server
└── README.md
```

## Quick Start

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Set up environment variables:
   ```bash
   # Server environment variables
   cd server
   cp .env.example .env
   # Edit .env and add your FLEXPA_SECRET_KEY

   # Client environment variables
   cd ../client
   cp .env.example .env
   # Edit .env and add your FLEXPA_PUBLIC_KEY
   ```

3. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

4. Start the development servers:

   In one terminal (for the backend):
   ```bash
   cd server
   npm run dev
   # Server will run on http://localhost:3000
   ```

   In another terminal (for the frontend):
   ```bash
   cd client
   npm run dev
   # Client will run on http://localhost:5173
   ```

## Production Build

To build for production:

1. Build the client:
   ```bash
   cd client
   npm run build
   # Output will be in dist/ directory
   ```

2. Build the server:
   ```bash
   cd server
   npm run build
   # Output will be in dist/ directory
   ```

3. Run in production:
   ```bash
   cd server
   npm start
   ```

## API Endpoints

### Server Endpoints

- `GET /health` - Health check endpoint
- `POST /api/flexpa/exchange` - Exchange Flexpa public token
- `GET /api/flexpa/records` - Fetch patient records
- `POST /api/onboarding/personal-info` - Submit personal information
- `POST /api/onboarding/health-info` - Submit health questionnaire

## Development

- Frontend development server includes hot reloading
- Backend server auto-restarts on file changes
- TypeScript compilation is handled automatically
- Tailwind CSS processes styles in real-time

## Troubleshooting

Common issues:

1. **Port conflicts**: If ports 3000 or 5173 are in use, you can modify them:
   - Server: Change PORT in .env file
   - Client: Modify vite.config.ts

2. **TypeScript errors**: Run type checking:
   ```bash
   # In client directory
   npm run typecheck

   # In server directory
   npm run build
   ```

3. **Environment variables**: Ensure all required variables are set in both .env files

## Security Considerations

- All API endpoints should be properly secured in production
- Health data should be encrypted at rest
- Use secure session management
- Implement proper authentication
- Follow HIPAA compliance guidelines

## License

MIT 
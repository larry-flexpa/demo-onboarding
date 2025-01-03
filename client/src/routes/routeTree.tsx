import { createRootRoute, createRoute } from '@tanstack/react-router'
import { WelcomeScreen } from '../pages/WelcomeScreen'
import { PersonalInfoForm } from '../pages/PersonalInfoForm'
import { HealthQuestionnaire } from '../pages/HealthQuestionnaire'
import { RecordsIntegration } from '../pages/RecordsIntegration'
import { SuccessScreen } from '../pages/SuccessScreen'

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: WelcomeScreen,
})

const personalInfoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/personal-info',
  component: PersonalInfoForm,
})

const healthQuestionnaireRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/health-questionnaire',
  component: HealthQuestionnaire,
})

const recordsIntegrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/records',
  component: RecordsIntegration,
})

const successRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/success',
  component: SuccessScreen,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  personalInfoRoute,
  healthQuestionnaireRoute,
  recordsIntegrationRoute,
  successRoute,
]) 
import { createRootRoute, createRoute } from '@tanstack/react-router'
import { WelcomeScreen } from '../pages/WelcomeScreen'
import { PersonalInfoForm } from '../pages/PersonalInfoForm'
import { HealthQuestionnaire } from '../pages/HealthQuestionnaire'
import { FlexpaIntegration } from '../pages/FlexpaIntegration'
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

const flexpaIntegrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/connect-health-records',
  component: FlexpaIntegration,
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
  flexpaIntegrationRoute,
  successRoute,
]) 
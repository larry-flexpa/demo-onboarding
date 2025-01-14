import { createRootRoute, createRoute } from '@tanstack/react-router'
import { WelcomeScreen } from '../pages/WelcomeScreen'
import { RecordsIntegration } from '../pages/RecordsIntegration'
import { SuccessScreen } from '../pages/SuccessScreen'

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: WelcomeScreen,
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
  recordsIntegrationRoute,
  successRoute,
]) 
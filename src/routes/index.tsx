import { createBrowserRouter } from 'react-router-dom'
import { clientRoutes } from './clientRoutes'
import { adminRoutes } from './adminRoutes'

export const router = createBrowserRouter([
  clientRoutes,
  adminRoutes,
]) 
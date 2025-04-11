import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import AdminLayout from '@/components/layout/AdminLayout'
import HomePage from '@/pages/client/HomePage'
import ErrorPage from '@/pages/error/ErrorPage'
import AdminDashboard from '@/pages/admin/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Thêm các route client khác ở đây
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      // Thêm các route admin khác ở đây
    ],
  },
]) 
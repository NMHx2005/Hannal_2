import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/components/layout/AdminLayout';
import AdminDashboard from '@/pages/admin/Dashboard';
import ErrorPage from '@/pages/error/ErrorPage';

export const adminRoutes: RouteObject = {
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
}; 
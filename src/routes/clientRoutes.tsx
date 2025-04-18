import { RouteObject } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/client/HomePage';
import Contact from '@/pages/client/Contact/Contact';
import About from '@/pages/client/About/About';
import IndustrialParkInformation from '@/pages/client/IndustrialParkInformation/IndustrialParkInformation';
import News from '@/pages/client/News/News';
import ErrorPage from '@/pages/error/ErrorPage';
import FactoryConsignment from '@/pages/client/FactoryConsignment/FactoryConsignment';
import Services from '@/pages/client/Services/services';
import IndustrialLand from '@/pages/client/IndustrialLand/IndustrialLand';
import Warehouse from '@/pages/client/Warehouse/Warehouse';
import WarehouseSale from '@/pages/client/WarehouseSale/WarehouseSale';
import Category from '@/components/client/Category/Category';
import CategoryDetail from '@/components/client/Category/CategoryDetail';
import DetailPost from '@/components/client/Detail/DetailPost';

export const clientRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'lien-he',
      element: <Contact />,
    },
    {
      path: 'gioi-thieu',
      element: <About />,
    },
    {
      path: 'thong-tin-kcn',
      element: <IndustrialParkInformation />,
    },
    {
      path: 'tin-tuc',
      element: <News />,
    },
    {
      path: 'ky-gui',
      element: <FactoryConsignment />,
    },
    {
      path: 'dat-cong-nghiep',
      element: <IndustrialLand />,
    },
    {
      path: 'kho-xuong-cho-thue',
      element: <Warehouse />,
    },
    {
      path: 'kho-xuong-ban',
      element: <WarehouseSale />,
    },
    {
      path: 'dich-vu-khac/thiet-ke',
      element: <Category />,
    },
    {
      path: 'dich-vu-khac/thiet-ke/:id',
      element: <CategoryDetail />,
    },
    {
      path: 'dich-vu-khac',
      element: <Services />,
    },
    {
      path: '/kho-xuong-ban/:id',
      element: <DetailPost />,
    },
    {
      path: 'tuyen-dung',
      element: <About />,
    },
    {
      path: 'chinh-sach-hop-tac',
      element: <About />,
    },
  ],
}; 
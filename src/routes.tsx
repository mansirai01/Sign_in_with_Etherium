import { Navigate, useRoutes } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/Dashboard';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/app',
    //   element: <DashboardLayout />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
      ],
    },
    {
      path: '/',
    //   element: <PlainLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

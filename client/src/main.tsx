import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import './index.css'
import NewTiresPage from './pages/NewTiresPage';
import StoredTiresPage from './pages/StoredTiresPage';

const router = createBrowserRouter([{
  path: '/',
  element: <MainPage />,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/profile',
      element: <ProfilePage />
    },
    {
      path: '/dashboard',
      element: <DashboardPage />
    },
    {
      path: '/newtires',
      element: <NewTiresPage />
    },
    {
      path: '/storedtires',
      element: <StoredTiresPage />
    }
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

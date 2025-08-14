import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/profile',
      element: <ProfilePage />
    },
    {
      path: '/dashboard',
      element: <DashboardPage />
    }
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

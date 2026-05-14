import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import HomePage from './pages/HomePage.tsx'
import DesignSystem from './pages/DesignSystem.tsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/design-system', element: <DesignSystem /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'

import AboutPage from './pages/About/AboutPage.tsx'
import DesignSystem from './pages/DesignSystem/DesignSystem.tsx'
import ProductPage from './pages/ProductPage.tsx'
import InventoryPage from './pages/Inventory/InventoryPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/build-a-powerful-lizard" replace /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/build-a-powerful-lizard', element: <InventoryPage /> },
  { path: '/inventory', element: <Navigate to="/build-a-powerful-lizard" replace /> },
  { path: '/design-system', element: <DesignSystem /> },
  { path: '/products/:productId', element: <ProductPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

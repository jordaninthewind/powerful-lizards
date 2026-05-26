import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import HomePage from './pages/Home/HomePage.tsx'
import DesignSystem from './pages/DesignSystem.tsx'
import ProductPage from './pages/ProductPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/design-system', element: <DesignSystem /> },
  { path: '/products/:productId', element: <ProductPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

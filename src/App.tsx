import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import AboutPage from './pages/About/AboutPage.tsx';
import DesignSystem from './pages/DesignSystem/DesignSystem.tsx';
import InventoryPage from './pages/Inventory/InventoryPage.tsx';
import ProductPage from './pages/ProductPage.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/build-a-powerful-lizard" replace /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/build-a-powerful-lizard', element: <InventoryPage /> },
  { path: '/inventory', element: <Navigate to="/build-a-powerful-lizard" replace /> },
  { path: '/design-system', element: <DesignSystem /> },
  { path: '/products/:productId', element: <ProductPage /> },
])

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
    <Analytics />
  </Suspense>
);

export default App;
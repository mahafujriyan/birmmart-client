import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import CartProvider from './Context/CartProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
  <AuthProvider>
<CartProvider>
      <RouterProvider router={router} />
</CartProvider>
    <Toaster/>
</AuthProvider>
</HelmetProvider>
  </StrictMode>,
)

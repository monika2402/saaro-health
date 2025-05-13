import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Contact from './Components/Contact.jsx'
import NotFound from './Components/NotFound.jsx'
import Pricing from './Components/Pricing'
import About from './Components/About'
import Terms from './Components/Terms'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/terms",
        element: <Terms />
      }
    ],
    errorElement: <NotFound />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

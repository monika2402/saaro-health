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
import Privacy from './Components/Privacy'
import SaaroHealthDoctorsPage from './Components/SaaroHealthDoctorsPage'
import SaaroHealthNeurologistPage from './Components/SaaroHealthNeurologistPage'
import SaaroHealthPediatricianPage from './Components/SaaroHealthPediatricianPage'
import SaaroHealthCardiologistPage from './Components/SaaroHealthCardiologistPage'
import ClinicPage from './Components/ClinicPage'
import HospitalPage from './Components/HospitalPage'
import PharmacyPage from './Components/PharmacyPage'

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
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/neurologists",
        element: <SaaroHealthNeurologistPage />
      },
      {
        path: "/pediatrician",
        element: <SaaroHealthPediatricianPage />
      },
      {
        path: "/cardiologist",
        element: <SaaroHealthCardiologistPage />
      },
      {
        path: "/for-doctors",
        element: <SaaroHealthDoctorsPage />
      },
      {
        path: "/for-clinic",
        element: <ClinicPage />
      },
      {
        path: "/for-hospital",
        element: <HospitalPage />
      },
      {
        path: "/for-pharmacy",
        element: <PharmacyPage />
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

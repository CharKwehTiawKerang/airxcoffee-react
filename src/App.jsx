import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.scss'

import { Home, AboutUs, Contact } from './pages'
import { Navbar, Footer } from './components'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      // more path define here
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

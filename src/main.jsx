import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import './styles/staticindex.css'
import MainLayout from './layouts/MainLayout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/portfolio",
      //   element: <PortFolio />,
      // },
      // {
      //   path: "/aboutus",
      //   element: <AboutUs />,
      // },
      // {
      //   path: "/contactus",
      //   element: <Contact />,
      // },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import 'typeface-roboto'

const router = createBrowserRouter([
  {
    path: '/zaw-builder/:strike?/:grip?/:link?',
    element: <App />,
    errorElement: <div>Unvalid URL!</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

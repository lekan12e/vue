import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';
import StudentResultsTable from './Pages/Results.jsx';
import { Profile } from './Pages/Profile.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>404 not found return to <a className=' hover:text-blue-700' href="/">home</a></h1>,
      children: [
        {
          path:"dashboard",
          element: <Dashboard />
        },
        {
          path:"/results",
          element: <StudentResultsTable />
        },
        {
          path:"/profile",
          element: <Profile />
        },
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)

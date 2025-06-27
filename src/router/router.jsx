import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'
import Products from '../pages/Products'
import NotFound from '../pages/NotFound'
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "products",
                element: <Products/>
            }
        ],
    },
    {
        path : "*",
        element: <NotFound/>
    }
])

export default router
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'
import Products from '../pages/Products'
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
        ]
    }
])

export default router
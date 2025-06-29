import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'
import Products from '../pages/Products'
import NotFound from '../pages/NotFound'
import LoginAuth from '../pages/Auth/Login/LoginAuth'
import Checkout from '../pages/Checkout'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
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
            },
            {
                path: "product/:id",
                element : <ProductDetail/>
            },
            {
                path: "checkout",
                element : <Checkout/>
            },
            {
                path : "cart",
                element : <Cart/>
            }
        ],
    },
    {
        path : "*",
        element: <NotFound/>
    },
    {
        path: "/login",
        element: <LoginAuth/>
    }
])

export default router
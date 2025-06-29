import { apiInstance } from "../api/axios"

export const getProducts = async () => {
    const res = await apiInstance.get('/products');
    return res.data
}

export const getDetailProduct = async() => {
    const res = await apiInstance.get('/products/1');
    return res.data
}
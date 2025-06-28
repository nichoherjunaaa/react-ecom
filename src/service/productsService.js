import { apiInstance } from "../api/axios"

export const getProducts = async () => {
    const res = await apiInstance.get('/products');
    return res.data
}
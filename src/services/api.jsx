import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://44.194.189.179:8020/technicalTest/v1',
    timeout: 5000
})

export const addProduct = async (data) => {
    try {
        return await apiClient.post('/product/products', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getProducts = async () => {
    try {
        return await apiClient.get('/product/products')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}
export const deleteProduct = async (id) => {
    try {
        const response = await apiClient.delete(`/product/products/${id}`);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

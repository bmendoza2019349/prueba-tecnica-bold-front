import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getProducts as getProductsRequest } from "../../services/api";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getProducts = async () => {
        try {
            const productsData = await getProductsRequest();
            if (productsData.error) {
                throw new Error(productsData.e?.response?.data || 'Ocurrió un error al leer los productos');
            }

            setProducts(productsData.data.products || []);
        } catch (error) {
            console.error('Error fetching products', error);
            toast.error(error.message);
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        getProducts,
        isFetching: !Boolean(products),
        allProducts: products?.products
    };
};
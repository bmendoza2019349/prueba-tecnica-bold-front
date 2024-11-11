import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct as addProductRequest } from "../../services";
import toast from "react-hot-toast";

export const useAddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const addProduct = async (name, description, category, brand, price, inventory, image, availability) => {
        setIsLoading(true);
        try {
            const response = await addProductRequest({
                name,
                description,
                category,
                brand,
                price,
                inventory,
                image,
                availability
            });

            setIsLoading(false);

            if (response.error) {
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar el producto, intenta de nuevo');
            }

            toast.success('Producto agregado correctamente');
            navigate('/productos');
            
        } catch (error) {
            setIsLoading(false);
            console.error('Add product failed', error);
            toast.error('Ocurrió un error al agregar el producto, intenta de nuevo');
        }
    };

    return {
        addProduct,
        isLoading
    };
};
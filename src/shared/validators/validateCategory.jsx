export const validateCategory = (category) => {
    return typeof category === 'string' && category.length >= 3 && category.length <= 30;
};
export const categoryValidateMessage = 'La categoría debe tener entre 3 y 30 caracteres';
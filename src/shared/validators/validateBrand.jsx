export const validateBrand = (brand) => {
    return typeof brand === 'string' && brand.length >= 2 && brand.length <= 30;
};
export const brandValidateMessage = 'La marca debe tener entre 2 y 30 caracteres';
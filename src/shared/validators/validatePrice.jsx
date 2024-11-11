export const validatePrice = (price) => {
    const priceValue = parseFloat(price);
    return !isNaN(priceValue) && priceValue > 0;
};
export const priceValidateMessage = 'El precio debe ser un número mayor que 0';
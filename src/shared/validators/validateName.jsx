export const validateName = (name) => {
    return typeof name === 'string' && name.length >= 3 && name.length <= 50;
};
export const nameValidateMessage = 'El nombre debe tener entre 3 y 50 caracteres';
export const validateDescription = (description) => {
    return typeof description === 'string' && description.length >= 10 && description.length <= 200;
};
export const descriptionValidateMessage = 'La descripción debe de tener entre 10 y 200 caracteres';
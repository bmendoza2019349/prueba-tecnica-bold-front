export const validateImage = (image) => {
    const urlPattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    return typeof image === 'string' && urlPattern.test(image);
};
export const imageValidateMessage = 'La imagen debe ser una URL válida';
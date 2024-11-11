export const validateAvailability = (availability) => {
    const allowedStatuses = ["DISPONIBLE", "EN CAMINO", "AGOTADO"];
    return allowedStatuses.includes(availability);
};
export const availabilityValidateMessage = 'La disponibilidad debe ser "DISPONIBLE", "EN CAMINO" o "AGOTADO"';
export const validateInventory = (inventory) => {
    const inventoryValue = parseInt(inventory, 10);
    return Number.isInteger(inventoryValue) && inventoryValue > 0;
};
export const inventoryValidateMessage = 'El inventario debe ser un número entero mayor o igual a 0';
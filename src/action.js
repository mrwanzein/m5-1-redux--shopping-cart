export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const deleteItem = (id) => ({
  type: "REMOVE_ITEM",
  id
});

export const updateQuantity = (id, quantity) => ({
  type: "UPDATE_QUANTITY",
  id,
  quantity
});

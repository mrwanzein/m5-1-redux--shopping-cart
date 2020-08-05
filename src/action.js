export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const deleteItem = (id) => ({
  type: "REMOVE_ITEM",
  id
});

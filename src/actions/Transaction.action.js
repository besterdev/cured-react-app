export const setStateToInsert = (data) => ({
  type: "INSERT",
  payload: data,
});

export const setStateToUpdate = (data) => ({
  type: "UPDATE",
  payload: data,
});

export const setStateToDelete = (index) => ({
  type: "DELETE",
  payload: index,
});

export const setStateToEdit = (index) => ({
  type: "UPDATE-INDEX",
  payload: index,
});

export const setStateClear = () => ({
  type: "CLEAR",
});

export const addNewContact = ({ name, number, id }) => {
  return {
    type: 'ADD_CONTACT',
    payload: {
      id,
      name,
      number
    }
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: { id },
  };
};

export const setFilter = (filterValue) => {
  return {
    type: "SET_FILTER",
    payload: filterValue,
  };
};
export const addNew = ({ name, number }) => {
  return {
    type: "ADD",
    payload: {
      name,
      number,
    },
  };
};
export const remove = (number) => {
  return {
    type: "REMOVE",
    payload: {
      number,
    },
  };
};

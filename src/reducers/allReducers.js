export const operation = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.number !== action.payload.number);
    case "UPDATE":
      const index = state.findIndex(
        (item) => item.name === action.payload.name
      );
      state[index].number = action.payload.number;
      return state;
    default:
      return state;
  }
};

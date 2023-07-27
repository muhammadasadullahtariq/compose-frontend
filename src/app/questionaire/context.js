import { createContext } from "react";

const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { dataReducer, DataContext };

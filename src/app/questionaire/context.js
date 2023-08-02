import { createContext } from "react";

const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, ...action.payload };
    case "UPDATE_QUESTION_NUMBER":
      return { ...state, questionNumber: action.payload };
    default:
      return state;
  }
};

export { dataReducer, DataContext };

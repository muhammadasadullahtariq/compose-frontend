import React from "react";
import { DataContext } from "@/app/questionaire/context";

const Question5 = () => {
   const handleButtonClick = () => {
     dispatch({ type: "UPDATE_DATA", payload: { purposeOfTrip: "someValue" } });
   };

  return (
    <textarea
      style={{
        width: "100%",
        border: "none",
        borderRadius: "20px",
        resize: "none",
        padding: "20px",
        outline: "none",
        height: "100%",
      }}
      rows={15}
    ></textarea>
  );
};

export default Question5;

import "./index.css";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Image from "next/image";
import { useState } from "react";

const Counter = ({ value, handleSetValue }) => {
  const handleValue = (opr) => {
    if (opr === "+" && value < 7) {
      handleSetValue(value + 1);
    } else if (opr === "-" && value > 3) {
      handleSetValue(value - 1);
    }
  };
  const handleBlur = () => {
    if (value < 3) handleSetValue(3);
    if (value > 7) handleSetValue(7);
  };
  return (
    <div className="Counter_Main">
      <input
        type="number"
        value={value}
        onChange={(event) => handleSetValue(event.target.value)}
        onBlur={() => handleBlur()}
      />
      <div className="Counter_Counter">
        <Image onClick={() => handleValue("-")} src={plus} />
        <p>{value ? value : 0}</p>
        <Image onClick={() => handleValue("+")} src={minus} />
      </div>
    </div>
  );
};

export default Counter;

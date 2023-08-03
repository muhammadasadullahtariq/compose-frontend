import "./index.css";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Image from "next/image";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(3);
  const handleValue = (opr) => {
    if (opr === "+" && value < 7) {
      setValue((curr) => curr + 1);
    } else if (opr === "-" && value > 3) {
      setValue((curr) => curr - 1);
    }
  };
  const handleBlur = () => {
    if (value < 3) setValue(3);
    if (value > 7) setValue(7);
  };
  return (
    <div className="Counter_Main">
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
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

import { useRef, useState } from "react";
import "./index.css";
import DatePicker from "react-datepicker";

export const Datepicker = ({ date1, date2, handleDate }) => {
  return (
    <div className="Datepicker_Main">
      <input
        value={date1}
        onChange={(event) => handleDate(1, event.target.value)}
        className="Datepicker_First"
        type="date"
      />
      <input
        value={date2}
        onChange={(event) => handleDate(2, event.target.value)}
        className="Datepicker_Second"
        type="date"
      />
    </div>
  );
};

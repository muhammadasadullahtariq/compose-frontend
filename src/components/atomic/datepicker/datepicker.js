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
        min={date1}
        //set max to date1 + 7 days
        max={
          date1 &&
          new Date(new Date(date1).getTime() + 7 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0]
        }
        onChange={(event) => handleDate(2, event.target.value)}
        className="Datepicker_Second"
        type="date"
      />
    </div>
  );
};

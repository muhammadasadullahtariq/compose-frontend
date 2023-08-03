import { useRef, useState } from "react";
import "./index.css";
import DatePicker from "react-datepicker";

export const Datepicker = () => {
  return (
    <div className="Datepicker_Main">
      <input className="Datepicker_First" type="date" />
      <input className="Datepicker_Second" type="date" />
    </div>
  );
};

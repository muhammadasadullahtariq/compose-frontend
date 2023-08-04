import "./index.css";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Image from "next/image";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

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
    <Box
      className="Counter_Main"
      sx={{
        width: {
          md: "80%",
        },
      }}
    >
      <Box>
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
      </Box>

      <Typography
        sx={{
          color: "#9496A1",
          fontFamily: "Raleway",
          fontSize: "10px",
          marginTop: "48px",
          textAlign: "right",
        }}
      >
        7 days maximum
      </Typography>
    </Box>
  );
};

export default Counter;

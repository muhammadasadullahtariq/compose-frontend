import "./index.css";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Counter = ({ formData, value, handleSetValue }) => {
  const handleValue = (opr) => {
    if (opr === "+" && value < 14) {
      handleSetValue(parseInt(value) + 1);
    } else if (opr === "-" && value > 1) {
      handleSetValue(parseInt(value) - 1);
    }
  };

  return (
    <Box
      className="Counter_Main"
      sx={{
        width: "80%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          background: "#fff",
        }}
      >
        <input
          type="number"
          disabled
          value={value}
          onChange={(event) => handleSetValue(event.target.value)}
          min={1}
          max={14}
        />
        <div className="Counter_Counter">
          <Image
            onClick={() => handleValue("-")}
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              borderRadius: "50%",
            }}
            src={plus}
          />
          <p>{value ? value : 0}</p>
          <Image
            onClick={() => handleValue("+")}
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              borderRadius: "50%",
            }}
            src={minus}
          />
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
        14 days maximum
      </Typography>
    </Box>
  );
};

export default Counter;

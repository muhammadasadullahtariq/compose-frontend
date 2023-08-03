import React, { useState, useEffect, useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { questions7 } from "@/constants/questions";
import "./styles.css";
import { DataContext } from "@/app/questionaire/context";
import { fuel } from "@/constants/fuel";
import * as COLORS from "@/constants/colors";

const Question7 = () => {
  const [selected, setSelected] = useState("");
  const handleButtonClick = () => {
    dispatch({ type: "UPDATE_DATA", payload: { purposeOfTrip: "someValue" } });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        padding: "5px",
      }}
    >
      {fuel.map((el) => (
        <Image
          key={el.name}
          onClick={() => setSelected(el.name)}
          style={{
            //border shadow
            boxShadow:
              selected == el.name ? `0 0 0 3px ${COLORS.primary}` : "none",
            borderRadius: "20px",
            padding: "0px",
          }}
          src={el.image}
        />
      ))}
    </Box>
  );
};

export default Question7;

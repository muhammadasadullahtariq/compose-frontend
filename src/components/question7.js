import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { questions7 } from "@/constants/questions";
import "./styles.css";
import { DataContext } from "@/app/questionaire/context";
import { fuel } from "@/constants/fuel";

const Question7 = () => {
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
      }}
    >
      {fuel.map((el) => (
        <Image src={el.image} />
      ))}
    </Box>
  );
};

export default Question7;

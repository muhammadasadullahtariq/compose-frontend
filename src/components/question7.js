import React, { useState, useEffect, useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { questions7 } from "@/constants/questions";
import "./styles.css";
import { DataContext } from "@/app/questionaire/context";
import { fuel } from "@/constants/fuel";
import * as COLORS from "@/constants/colors";

const Question7 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [selected, setSelected] = useState("");
  const handleButtonClick = (value) => {
    console.log(value);
    setSelected(value);
    dispatch({ type: "UPDATE_DATA", payload: { food: value } });
    //dispatch({ type: "UPDATE_DATA", payload: { food: value } });
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
          onClick={handleButtonClick.bind(this, el.name)}
          style={{
            //border shadow
            cursor: "pointer",
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

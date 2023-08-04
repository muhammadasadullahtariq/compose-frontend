import React, { useState, useEffect, useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.css";
import { DataContext } from "@/app/questionaire/context";
import { fuel } from "@/constants/fuel";
import * as COLORS from "@/constants/colors";

const Question7 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [selected, setSelected] = useState("");
  const handleButtonClick = (value) => {
    setSelected(value);
    dispatch({ type: "UPDATE_DATA", payload: { food: value } });
    //dispatch({ type: "UPDATE_DATA", payload: { food: value } });
  };
  useEffect(() => {
    setSelected(data.food || "");
  }, []);
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        padding: "5px",
        justifyContent: "flex-start",
      }}
    >
      {fuel.map((el, index) => (
        <Grid item key={el.name}>
          <Box
            onClick={handleButtonClick.bind(this, el.name)}
            sx={{
              width: "120px",
              height: "123px",
              borderRadius: "10px",
              background:
                index % 2 === 0
                  ? COLORS.questionBlockBlueColor
                  : COLORS.questionBlockGrayColor,
              padding: "15px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              border:
                selected != el.name
                  ? `2px solid transparent`
                  : `2px solid ${COLORS.primary}`,
            }}
          >
            <Typography
              variant="p"
              sx={{ fontSize: "14px", fontWeight: "600" }}
            >
              {el.name}
            </Typography>
            <Image src={el.image} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question7;

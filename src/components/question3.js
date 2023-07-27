import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions2 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";


const Question3 = () => {
   const handleButtonClick = () => {
     dispatch({ type: "UPDATE_DATA", payload: { purposeOfTrip: "someValue" } });
   };

  return (
    <Box
      sx={{
        width: {sm: '100%', md: '100%', lg: "80%"},
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        {questions2.map((question, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
              <Box
                sx={{
                  height: "170px",
                  padding: "15px",
                  borderRadius: "10px",
                  backgroundColor:
                    index % 2 == 0
                      ? COLORS.questionBlockBlueColor
                      : COLORS.questionBlockGrayColor,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Raleway",
                    maxWidth: "394px",
                    textAlign: "left",
                    width: "128px",
                  }}
                >
                  {question.heading}
                </Typography>

                <Image
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderBottomRadius: 10,
                  }}
                  src={question.image}
                  alt="Picture of the author"
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Question3;

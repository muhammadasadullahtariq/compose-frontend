import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions2 } from "@/constants/questions";


const Question2 = () => {
  

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Grid container sx={{ gap: "20px" }}>
        {questions2.map((question, index) => {
          return (
            <Grid item xs={12} sm={8} md={3} lg={3} key={index}>
              <Box
                sx={{
                  width: "217px",
                  height: "168px",
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

export default Question2;

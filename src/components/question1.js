import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions1 } from "@/constants/questions";

const Question1 = () => {
  return (
    <Box
      sx={{
        width: "80%",
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        {questions1.map((question, index) => {
          return (
            <Grid item xs={12} sm={8} md={4} key={index}>
              <Box
                sx={{
                  width: "217px",
                  height: "168px",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  borderRadius: "10px",
                  backgroundColor:
                    index % 2 == 0
                      ? COLORS.questionBlockBlueColor
                      : COLORS.questionBlockGrayColor,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "53px",
                    height: "53px",
                  }}
                >
                  <Image
                    width={53}
                    height={40}
                    src={question.image}
                    alt="Picture of the author"
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Raleway",
                    maxWidth: "394px",
                  }}
                >
                  {question.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Raleway",
                    maxWidth: "394px",
                    textAlign: "left",
                  }}
                >
                  {question.label}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Question1;

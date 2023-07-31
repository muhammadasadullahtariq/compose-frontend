import { Box, Typography, Grid } from "@mui/material";
import React, { useContext } from "react";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions1 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";

const Question1 = ({ question }) => {
  const { data, dispatch } = useContext(DataContext);
  const handleButtonClick = (value) => {
    dispatch({ type: "UPDATE_DATA", payload: { purposeOfTrip: "someValue" } });
  };

  console.log(question, "question no 1");
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "90%", lg: "80%" },
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        {question.items.map((question, index) => {
          return (
            <Grid item xs={6} sm={6} md={6} lg={4} key={index}>
              <Box
                onClick={() => handleButtonClick(question.heading)}
                sx={{
                  width: "100%",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  border: "2px solid",
                  borderColor: COLORS.primary,
                  paddingBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "15px",
                    lg: "20px",
                  },
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
                  {/* <Image
                    width={53}
                    height={40}
                    src={question.image}
                    alt="Picture of the author"
                  /> */}
                  {questions1.find(
                    (ques) =>
                      ques.heading.toLowerCase() ===
                      question.title.toLowerCase()
                  ) && (
                    <Image
                      src={
                        questions1.find(
                          (ques) =>
                            ques.heading.toLowerCase() ===
                            question.title.toLowerCase()
                        ).image
                      }
                      alt={question.title}
                    />
                  )}
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontFamily: "Raleway",
                    maxWidth: "394px",
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Raleway",
                    maxWidth: "394px",
                    textAlign: "left",
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                >
                  {question.description}
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

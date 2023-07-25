"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import * as COLORS from "@/constants/colors";
import AppBar from "@/components/navbar";
import { useParams, useRouter } from "next/navigation";
import {
  questionSlug,
  questionsHedaing,
  questionsTitle,
} from "@/constants/questions";
import CheckIcon from "@mui/icons-material/Check";

export default function Layout({ children }) {
  const params = useParams();
  const indexOfQuestion = questionSlug.indexOf(params.question);
  const router = useRouter();

  return (
    <>
    <AppBar />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: COLORS.primary,
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '95%', lg: "90%"},
          backgroundColor: "#F9F9F9",
          borderRadius: { md: "20px", xs: "0" },
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { md: "270px", xs: "80px" },
            display: "flex",
            paddingTop: "60px",
            borderRight: 1,

            borderColor: "#D2D4DA",
          }}
        >
          <Box
            sx={{
              display: {
                md: "none",
                xs: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {questionsHedaing.map((question, index) => (
              <Box
                key={index}
                sx={{
                  display: {
                    md: "none",
                    xs: "flex",
                  },
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={question}
              >
                <Box
                  sx={{
<<<<<<< HEAD
                    display: "flex",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid",
                    borderColor:
                      indexOfQuestion == index || indexOfQuestion > index
                        ? "#2B92D5"
                        : "#D2D4DA",
                    color:
                      indexOfQuestion == index || indexOfQuestion > index
                        ? "#F9F9F9"
                        : "#D2D4DA",
=======
                    fontSize: "18px",
                    lineHeight: "51px",
                    fontWeight: "500",
                    fontFamily: "raleway",
                    paddingLeft: "30px",
                    width: "100%",
                    color: COLORS.questionHeadingColor,
                    textAlign: { md: "center", xs: "center", lg: "left" },
>>>>>>> bc9c3a8edc2622c62eb82169c13990bea58bed0b
                    backgroundColor:
                      indexOfQuestion == index || indexOfQuestion > index
                        ? "#2B92D5"
                        : "transparent",
                  }}
                >
                  {index < indexOfQuestion ? (
                    <CheckIcon
                      fontSize="small"
                      sx={{
                        color: COLORS.white,
                        width: 15,
                        height: 15,
                        padding: "1px",
                      }}
                    />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </Box>
                {index < questionsHedaing.length - 1 ? (
                  <Box
                    sx={{
                      width: "1px",
                      height: "30px",
                      background:
                        indexOfQuestion > index ? "#2B92D5" : "#D2D4DA",
                    }}
                  />
                ) : null}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              flexDirection: "column",
            }}
          >
            {questionsHedaing.map((question, index) => {
              return (
                <Box
                  sx={{
                    display: { md: "flex", xs: "none" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                  key={question}
                >
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "18px",
                      lineHeight: "51px",
                      fontWeight: "500",
                      fontFamily: "raleway",
                      paddingLeft: "30px",
                      width: "100%",

                      color: COLORS.questionHeadingColor,
                      textAlign: "left",
                      backgroundColor:
                        indexOfQuestion == index ? "#E2E8FF" : "#F9F9F9",
                      cursor: "pointer",
                    }}
                  >
                    {question}
                  </Typography>
                  {index < indexOfQuestion && (
                    <Box
                      sx={{
                        backgroundColor: COLORS.primary,
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 1,
                      }}
                    >
                      <CheckIcon
                        fontSize="small"
                        sx={{
                          color: COLORS.white,
                          width: 15,
                          height: 15,
                          padding: "1px",
                        }}
                      />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            gap: "20px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "600",
              fontFamily: "Raleway",
              maxWidth: "394px",
            }}
          >
            {questionsTitle[indexOfQuestion]}
          </Typography>
          <Box
            sx={{
              display: "block",
              width: "100%",
              height: "350px",
              overflow: "auto",
            }}
          >
            {children}
          </Box>

          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Button
              sx={{
                backgroundColor: COLORS.primary,
                color: "white",
                borderRadius: "20px",
                width: "128px",
                height: "41px",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = COLORS.primary;
              }}
              onClick={() => {
                router.push(
                  "/questionaire/" + questionSlug[indexOfQuestion + 1]
                );
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}

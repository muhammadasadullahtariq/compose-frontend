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
    <div>
      <AppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: {md: '90vh', lg: "90vh"},
          backgroundColor: COLORS.primary,
        }}
      >
        <Box
          sx={{
            width: { md: "80%", xs: "100%" },
            backgroundColor: "#F9F9F9",
            borderRadius: { md: "20px", xs: "0" },
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            height: { md: "auto", xs: "100%" },
          }}
        >
          <Box
            sx={{
              width: { md: "270px" },
              display: "flex",
              paddingTop: { md: "60px", xs: "20px" },
              borderRight: 1,
              paddingBottom: { xs: "20px" },
              paddingX: { md: "0", xs: "20px" },
              borderColor: "#D2D4DA",
            }}
          >
            <Box
              sx={{
                display: {
                  md: "none",
                  xs: "flex",
                },
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {questionsHedaing.map((question, index) => (
                <Box
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
                      display: "flex",
                      width: "30px",
                      height: "30px",
                      borderRadius: "100%",
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
                      <p style={{ marginTop: -5 }}>{index + 1}</p>
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
                      backgroundColor: COLORS.answeredQuestionColor,
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
                          index < indexOfQuestion
                            ? COLORS.answeredQuestionColor
                            : indexOfQuestion == index
                            ? "#E2E8FF"
                            : "#F9F9F9",
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
          {/* Web */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              padding: "20px",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "600",
                fontFamily: "Raleway",
                marginBottom: '10px',
                maxWidth: "394px",
                flex: "1",
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
                flex: "6",
              }}
            >
              {children}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                flex: "1",
              }}
            >
              <Button
                sx={{
                  color: '#333',
                  borderRadius: "20px",
                  width: "128px",
                  height: "41px",
                }}
                onClick={() => {
                  router.back()
                }}
              >
                Back
              </Button>
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
    </div>
  );
}

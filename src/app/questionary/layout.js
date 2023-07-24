"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import * as COLORS from "@/constants/colors";
import AppBar from "@/components/navbar";
import { useParams } from "next/navigation";

export default function Layout({ children }) {
  const router = useParams();
  console.log(router);

  const questionsHedaing = [
    "Purpose of trip",
    "Who's travelling",
    "Where to",
    "When to go",
    "Budget",
    "Interests",
    "Itinerary",
    "Any comments",
    "What you looking for?",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100vw",
        backgroundColor: COLORS.primary,
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "80%",
          backgroundColor: COLORS.white,
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "25%",
            height: "100%",
            display: "flex",
            paddingLeft: "4%",
            paddingTop: "4%",
            flexDirection: "column",
          }}
        >
          {questionsHedaing.map((question, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: "18px",
                  lineHeight: "21px",
                  fontWeight: "500",
                  fontFamily: "raleway",
                  color: COLORS.questionHeadingColor,
                  textAlign: { md: "center", xs: "center", lg: "left" },
                  marginBottom: "30px",
                }}
              >
                {question}
              </Typography>
            );
          })}
        </Box>
        <Box
          sx={{
            width: "1px",
            height: "100%",
            backgroundColor: COLORS.gray,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

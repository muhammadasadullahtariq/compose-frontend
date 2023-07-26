"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Typography } from "@mui/material";
import Icon from "@mui/material";
import { useRouter } from "next/navigation";
import * as COLORS from "@/constants/colors";
import blockImage from "@/assets/images/fourthBlock.svg";
import Image from "next/image";
import "./styles.css";

function FourthBlock() {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: {
          xs: "column",
          md: "row",
          lg: "row-reverse",
        },
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
          xs: "30px 30px",
          md: "30px 0px 30px 40px",
          lg: "30px 100px 30px 0px",
        },
        backgroundColor: COLORS.blockBackgroundColor,
      }}
    >
      <Box
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "column",
          },
          width: { xs: "100%", md: "100%", lg: "50%" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "32px", lg: "32px" },
            fontWeight: "800",
            fontFamily: "raleway",
            textTransform: "uppercase",
            color: COLORS.black,
            textAlign: { md: "center", xs: "center", lg: "left" },
          }}
        >
          Seamless&nbsp;
          <Typography
            as="span"
            sx={{
              fontSize: { xs: "22px", md: "32px", lg: "32px" },
              fontWeight: "700",
              fontFamily: "raleway",
              textTransform: "uppercase",
              color: COLORS.primary,
            }}
          >
            Navigation&nbsp;
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px", lg: "22px" },
            fontWeight: "500",
            fontFamily: "raleway",
            color: COLORS.textColor,
            textAlign: { md: "center", xs: "center", lg: "left" },
            width: { xs: "100%", md: "100%", lg: "100%" },
          }}
        >
          ComposeTrip provides guidance throughout your journey. With
          easy-to-follow routes, optimal visit timings, and succinct
          descriptions, you're in for a stress-free travel experience.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: { xs: "20px", md: "0px", lg: "0px" },
        }}
      >
        <Image src={blockImage} alt="image" />
      </Box>
    </Box>
  );
}
export default FourthBlock;

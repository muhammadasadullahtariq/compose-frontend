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

function FirstBloack() {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
          lg: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: {
          xs: "50px 30px",
          md: "50px 0px 50px 40px",
          lg: "50px 0px 50px 100px",
        },
        backgroundColor: COLORS.white,
      }}
    >
      <Box
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Typography
          onClick={() => {
            router.push("/questionaire/whereto");
          }}
          sx={{
            fontSize: { xs: "22px", md: "32px", lg: "32px" },
            fontWeight: "800",
            fontFamily: "raleway",
            textTransform: "uppercase",
            color: COLORS.black,
            textAlign: { md: "center", xs: "center", lg: "left" },
            cursor: "pointer",
          }}
        >
          YOU ARE 5&nbsp;
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
            QUESTIONS&nbsp;
          </Typography>
          AWAY
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px", lg: "22px" },
            fontWeight: "500",
            fontFamily: "raleway",
            color: COLORS.textColor,
            textAlign: { md: "center", xs: "center", lg: "left" },
            width: { xs: "100%", md: "100%", lg: "75%" },
          }}
        >
          Your dream itinerary is waiting for you. Share with us your travel
          inclinations by answering our questions and we will do the rest.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingTop: {
            xs: "30px",
            md: "0px",
            lg: "0px",
          },
        }}
      >
        <Image src={blockImage} alt="Image" />
      </Box>
    </Box>
  );
}
export default FirstBloack;

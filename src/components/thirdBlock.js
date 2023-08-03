"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import * as COLORS from "@/constants/colors";
import blockImage from "@/assets/images/thirdBlock.svg";
import Image from "next/image";
import "./styles.css";

function ThirdBlock() {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: COLORS.white,
      }}
    >
      <Container>
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
              sx={{
                fontSize: { xs: "22px", md: "32px", lg: "32px" },
                fontWeight: "800",
                fontFamily: "raleway",
                textTransform: "uppercase",
                color: COLORS.black,
                textAlign: { md: "center", xs: "center", lg: "left" },
              }}
            >
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
                AI-Curated&nbsp;
              </Typography>
              Itineraries
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
              Are you an urban explorer, a nature enthusiast, or a fervent
              history aficionado? Share with us your travel inclinations and
              we'll identify the best destinations that align with your
              preferences. With ComposeTrip, you can design trips that truly
              resonate with you.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: { xs: "20px", md: "0px", lg: "0px" },
            }}
          >
            <Image src={blockImage} alt="Image" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default ThirdBlock;

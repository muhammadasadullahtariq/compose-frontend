"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import * as COLORS from "@/constants/colors";
import blockImage from "@/assets/images/secondBlock.svg";
import Image from "next/image";
import "./styles.css";

function SecondBlock() {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: COLORS.blockBackgroundColor,
      }}
    >
      <Container>
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
                color: COLORS.black,
                textAlign: { md: "center", xs: "center", lg: "left" },
              }}
            >
              Hassle free&nbsp;
              <Typography
                as="span"
                sx={{
                  fontSize: { xs: "22px", md: "32px", lg: "32px" },
                  fontWeight: "700",
                  fontFamily: "raleway",
                  color: COLORS.primary,
                }}
              >
                planning
                <br />
              </Typography>
              experience
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
              Discover your dream trip effortlessly with us! We prioritize
              relevance to save you time and energy, delivering a stress-free
              travel planning experience. Don't wait—start your next adventure
              now!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Image src={blockImage} alt="image" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default SecondBlock;

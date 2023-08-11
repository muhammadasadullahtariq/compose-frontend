"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@/components/navbar";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import * as COLORS from "@/constants/colors";
import FirstBloack from "@/components/firstBlock";
import SecondBlock from "@/components/secondBlock";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "@/components/footer";
import blockImage from "@/assets/images/firstBlock.svg";
import { setCookie,hasCookie } from "cookies-next";

function ResponsiveAppBar() {
  const router = useRouter();
  useEffect(() => {
    if (!hasCookie('userForm')) {
      setCookie('userForm',false)
    }


  }, []);

  return (
    <Box
      className="landing"
      sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
    >
      <AppBar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          width: "100%",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
          height: { xs: "700px", md: "400px", lg: "500px" },
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundImage: `url('/headerBackground.svg'), linear-gradient(180deg, #B3E5F3 40%, rgba(255,255,255,1) 74%)`,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "100%", lg: "55%" },
            padding: { sm: "0", xs: "16px" },
          }}
          alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
        >
          {/*  */}

          <Typography
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: { xs: "30px", md: "40px", lg: "68px" },
              fontWeight: "800",
              fontFamily: "raleway",
              textTransform: "uppercase",
              color: COLORS.black,
              textAlign: { md: "center", xs: "center", lg: "left" },
              lineHeight: "30px",
            }}
          >
            COMPOSE A{" "}
            <Typography
              as="span"
              sx={{
                width: "100%",
                fontSize: { xs: "30px", md: "40px", lg: "68px" },
                fontWeight: "700",
                fontFamily: "raleway",
                textTransform: "uppercase",
                color: COLORS.primary,
              }}
            >
              TRIP{" "}
            </Typography>
            IN MINUTES
          </Typography>
          <Typography
            sx={{
              marginTop: { xs: "10px", md: "20px", lg: "20px" },
              fontSize: { xs: "16px", md: "18px", lg: "22px" },
              fontWeight: "500",
              fontFamily: "raleway",
              color: COLORS.headerTextColor,
              textAlign: { md: "center", xs: "center", lg: "left" },
              width: { xs: "100%", md: "100%", lg: "100%" },
            }}
          >
            GET A TAILORED ITINERARY SPECIFIC TO YOU AND EXPERIENCE THE MAGIC OF
            PERSONALIZED ADVENTURES.
          </Typography>
          <Grid container justifyContent={{ xs: "center", lg: "left" }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                border: "none",
                outline: "none",
                borderColor: COLORS.primary,
                marginTop: "20px",
                backgroundColor: COLORS.primary,
                "&:hover": {
                  backgroundColor: COLORS.primary,
                  border: "none",
                  outline: "none",
                },
              }}
              onClick={() => {
                router.push("/questionaire/where to");
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "18px", md: "16px", xs: "14px" },
                  fontWeight: "500",
                  fontFamily: "raleway",
                  padding: "5px 30px",
                  color: COLORS.white,
                }}
              >
                Get Started
              </Typography>
              <ArrowForwardIosIcon
                sx={{
                  fontSize: { lg: "18px", md: "16px", xs: "14px" },
                  marginLeft: "2px",
                  color: COLORS.white,
                }}
              />
            </Button>
          </Grid>
        </Box>
        <Image src={blockImage} alt="headerImage" />
      </Box>
      <FirstBloack />
      <SecondBlock />
      {/* <ThirdBlock /> */}
      {/* <FourthBlock /> */}
      {/* <Testimonials /> */}
      <Footer />
    </Box>
  );
}
export default ResponsiveAppBar;

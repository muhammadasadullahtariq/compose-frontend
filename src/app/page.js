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
import { setCookie, hasCookie, deleteCookie } from "cookies-next";
//import { analytics } from "./config";
import { pageview, trackConversion } from "./gtm";
import { loadFacebookPixel } from "./facebookPixel";
import Head from "next/head";
import Testimonial from "@/components/testimonials/testimonial";
import Testimonials from "@/components/testimonials";

function ResponsiveAppBar() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("questionaireData");
    if (!hasCookie("userForm")) {
      setCookie("userForm", false);
    }
    pageview();
    trackConversion();
    loadFacebookPixel();
  }, []);

  return (
    <div>
      <Head>
        <title>Composetrip</title>
        <meta
          name="description"
          content="Composetrip - Compose a Trip in Minutes. Plan a Tailored Trip Itinerary specific to you. Hassle Free Planning experience. We offer customized itinerary based on your interests"
        />
      </Head>
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
              marginTop: "64px",
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
                color: COLORS.black,
                textAlign: { md: "center", xs: "center", lg: "left" },
                lineHeight: "30px",
              }}
            >
              Compose a{" "}
              <Typography
                as="span"
                sx={{
                  width: "100%",
                  fontSize: { xs: "30px", md: "40px", lg: "68px" },
                  fontWeight: "700",
                  fontFamily: "raleway",
                  color: COLORS.primary,
                }}
              >
                trip{" "}
              </Typography>
              in minutes
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
              Get a tailored itinerary specific to you and experience the magic
              of personalized adventures.
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
                  textTransform: "unset",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                onClick={() => {
                  router.push("/questionaire/whereto");
                }}
              >
                <Typography
                  sx={{
                    fontSize: { lg: "18px", md: "16px", xs: "14px" },
                    fontWeight: "800",
                    fontFamily: "raleway",
                    padding: "5px 30px",
                    color: COLORS.white,
                  }}
                >
                  Get started
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
        <Testimonials />
        <Footer />
      </Box>
    </div>
  );
}
export default ResponsiveAppBar;

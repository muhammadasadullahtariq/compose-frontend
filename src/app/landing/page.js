"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@/components/navbar";
import { Button, Typography } from "@mui/material";
import Icon from "@mui/material";
import ProtectedPageRoute from "../protected-page-route";
import { useRouter } from "next/navigation";
import * as COLORS from "@/constants/colors";
import FirstBloack from "@/components/firstBlock";
import SecondBlock from "@/components/secondBlock";
import ThirdBlock from "@/components/thirdBlock";
import FourthBlock from "@/components/fourthBlock";
import Image from "next/image";
import headerImage from "@/assets/images/pageMainImage.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import { fetcher } from "../../lib/APIFetcher";
import { removeSpacesFromString } from "../../lib/CreateSlug";

function ResponsiveAppBar() {
  const [questions, setQuestions] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      const data = await fetcher(
        "http://localhost:1337/api/questions?populate=items"
      );
      const formatted = data.data
        .map((que) => {
          return {
            id: que.id,
            navTitle: que.attributes.nav_title,
            title: que.attributes.title,
            sortNum: que.attributes.sorting_number,
            items: que.attributes.items,
          };
        })
        .sort((a, b) => a.sortNum - b.sortNum);
      setQuestions(formatted);
      return data;
    }
    getData();
  }, []);
  console.log(questions);

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
          }}
          alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "32px", lg: "32px" },
              fontWeight: "700",
              fontFamily: "raleway",
              textTransform: "uppercase",
              color: COLORS.black,
              textAlign: { md: "center", xs: "center", lg: "left" },
            }}
          >
            Welcome to&nbsp;
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
              ComposeTrip&nbsp;
            </Typography>
          </Typography>
          <Box
            sx={{
              height: "10px",
            }}
          />
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
            Your Personal{" "}
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
              Travel{" "}
            </Typography>
            Guide
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px", lg: "22px" },
              fontWeight: "500",
              fontFamily: "raleway",
              color: COLORS.headerTextColor,
              textAlign: { md: "center", xs: "center", lg: "left" },
              width: { xs: "100%", md: "100%", lg: "100%" },
            }}
          >
            Engineered for curious explorers, adventure enthusiasts, history
            lovers, and relaxation seekers, ComposeTrip utilizes
            state-of-the-art AI to tailor the perfect itinerary for your next
            journey.
          </Typography>
          <Grid container justifyContent={{ xs: "center", lg: "left" }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                border: "none",
                outline: "none",
                borderColor: COLORS.buttonMobileColor,
                marginTop: "20px",
                backgroundColor: COLORS.buttonMobileColor,
                "&:hover": {
                  backgroundColor: COLORS.buttonMobileColor,
                  border: "none",
                  outline: "none",
                },
              }}
              onClick={() => {
                console.log("clicked");
                const user = ProtectedPageRoute();
                console.log(user);
                if (!user) {
                  router.push("/signup");
                } else {
                  const firstEl = removeSpacesFromString(questions[0].navTitle);
                  router.push("/questionaire/" + firstEl);
                }
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
        <Image src={headerImage} alt="headerImage" />
      </Box>
      <FirstBloack />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <Testimonials />
      <Footer />
    </Box>
  );
}
export default ResponsiveAppBar;

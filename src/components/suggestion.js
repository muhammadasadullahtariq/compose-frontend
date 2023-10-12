"use client";
import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";
import LocationIcon from "@/assets/images/tripDetails/icons/location.svg";
import Resturant from "@/assets/images/tripDetails/resturantName.svg";
import Detail from "@/assets/images/tripDetails/detail.svg";
import * as COLORS from "@/constants/colors";
import { useCollapse } from "react-collapsed";
import Image from "next/image";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import "./resturantStyle.css";
import TextRender from "@/components/atomic/TextRenderForSuggestion/textRender";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect } from "react";
import interestImage from "@/assets/images/tripDetails/interest.png";
import family from "@/assets/images/tripDetails/family.png";
import couple from "@/assets/images/tripDetails/couple.png";
import friends from "@/assets/images/tripDetails/friends.png";
import solo from "@/assets/images/tripDetails/solo.png";

const SuggestionCollaspible = ({
  natureRelatedSuggestions,
  locationSuggestions,
  travelingWith,
  interest,
}) => {
  useEffect(() => {
    console.log("interest", interest);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: COLORS.white,
        marginBottom: "20px",
        paddingRight: {
          lg: "20px",
          md: "20px",
          sm: "0px",
        },
        paddingTop: "10px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <dev
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              width: "100%",
              fontFamily: "Raleway",
              marginRight: "10px",
              color: COLORS.primary,
            }}
          >
            Suggestions
          </Typography>
          {!(
            locationSuggestions?.length > 0 ||
            natureRelatedSuggestions.length > 0
          ) && (
            <Box
              sx={{
                display: "flex",
              }}
            >
              <CircularProgress size={30} />
            </Box>
          )}
        </dev>
      </Box>

      <Box
        style={{
          width: "100%",
          height: "1px",
          background: "#F3F4F8",
          margin: "15px 0",
        }}
      />
      {locationSuggestions?.length > 0 && (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: {
                lg: "0 10px 0px 10px",
                md: "0 10px 0 10px",
                xs: "0",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  width: "100%",
                  fontFamily: "Raleway",
                  marginRight: "10px",
                  color: COLORS.primary,
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Based on your travel type <br />
                <Typography
                  sx={{
                    color: "black",
                  }}
                >
                  ({travelingWith})
                </Typography>
              </Typography>
              <Box
                sx={{
                  margin: {
                    lg: "0 10px 0px 10px",
                    md: "0 10px 0 10px",
                    xs: "0",
                  },
                  backgroundImage: `url(/assets/img/travelingWith.svg)`,
                  borderRadius: "10px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px 0",
                  height: {
                    lg: "450px",
                    md: "450px",
                    sm: "100%",
                  },
                }}
              >
                <Image
                  src={
                    travelingWith == "Family"
                      ? family
                      : travelingWith == "Couple"
                      ? couple
                      : travelingWith == "Friends"
                      ? friends
                      : solo
                  }
                  width={100}
                  height={100}
                  alt="travelingWith"
                  style={{
                    marginBottom: "10px",
                  }}
                />
                {locationSuggestions.map((item, index) => {
                  return (
                    <Box
                      sx={{
                        margin: {
                          lg: "0 10px 0 10px",
                          md: "0 10px 0 10px",
                          xs: "0",
                        },
                      }}
                    >
                      <TextRender
                        name={
                          <CircleIcon
                            sx={{
                              height: "10px",
                              width: "10px",
                            }}
                          />
                        }
                        description={"  " + item}
                        color={"#FFFFFF"}
                      ></TextRender>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              sx={{
                height: { lg: "450px", md: "450px", sm: "0" },
                width: { lg: "3px", md: "3px", sm: "0" },
                backgroundColor: COLORS.textColor,
                alignSelf: "flex-end",
              }}
            />
            <Box
              sx={{
                marginTop: {
                  lg: "0px",
                  sm: "20px",
                  xs: "20px",
                },
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  width: "100%",
                  fontFamily: "Raleway",
                  marginRight: "10px",
                  color: COLORS.primary,
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Based on your interests
                <br />
                <Typography
                  sx={{
                    color: "black",
                  }}
                >
                  {interest?.length > 0 && "(" + interest.join(", ") + ")"}{" "}
                </Typography>
              </Typography>
              <Box
                sx={{
                  margin: {
                    lg: "0 10px 0px 10px",
                    md: "0 10px 0 10px",
                    xs: "0",
                  },
                  backgroundImage: `url(/assets/img/interest.svg)`,
                  borderRadius: "10px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px 0",
                  height: {
                    lg: "450px",
                    md: "450px",
                    sm: "100%",
                  },
                }}
              >
                <Image
                  src={interestImage}
                  width={100}
                  height={100}
                  alt="interest"
                  style={{
                    marginBottom: "10px",
                    content: "center",
                  }}
                />
                {natureRelatedSuggestions.map((item, index) => {
                  return (
                    <Box
                      sx={{
                        margin: {
                          lg: "0 10px 0 10px",
                          md: "0 10px 0 10px",
                          xs: "0",
                        },
                      }}
                    >
                      <TextRender
                        name={
                          <CircleIcon
                            sx={{
                              height: "10px",
                              width: "10px",
                            }}
                          />
                        }
                        description={"  " + item}
                        color={"#FFFFFF"}
                      ></TextRender>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SuggestionCollaspible;

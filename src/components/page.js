"use client";
import { forwardRef } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import "./printStyles.css";
import * as COLORS from "@/constants/colors";
import CollapsibleField from "@/components/collapsAble";
import SuggestionCollaspible from "@/components/suggestion";
import TripDetailItem from "@/components/trip_detail_item";
import ResturantCollaspible from "@/components/resturants";
import Culture from "@/components/cultures";
import SavedIcon from "@/assets/images/tripDetails/icons/save.png";
import OpenLink from "@/assets/images/tripDetails/icons/share.png";
import Health from "@/components/health";
import Image from "next/image";

const TextRenderOfResturant = ({ name, location, description }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          component={"img"}
          src={`${process.env.NEXT_PUBLIC_API_URL}assets/resturant.png`}
          alt="name-icon"
          sx={{ height: "15px", width: "15px" }}
        />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "400" }}>
            {name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "20px",
          margin: "5px 0 2px 6px",
          display: "flex",
        }}
      >
        <Box className="dashed-linex" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          component={"img"}
          src={`${process.env.NEXT_PUBLIC_API_URL}assets/location.png`}
          alt="name-icon"
          sx={{ height: "15px", width: "15px" }}
        />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "400" }}>
            {location}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "20px",
          margin: "5px 0 2px 6px",
          display: "flex",
        }}
      >
        <Box className="dashed-linex" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          component={"img"}
          src={`${process.env.NEXT_PUBLIC_API_URL}assets/detail.png`}
          alt="name-icon"
          sx={{ height: "15px", width: "15px" }}
        />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "400" }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const PrintScreen = forwardRef(
  ({ cityCountry, tripDetail, cityImage, trip }, ref) => {
    return (
      <div ref={ref}>
        <Box
          className="hero-section"
          sx={{
            width: "100%",
            height: "80vh",
            backgroundImage:
              cityImage != ""
                ? `url(${cityImage})`
                : "url('/assets/img/cloud.jpeg')",
            marginTop: "60px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Container
              sx={{
                height: "100%",
                display: "flex",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    marginBottom: {
                      md: "30px",
                      xs: "25px",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    color={COLORS.white}
                    sx={{ fontSize: "24px", fontWeight: "700", fontFamily: "" }}
                  >
                    YOUR TRIP TO
                  </Typography>
                  <Typography
                    variant="h2"
                    color={COLORS.white}
                    sx={{
                      fontSize: { lg: "76px", xs: "34px" },
                      fontWeight: "700",
                    }}
                  >
                    {cityCountry?.city?.length > 0
                      ? cityCountry?.city
                          ?.join(", ")
                          .replace(/, $/, "")
                          .toUpperCase()
                      : cityCountry?.country?.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="h2"
                    color={COLORS.white}
                    sx={{
                      fontSize: { lg: "24px", xs: "20px" },
                      fontWeight: "500",
                    }}
                  >
                    {tripDetail?.aboutCity}
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
        <Container
          sx={{
            backgroundColor: COLORS.white,
            position: "relative",
            transform: "translateY(-40%)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        >
          <Grid
            container
            sx={{
              padding: "10px",
            }}
          >
            <Grid item md={3} xs={12}>
              <TripDetailItem
                heading={"Adventure begins"}
                subHeading={new Date(cityCountry.date).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
                image={false}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <TripDetailItem
                heading={"Duration"}
                subHeading={cityCountry.numberOfDays}
                image={true}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <TripDetailItem
                heading={"Travel type"}
                subHeading={cityCountry.travelingWith}
                image={true}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  margin: {
                    xs: "0px 0px 20px 0",
                  },
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginRight: "20px",
                    padding: "5px 20px",
                    width: { xs: "100%" },
                  }}
                  onClick={() => {
                    const user = ProtectedPageRoute();
                    if (user) {
                      setSaveModal(true);
                    } else {
                      alert("Please login to save trip");
                    }
                  }}
                >
                  <Image
                    src={SavedIcon}
                    width={11}
                    height={11}
                    alt="save-icon"
                    style={{ marginRight: "5px" }}
                  />
                  Save
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    padding: "5px 20px",
                    backgroundColor: COLORS.primary,
                    width: { xs: "100%" },
                  }}
                  onClick={() => {
                    setShareModal(true);
                  }}
                >
                  <Image
                    src={OpenLink}
                    width={11}
                    height={11}
                    alt="share-icon"
                    style={{ marginRight: "5px" }}
                  />
                  Share
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            width: "100%",

            position: "relative",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "20px",
                }}
              />
              {tripDetail?.trip?.map((item, tripIndex) => (
                <CollapsibleField
                  item={item}
                  tripIndex={tripIndex}
                  tripLength={trip.length}
                  startDate={cityCountry?.date}
                />
              ))}
            </Box>
          </Container>
        </Box>
        <Container>
          <ResturantCollaspible restaurants={tripDetail?.restaurants} />

          <Culture
            dosCulture={tripDetail?.dosCulture}
            dontsCulture={tripDetail?.dontsCulture}
          />
          <Health
            dosHealth={tripDetail?.dosHealth}
            dontsHealth={tripDetail?.dontsHealth}
          />
          {tripDetail?.dosHealth?.length > 0 && tripDetail?.suggestions && (
            <SuggestionCollaspible suggestion={tripDetail?.suggestions} />
          )}
        </Container>
      </div>
    );
  }
);
export default PrintScreen;

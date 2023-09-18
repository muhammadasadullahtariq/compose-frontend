"use client";
import { Box, Typography, Grid, Button } from "@mui/material";

import LocationIcon from "@/assets/images/tripDetails/icons/location.svg";
import StarIcon from "@/assets/images/tripDetails/icons/star.svg";
import TimeIcon from "@/assets/images/tripDetails/icons/time.svg";
import Image from "next/image";
import * as COLORS from "@/constants/colors";
import { useCollapse } from "react-collapsed";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";

const CollapsibleField = ({ item, tripIndex, tripLength, startDate }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: tripIndex === 0,
  });
  console.log("startDate", tripIndex);
  var date = new Date(startDate);

  date = new Date(date.setDate(date.getDate() + tripIndex));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: COLORS.white,
        marginBottom: "20px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        paddingRight: "20px",
        paddingLeft: "10px",
        paddingTop: "10px",
        paddingBottom: isExpanded ? "0px" : "10px",
        cursor: "pointer",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "22px",
            fontWeight: "600",
            width: "100%",
            fontFamily: "Raleway",
          }}
          {...getToggleProps()}
        >
          {date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Typography>
        {isExpanded ? (
          <KeyboardArrowUpSharpIcon />
        ) : (
          <KeyboardArrowDownSharpIcon />
        )}
      </Box>
      {isExpanded && (
        <Box
          style={{
            width: "100%",
            height: "1px",
            background: "#F3F4F8",
            margin: "15px 0",
          }}
        />
      )}
      <Box
        {...getCollapseProps()}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItem: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "10px",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image src={LocationIcon} width="15" alt="location-icon" />
            </Box>
            <Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "18px", fontWeight: "500" }}
                >
                  {item.location}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {item.activities.map((activity, index) => (
          <>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: "10px",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image src={StarIcon} width="17" alt="location-icon" />
                </Box>
                <Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontSize: "18px", fontWeight: "200" }}
                    >
                      {activity.activity}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                sx={{
                  gap: "20px",
                  flexWrap: "nowrap",
                }}
              >
                <Grid
                  item
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    display: "flex",
                    paddingTop: "3px",
                  }}
                >
                  <Image src={TimeIcon} width="15" alt="location-icon" />
                  {index < item.activities.length - 1 && (
                    <Box className="dashed-line" />
                  )}
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "16px", fontWeight: "400" }}
                    >
                      {activity.time}
                    </Typography>
                    <Box
                      sx={{
                        paddingTop: "15px",
                        width: "100%",
                        marginBottom: activity?.image ? "0px" : "15px",
                      }}
                    >
                      <p>{activity.description}</p>
                    </Box>
                    {activity.image && (
                      <Box
                        sx={{
                          margin: "15px 0",
                          width: "100%",
                          height: {
                            lg: "401px",
                            md: "314",
                            xs: "214px",
                          },
                          overflow: "hidden",
                          borderRadius: "10px",

                          position: "relative",

                          backgroundImage: `url("${activity.image}")`,

                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "15px",
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "500",
                              color: "#fff",
                              marginLeft: "20px",
                            }}
                          >
                            {activity.activity}
                          </Typography>
                          {activity.url && (
                            <Button
                              sx={{
                                marginRight: "20px",
                                borderRadius: "10px",
                                color: "#fff",
                                fontSize: "10px",
                                background: "#2b92d6",
                                padding: "9px 12px",
                                borderRadius: "20px",
                              }}
                              onClick={() => {
                                window.open(activity.url);
                              }}
                            >
                              Book now
                            </Button>
                          )}
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        ))}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            marginLeft: "35px",
          }}
          onClick={() => {
            const user = ProtectedPageRoute();
            if (!user) {
              alert("You need to login to add a place to your trip");
            } else {
              setIndex(tripIndex);
              setAddPlaceOpen(true);
            }
          }}
        >
          <AddIcon
            sx={{
              fontSize: "16px",
              color: COLORS.primary,
            }}
          />
          <Typography
            sx={{
              fontSize: "16px",
              color: COLORS.primary,
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "Raleway",
              position: "relative",
            }}
          >
            add a place
          </Typography>
        </Box> */}
      </Box>
      <Box />
    </Box>
  );
};

export default CollapsibleField;

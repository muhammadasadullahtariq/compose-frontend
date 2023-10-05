"use client";
import { Box, Typography, Grid, Button } from "@mui/material";

import LocationIcon from "@/assets/images/tripDetails/icons/locationResturant.svg";
import StarIcon from "@/assets/images/tripDetails/icons/star.svg";
import TimeIcon from "@/assets/images/tripDetails/icons/time.svg";
import Image from "next/image";
import * as COLORS from "@/constants/colors";

const CollapsibleField = ({ item, tripIndex, tripLength, startDate }) => {
  var date = new Date(startDate);

  date = new Date(date.setDate(date.getDate() + tripIndex));

  var startDatee = new Date(startDate);

  startDatee =
    startDatee.getFullYear() +
    "-" +
    (startDatee.getMonth() + 1) +
    "-" +
    startDatee.getDate();
  var endDate = new Date(
    new Date(startDate).setDate(new Date(startDate).getDate() + tripLength)
  );
  endDate =
    endDate.getFullYear() +
    "-" +
    (endDate.getMonth() + 1) +
    "-" +
    endDate.getDate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: COLORS.white,
        marginBottom: "20px",
        paddingTop: "10px",
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
            color: COLORS.primary,
          }}
        >
          {date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Typography>
      </Box>

      <Box
        style={{
          width: "100%",
          height: "1px",
          background: "#F3F4F8",
          margin: "15px 0",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItem: "flex-start",
          flexDirection: "column",
        }}
      >
        {item.activities.map((activity, index) => (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: {
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                },
              }}
            >
              {index === 0 && (
                <Box
                  sx={{
                    backgroundImage: `url(${"/assets/img/dayBackground.svg"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                    width: {
                      lg: "600px",
                      md: "500px",
                      xs: "100%",
                      sm: "300px",
                    },
                    marginRight: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom: { xs: "20px" },
                    backgroundColor: COLORS.primary,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "52px",
                        md: "52px",
                        sx: "32px",
                      },
                      fontWeight: "300",
                      color: "#fff",
                    }}
                  >
                    Day{tripIndex + 1}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: COLORS.white,
                      }}
                    >
                      {item.location}
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box>
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
                      <Image src={TimeIcon} width="17" alt="time-icon" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: { lg: "22px", md: "18px", xs: "16px" },
                          fontWeight: "500",
                          color: COLORS.primary,
                        }}
                      >
                        {activity.time}
                      </Typography>
                      <Box
                        sx={{
                          height: "1px",
                          margin: "0 10px 0 10px",
                          display: "flex",
                          width: "100%",
                          backgroundColor: COLORS.primary,
                        }}
                      />
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
                      <Image src={StarIcon} width="15" alt="star-icon" />
                      <Box className="dashed-line" />
                    </Grid>
                    <Grid item sx={{ width: "100%" }}>
                      <Box sx={{ width: "100%" }}>
                        <Typography
                          variant="p"
                          sx={{
                            fontSize: { lg: "22px", md: "18px", xs: "16px" },
                            fontWeight: "500",
                          }}
                        >
                          {activity.activity}
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
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
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
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                      padding: "10px",
                    }}
                  >
                    {activity.activity}
                  </Typography>
                  {activity.url && (
                    <Button
                      sx={{
                        marginRight: "20px",
                        color: "#fff",
                        fontSize: "10px",
                        background: COLORS.primary,
                        borderRadius: "20px",
                        padding: "10px 25px",
                        //add shadow
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        textTransform:"unset"
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
          </>
        ))}
      </Box>
      <Box />
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
          <Image src={TimeIcon} width="17" alt="time-icon" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: { lg: "22px", md: "18px", xs: "16px" },
              fontWeight: "500",
              color: COLORS.primary,
            }}
          >
            Night
          </Typography>
          <Box
            sx={{
              height: "1px",
              margin: "0 10px 0 10px",
              display: "flex",
              width: "100%",
              backgroundColor: COLORS.primary,
            }}
          />
        </Box>
      </Box>
      <a
        href={`https://www.kayak.com/in?a=kan_272633_583230&url=/hotels/${item.location}/${startDatee}/${endDate}`}
        target="_blank"
        rel="nofollow"
      >
        <Box
          sx={{
            height: "5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            marginTop: "20px",
            marginLeft: "5px",
          }}
        >
          <Typography
            variant="span"
            sx={{
              fontSize: {
                lg: "22px",
                md: "18px",
              },
              fontWeight: "500",
            }}
          >
            Find Hotels in&nbsp;
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "22px",
                md: "18px",
              },
              fontWeight: "500",
              color: COLORS.primary,
            }}
          >
            {item.location}
          </Typography>
        </Box>
      </a>
    </Box>
  );
};

export default CollapsibleField;

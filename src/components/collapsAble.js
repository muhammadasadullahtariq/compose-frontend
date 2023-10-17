"use client";
import { Box, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@/assets/images/tripDetails/icons/star.svg";
import TimeIcon from "@/assets/images/tripDetails/icons/time.svg";
import Image from "next/image";
import * as COLORS from "@/constants/colors";
import { firebase } from "@/app/config";

const CollapsibleField = ({
  item,
  tripIndex,
  tripLength,
  startDate,
  travelingWith,
}) => {
  console.log("tripLength", tripLength);
  var date = new Date(startDate);

  date = new Date(date.setDate(date.getDate() + tripIndex));

  var startDatee = new Date(startDate);

  startDatee =
    startDatee.getFullYear() +
    "-" +
    (startDatee.getMonth() + 1) +
    "-" +
    startDatee.getDate();

  console.log("startDatee", startDatee);
  var endDate = new Date(startDate);
  console.log("endDate", endDate);

  endDate = new Date(endDate.setDate(endDate.getDate() + tripLength));
  console.log("endDate", endDate);

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
                    width: {
                      lg: "1000px",
                      md: "500px",
                      xs: "100%",
                      sm: "300px",
                    },
                    marginRight: {
                      lg: "20px",
                      md: "20px",
                      sm: "0px",
                      xs: "0px",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
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
                        lg: "50px",
                        md: "52px",
                        sx: "32px",
                      },
                      fontWeight: "300",
                      color: "#fff",
                    }}
                  >
                    Day {tripIndex + 1}
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
                        fontSize: {
                          lg: "24px",
                          md: "24px",
                          sm: "20px",
                        },
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
                  cursor: "pointer",
                  position: "relative",
                  backgroundImage: `url("${activity.image}")`,

                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => {
                  try {
                    const analytics = firebase.analytics();
                    if (typeof window !== "undefined") {
                      analytics.logEvent("viator_booking", {
                        page_path: window.location.pathname,
                        page_location: window.location.href,
                      });
                    }
                    //console.log("analytics", analytics);
                  } catch (error) {}
                  window.open(activity.url);
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
                        textTransform: "unset",
                        "&:hover": {
                          background: COLORS.primary,
                        },
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

      <Box
        onClick={() => {
          try {
            const analytics = firebase.analytics();
            if (typeof window !== "undefined") {
              analytics.logEvent("kayak_booking", {
                page_path: window.location.pathname,
                page_location: window.location.href,
              });
            }
            //console.log("analytics", analytics);
          } catch (error) {}
          window.open(
            `https://www.kayak.com/in?a=kan_272633_583230&url=/hotels/${
              item.location
            }/${startDatee}/${endDate}/
${
  travelingWith == "Family"
    ? "4adults"
    : travelingWith == "Couple"
    ? "2adults"
    : travelingWith == "Friends"
    ? "2adults"
    : travelingWith == "Solo"
    ? "1adults"
    : "1adults"
}
        `
          );
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          cursor: "pointer",
          backgroundSize: {
            lg: "contain",
            md: "cover",
            sm: "justify",
            xs: "containe",
          },
          backgroundPosition: {
            lg: "center",
            md: "center",
            sm: "right",
            xs: "right",
          },
          backgroundRepeat: "no-repeat",
          paddingTop: {
            lg: "50px",
            md: "76px",
            xs: "76px",
          },
          pb: {
            lg: "76px",
            md: "76px",
            xs: "76px",
          },
          backgroundImage: `url(${"/assets/img/hotel.svg"})`,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: "42px",
              md: "36px",
              sm: "28px",
              xs: "24px",
            },
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Find the best
          <Typography
            variant="span"
            sx={{
              fontWeight: "900",
            }}
          >
            &nbsp;hotels&nbsp;
          </Typography>
          in&nbsp;
          <Typography
            variant="span"
            sx={{
              fontWeight: "900",
            }}
          >
            {item.location}
          </Typography>
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            border: "none",
            outline: "none",
            borderColor: COLORS.primary,
            marginTop: "20px",
            backgroundColor: "#2ca4f2",
            "&:hover": {
              backgroundColor: COLORS.primary,
              border: "none",
              outline: "none",
            },
            textTransform: "unset",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
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
            Book now
          </Typography>
          <ArrowForwardIosIcon
            sx={{
              fontSize: { lg: "18px", md: "16px", xs: "14px" },
              marginLeft: "2px",
              color: COLORS.white,
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default CollapsibleField;

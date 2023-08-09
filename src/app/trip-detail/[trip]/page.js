"use client";
import { useState, useEffect } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import SavedIcon from "@/assets/images/tripDetails/icons/saved.svg";
import OpenIcon from "@/assets/images/tripDetails/icons/openLink.svg";
import LocationIcon from "@/assets/images/tripDetails/icons/location.svg";
import StarIcon from "@/assets/images/tripDetails/icons/star.svg";
import TimeIcon from "@/assets/images/tripDetails/icons/time.svg";
import Image from "next/image";
import AppBar from "@/components/navbar";
import Footer from "@/components/footer";
import Itinerary from "@/components/modals/itinerary";
import "../style.css";
import getTripDetailById from "@/apis/getTripDetail";
import { useParams } from "next/navigation";
import CircleIcon from "@mui/icons-material/Circle";

const TextRender = ({ name, description, color }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        display: "flex",
        flexDirection: "row",
        //alignItems: "center",
        padding: {
          lg: "0 50px 0 50px",
          md: "0 30px 0 30px",
          xs: "0 20px 0 20px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          fontFamily: "Raleway",
          padding: "25px 0 25px 0",
        }}
      >
        {name}
        <Typography
          as="span"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "Raleway",
            padding: "27px 0 27px 0",
          }}
        >
          {description}
        </Typography>
      </Typography>
    </Box>
  );
};

const TripDetail = () => {
  const [saveModal, setSaveModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [tripDetail, setTripDetail] = useState({});
  const [cityImage, setCityImage] = useState("");
  const { trip } = useParams();

  useEffect(() => {
    (async () => {
      console.log("trip detail");
      const response = await getTripDetailById(trip);
      console.log("response", response);
      setTripDetail(response.data.chatGptResponse);
    })();
  }, []);

  useEffect(() => {
    tripDetail?.trip?.forEach((element) => {
      element.activities.forEach((activity) => {
        if (activity.image) {
          setCityImage(activity.image);
        }
      });
    });
  }, [tripDetail]);

  return (
    <div>
      <AppBar />
      <Box
        className="hero-section"
        sx={{
          width: "100%",
          height: "80vh",
          backgroundImage:
            cityImage != ""
              ? `url(${cityImage})`
              : "url('/assets/img/cloud.jpeg')",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
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
                variant="h2"
                sx={{ fontSize: "34px", fontWeight: "700" }}
              >
                {tripDetail?.trip ? tripDetail?.trip[0]?.location : ""}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#D9D9D980",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  padding: "5px 20px",
                  cursor: "pointer",
                }}
                onClick={() => setSaveModal(true)}
              >
                <Image src={SavedIcon} width={11} height={11} alt="save-icon" />
              </Box>
              <Box
                sx={{
                  width: "1px",
                  height: "100%",
                  background: "#fff",
                }}
              ></Box>
              <Box
                sx={{
                  padding: "5px 20px",
                  cursor: "pointer",
                }}
              >
                <Image src={OpenIcon} width={14} height={11} alt="open-icon" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Day 1 Section */}
      <Box
        sx={{
          width: "100%",
          padding: {
            md: "30px 0",
            xs: "15px 0",
          },
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
            {tripDetail?.trip?.map((item, tripIndex) => (
              <>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "22px",
                    fontWeight: "700",
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  {item.day}
                </Typography>

                <Box
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
                        <Image
                          src={LocationIcon}
                          width="15"
                          alt="location-icon"
                        />
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
                            <Image
                              src={StarIcon}
                              width="17"
                              alt="location-icon"
                            />
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
                            <Image
                              src={TimeIcon}
                              width="15"
                              alt="location-icon"
                            />
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
                                {activity.startTime + "-" + activity.endTime}
                              </Typography>
                              <Box
                                sx={{
                                  paddingTop: "15px",
                                  marginBottom: activity?.image
                                    ? "0px"
                                    : "15px",
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

                                    backgroundImage: `url(${activity.image})`,

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
                </Box>
                {tripIndex != trip.length - 1 ? (
                  <Box
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#F3F4F8",
                      margin: "15px 0",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "60px",
                      marginBottom: "15px",
                      display: {
                        md: "none",
                        xs: "block",
                      },
                    }}
                  />
                )}

                <Box />
              </>
            ))}
          </Box>
        </Container>
        <Box
          sx={{
            display: {
              md: "none",
              xs: "flex",
            },
            width: "100%",
            height: "56px",
            position: "fixed",
            bottom: "0",
            background: "#2B92D5",

            padding: "10px",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              color: "#fff",
              borderRadius: "20px",
              padding: "7px 13px",
              border: "1px solid #fff",
              fontSize: "10px",
            }}
            onClick={() => setOpenModal(true)}
          >
            Regenerate
          </Button>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "Raleway",
        }}
      >
        Resturants
      </Typography>
      {tripDetail?.restaurants?.map((item) => {
        return (
          <Box
            sx={{
              margin: {
                lg: "0 70px 0 70px",
                md: "0 50px 0 50px",
                xs: "0",
              },
            }}
          >
            <TextRender
              name="Name:&nbsp;"
              description={item.restaurant}
              color="#F9F9F9"
            ></TextRender>
            <TextRender
              name="Location:&nbsp;"
              description={item.location}
              color="#FFFFFF"
            ></TextRender>
            <TextRender
              name="Description:&nbsp;"
              description={item.description}
              color="#F9F9F9"
            ></TextRender>
            <Box
              sx={{
                margin: "25px 20 25px 20",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "1px",
                  margin: "0 20px 0 20px",
                  width: "100%",
                  background: "#F3F4F8",
                }}
              ></Box>
            </Box>
          </Box>
        );
      })}
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "Raleway",
        }}
      >
        CULTURE
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "20px",
          fontFamily: "Raleway",
          marginLeft: {
            lg: "70px",
            md: "50px",
            xs: "20px",
          },
        }}
      >
        Do’s
      </Typography>
      {tripDetail?.dosCulture?.map((item, index) => {
        return (
          <Box
            sx={{
              margin: {
                lg: "0 70px 0 70px",
                md: "0 50px 0 50px",
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
              color={index % 2 == 0 ? "#F9F9F9" : "#FFFFFF"}
            ></TextRender>
          </Box>
        );
      })}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "20px",
          marginTop: "20px",
          fontFamily: "Raleway",
          marginLeft: {
            lg: "70px",
            md: "50px",
            xs: "20px",
          },
        }}
      >
        Dont’s
      </Typography>
      {tripDetail?.dontsCulture?.map((item, index) => {
        return (
          <Box
            sx={{
              margin: {
                lg: "0 70px 0 70px",
                md: "0 50px 0 50px",
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
              color={index % 2 == 0 ? "#F9F9F9" : "#FFFFFF"}
            ></TextRender>
          </Box>
        );
      })}
      <Box
        sx={{
          margin: "70px 20 70px 20",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "1px",
            margin: "0 90px 0 90px",
            width: "100%",
            background: "#F3F4F8",
          }}
        ></Box>
      </Box>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "Raleway",
        }}
      >
        Health
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "20px",
          fontFamily: "Raleway",
          marginLeft: {
            lg: "70px",
            md: "50px",
            xs: "20px",
          },
        }}
      >
        Do’s
      </Typography>
      {tripDetail?.dosHealth?.map((item, index) => {
        return (
          <Box
            sx={{
              margin: {
                lg: "0 70px 0 70px",
                md: "0 50px 0 50px",
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
              color={index % 2 == 0 ? "#F9F9F9" : "#FFFFFF"}
            ></TextRender>
          </Box>
        );
      })}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "20px",
          marginTop: "20px",
          fontFamily: "Raleway",
          marginLeft: {
            lg: "70px",
            md: "50px",
            xs: "20px",
          },
        }}
      >
        Dont’s
      </Typography>
      {tripDetail?.dontsHealth?.map((item, index) => {
        return (
          <Box
            sx={{
              margin: {
                lg: "0 70px 0 70px",
                md: "0 50px 0 50px",
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
              color={index % 2 == 0 ? "#F9F9F9" : "#FFFFFF"}
            ></TextRender>
          </Box>
        );
      })}

      <Footer />
      <Itinerary
        open={saveModal}
        handleModel={() => setSaveModal(!saveModal)}
        modalFor="save"
      />
      <Itinerary
        open={openModal}
        handleModel={() => setOpenModal(!openModal)}
        modalFor="new"
      />
    </div>
  );
};
export default TripDetail;

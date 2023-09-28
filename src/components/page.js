"use client";
import {  forwardRef} from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import "./printStyles.css";
import CircleIcon from "@mui/icons-material/Circle";
import TextRender from "./atomic/TextRender/textRender";
import * as COLORS from "@/constants/colors";

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
  ({ cityCountry, tripDetail, cityImage, datee }, ref) => {
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
                  {cityCountry?.city?.length > 0
                    ? cityCountry?.city?.join(", ").replace(/, $/, "")
                    : cityCountry?.country}{" "}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

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
                alignItems: "flex-start",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {tripDetail?.trip?.map((item, tripIndex) => {
                const date = new Date(
                  datee.setDate(datee.getDate() + tripIndex)
                );
                return (
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
                      {date.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
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
                            <Box
                              component={"img"}
                              src={`${process.env.NEXT_PUBLIC_API_URL}assets/location.png`}
                              alt="name-icon"
                              sx={{ height: "15px", width: "15px" }}
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
                                <Box
                                  component={"img"}
                                  src={`${process.env.NEXT_PUBLIC_API_URL}assets/star.png`}
                                  alt="name-icon"
                                  sx={{ height: "15px", width: "15px" }}
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
                                <Box
                                  component={"img"}
                                  src={`${process.env.NEXT_PUBLIC_API_URL}assets/time.png`}
                                  alt="name-icon"
                                  sx={{ height: "15px", width: "15px" }}
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
                                    {activity.time}
                                  </Typography>
                                  <Box
                                    sx={{
                                      paddingTop: "15px",
                                      width: "100%",
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
                    </Box>
                    {tripIndex != tripDetail.length - 1 ? (
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
                );
              })}
            </Box>
          </Container>
        </Box>
        <Container>
          <Box
            sx={{
              width: "100%",
              backgroundColor: COLORS.white,
              marginBottom: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              paddingRight: "20px",
              paddingLeft: "10px",
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
              {tripDetail?.restaurants?.length > 0 && (
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    width: "100%",
                    fontFamily: "Raleway",
                  }}
                >
                  Restaurants
                </Typography>
              )}
            </Box>

            <Box>
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
                    <TextRenderOfResturant
                      name={item.restaurant}
                      description={item.description}
                      location={item.location}
                    ></TextRenderOfResturant>
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
            </Box>
          </Box>
          {tripDetail?.dosCulture?.length > 0 &&
            tripDetail?.dontsCulture?.length > 0 && (
              <Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
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
                  >
                    Culture
                  </Typography>
                </Box>

                <Box>
                  {tripDetail?.dosCulture?.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: {
                          lg: "70px",
                          md: "50px",
                          xs: "20px",
                        },
                      }}
                    >
                      <Box
                        component={"img"}
                        src={`${process.env.NEXT_PUBLIC_API_URL}assets/do.png`}
                        alt="name-icon"
                        sx={{ height: "15px", width: "15px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily: "Raleway",
                          marginLeft: "10px",
                        }}
                      >
                        Do’s
                      </Typography>
                    </Box>
                  )}
                  {tripDetail?.dosCulture?.length > 0 &&
                    tripDetail?.dosCulture?.map((item, index) => {
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
                            color={"#FFFFFF"}
                          ></TextRender>
                        </Box>
                      );
                    })}
                  <Box
                    sx={{
                      width: "100%",
                      height: "20px",
                    }}
                  />
                  {tripDetail?.dontsCulture?.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: {
                          lg: "70px",
                          md: "50px",
                          xs: "20px",
                        },
                      }}
                    >
                      <Box
                        component={"img"}
                        src={`${process.env.NEXT_PUBLIC_API_URL}assets/dont.png`}
                        alt="name-icon"
                        sx={{ height: "15px", width: "15px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily: "Raleway",
                          marginLeft: "10px",
                        }}
                      >
                        Dont’s
                      </Typography>
                    </Box>
                  )}

                  {tripDetail?.dontsCulture?.length > 0 &&
                    tripDetail?.dontsCulture?.map((item, index) => {
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
                            color={"#FFFFFF"}
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
                  ></Box>
                </Box>
              </Box>
            )}
          {tripDetail?.dosHealth?.length > 0 &&
            tripDetail?.dontsHealth?.length > 0 && (
              <Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
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
                  >
                    Health
                  </Typography>
                </Box>

                <Box>
                  {tripDetail?.dosHealth?.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: {
                          lg: "70px",
                          md: "50px",
                          xs: "20px",
                        },
                      }}
                    >
                      <Box
                        component={"img"}
                        src={`${process.env.NEXT_PUBLIC_API_URL}assets/do.png`}
                        alt="name-icon"
                        sx={{ height: "15px", width: "15px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily: "Raleway",
                          marginLeft: "10px",
                        }}
                      >
                        Do’s
                      </Typography>
                    </Box>
                  )}
                  {tripDetail?.dosHealth?.length > 0 &&
                    tripDetail?.dosHealth?.map((item, index) => {
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
                            color={"#FFFFFF"}
                          ></TextRender>
                        </Box>
                      );
                    })}
                  <Box
                    style={{
                      width: "100%",
                      height: "20px",
                    }}
                  />
                  {tripDetail?.dontsHealth?.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: {
                          lg: "70px",
                          md: "50px",
                          xs: "20px",
                        },
                      }}
                    >
                      <Box
                        component={"img"}
                        src={`${process.env.NEXT_PUBLIC_API_URL}assets/dont.png`}
                        alt="name-icon"
                        sx={{ height: "15px", width: "15px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily: "Raleway",
                          marginLeft: "10px",
                        }}
                      >
                        Dont’s
                      </Typography>
                    </Box>
                  )}

                  {tripDetail?.dontsHealth?.length > 0 &&
                    tripDetail?.dontsHealth?.map((item, index) => {
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
                            color={"#FFFFFF"}
                          ></TextRender>
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            )}
        </Container>
      </div>
    );
  }
);
export default PrintScreen;

"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useReducer, useState, useRef } from "react";
import * as COLORS from "@/constants/colors";
import AppBar from "@/components/navbar";
import { useParams, useRouter } from "next/navigation";
import { questionsHedaing, questionaires } from "@/constants/questions";
import CheckIcon from "@mui/icons-material/Check";
import { DataContext, dataReducer } from "@/app/questionaire/context";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Recaptchs from "@/components/recaptcha_modal";
import ProtectedPageRoute from "../protected-page-route";
import createTrip from "@/apis/createTrip";
import loadingGif from "@/assets/images/tripDetails/loader.gif";
import Image from "next/image";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Layout({ children }) {
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");
  const [recaptchaOpen, setRecaptchaOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const [data, dispatch] = useReducer(dataReducer, {
    questionNumber: 0,
  });

  useEffect(() => {
    if (data.questionNumber != 0) {
      localStorage.setItem("questionaireData", JSON.stringify(data));
    }
  }, [data]);

  const handelNextQuestion = () => {
    router.push("/questionaire/" + questionaires[indexOfQuestion].navTitle);
    dispatch({
      type: "UPDATE_QUESTION_NUMBER",
      payload: indexOfQuestion + 1,
    });
    setIndexOfQuestion(indexOfQuestion + 1);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("questionaireData");
    if (savedData && savedData.length > 0) {
      dispatch({
        type: "UPDATE_DATA",
        payload: JSON.parse(savedData),
      });
      dispatch({
        type: "UPDATE_QUESTION_NUMBER",
        payload: JSON.parse(savedData).questionNumber,
      });
      setIndexOfQuestion(JSON.parse(savedData).questionNumber);
    } else {
      console.log("data not found in local storage");
      dispatch({
        type: "UPDATE_QUESTION_NUMBER",
        payload: 0,
      });
      setIndexOfQuestion(0);
    }
    return () => {
      localStorage.removeItem("questionaireData");
    };
  }, []);

  const handleCreateTrip = async () => {
    setLoading(true);
    const response = await createTrip(data);
    setLoading(false);
    if (response.message == "Trip created") {
      router.push("/trip-detail/" + response.data);
    }
  };

  if (loading) {
    return (
      <div>
        <AppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: { md: "90vh", xs: "calc(100vh - 64px)" },
            backgroundColor: "#FCFCFF",
          }}
        >
          <Image src={loadingGif} height={200} width={200}></Image>
          <Typography>Please wait while we are creating your trip</Typography>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert onClose={() => setOpen(false)} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <AppBar />
        <Recaptchs
          open={recaptchaOpen}
          handleModel={async (value) => {
            console.log("handleModel");
            setRecaptchaOpen(false);
            if (value) {
              handleCreateTrip();
            }
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: { md: "90vh", xs: "calc(100vh - 64px)" },
            backgroundColor: COLORS.primary,
          }}
        >
          <Box
            sx={{
              width: { md: "80%", xs: "100%" },
              backgroundColor: "#F9F9F9",
              borderRadius: { md: "20px", xs: "0" },
              display: "flex",
              flexDirection: "row",

              height: { lg: "80%", xs: "100%" },
            }}
          >
            <Box
              sx={{
                width: { md: "270px", xs: "60px" },
                display: "flex",
                paddingTop: { md: "60px", xs: "20px" },
                borderRight: 1,
                paddingBottom: { xs: "20px" },
                paddingX: { md: "0", xs: "20px" },
                borderColor: "#D2D4DA",
              }}
            >
              <Box
                sx={{
                  display: {
                    md: "none",
                    xs: "flex",
                  },
                  justifyContent: "start",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {questionaires.map((question, index) => (
                  <Box
                    onClick={() => {
                      if (index <= indexOfQuestion) {
                        router.push(
                          "/questionaire/" + questionaires[index].navTitle
                        );
                        dispatch({
                          type: "UPDATE_QUESTION_NUMBER",
                          payload: index,
                        });
                        setIndexOfQuestion(index);
                      }
                    }}
                    sx={{
                      display: {
                        md: "none",
                        xs: "flex",
                      },
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    key={question.navTitle}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: "30px",
                        height: "30px",
                        borderRadius: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid",
                        borderColor:
                          indexOfQuestion == index || indexOfQuestion > index
                            ? "#2B92D5"
                            : "#D2D4DA",
                        color:
                          indexOfQuestion == index || indexOfQuestion > index
                            ? "#F9F9F9"
                            : "#D2D4DA",
                        backgroundColor:
                          indexOfQuestion == index || indexOfQuestion > index
                            ? "#2B92D5"
                            : "transparent",
                      }}
                    >
                      {index < indexOfQuestion ? (
                        <CheckIcon
                          fontSize="small"
                          sx={{
                            color: COLORS.white,
                            width: 15,
                            height: 15,
                            padding: "1px",
                          }}
                        />
                      ) : (
                        <p style={{ marginTop: -5 }}>{index + 1}</p>
                      )}
                    </Box>
                    {index < questionaires.length - 1 ? (
                      <Box
                        sx={{
                          width: "1px",
                          height: "30px",
                          background:
                            indexOfQuestion > index ? "#2B92D5" : "#D2D4DA",
                        }}
                      />
                    ) : null}
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {questionaires.map((question, index) => {
                  return (
                    <Box
                      sx={{
                        display: { md: "flex", xs: "none" },
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        backgroundColor: COLORS.answeredQuestionColor,
                      }}
                      key={question}
                      onClick={() => {
                        if (index <= indexOfQuestion) {
                          router.push(
                            "/questionaire/" + questionaires[index].navTitle
                          );
                          dispatch({
                            type: "UPDATE_QUESTION_NUMBER",
                            payload: index,
                          });
                          setIndexOfQuestion(index);
                        }
                      }}
                    >
                      <Typography
                        key={index}
                        sx={{
                          fontSize: "18px",
                          lineHeight: "51px",
                          fontWeight: "500",
                          fontFamily: "raleway",
                          paddingLeft: "30px",
                          width: "100%",
                          color: COLORS.questionHeadingColor,
                          textAlign: "left",
                          backgroundColor:
                            index < indexOfQuestion
                              ? COLORS.answeredQuestionColor
                              : indexOfQuestion == index
                              ? "#E2E8FF"
                              : "#F9F9F9",
                          cursor: "pointer",
                        }}
                      >
                        {question.navTitle}
                      </Typography>
                      {index < indexOfQuestion && (
                        <Box
                          sx={{
                            backgroundColor: COLORS.primary,
                            borderRadius: 5,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 1,
                          }}
                        >
                          <CheckIcon
                            fontSize="small"
                            sx={{
                              color: COLORS.white,
                              width: 15,
                              height: 15,
                              padding: "1px",
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>
            {/* Web */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                width: "100%",
                gap: "20px",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  flex: "auto",
                  overflow: "auto",
                  padding: {
                    md: "30px",
                    xs: "15px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      md: "28px",
                      xs: "20px",
                    },
                    fontWeight: "600",
                    fontFamily: "Raleway",
                    marginBottom: "15px",
                  }}
                >
                  {questionaires[indexOfQuestion]?.title}
                </Typography>
                <DataContext.Provider
                  value={{
                    data,
                    dispatch,
                  }}
                >
                  <Box
                    sx={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {children}
                  </Box>
                </DataContext.Provider>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  height: {
                    md: "20%",
                    xs: "10%",
                  },
                  justifyContent: "end",
                  alignItems: "center",
                  padding: {
                    md: "30px",
                    xs: "15px",
                  },
                }}
              >
                <Button
                  sx={{
                    color: "#333",
                    borderRadius: "20px",
                    width: "128px",
                    height: "41px",
                  }}
                  onClick={() => {
                    if (indexOfQuestion >= 1) {
                      router.push(
                        "/questionaire/" +
                          questionaires[indexOfQuestion - 1].navTitle
                      );
                      dispatch({
                        type: "UPDATE_QUESTION_NUMBER",
                        payload: indexOfQuestion - 1,
                      });
                      setIndexOfQuestion(indexOfQuestion - 1);
                    } else if (indexOfQuestion == 0) {
                      router.push("/");
                    }
                  }}
                >
                  Back
                </Button>
                <Button
                  id="submitFormButton"
                  sx={{
                    backgroundColor: COLORS.primary,
                    color: "white",
                    borderRadius: "20px",
                    width: "128px",
                    height: "41px",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = COLORS.primary;
                  }}
                  onClick={() => {
                    if (indexOfQuestion <= 4) {
                      if (indexOfQuestion == 0 && (data.country || data.city)) {
                        handelNextQuestion();
                      } else if (
                        indexOfQuestion == 1 &&
                        (data.numberOfDays > 0 ||
                          (data.startDate && data.endDate))
                      ) {
                        handelNextQuestion();
                      } else if (indexOfQuestion == 2 && data.travelingWith) {
                        handelNextQuestion();
                      } else if (indexOfQuestion == 3 && data.interest) {
                        handelNextQuestion();
                      } else if (indexOfQuestion == 4 && data.food) {
                        console.log("data", data);
                        const user = ProtectedPageRoute();
                        if (user) {
                          if (!hasCookie("userForm")) {
                            setRecaptchaOpen(true);
                            setCookie("userForm", false);
                          } else {
                            if (getCookie("userForm") == true) {
                              setCookie("userForm", false);
                              setRecaptchaOpen(true);
                            } else {
                              handleCreateTrip();
                              setCookie("userForm", true);
                            }
                          }
                        } else {
                          document.getElementById("loginButton").click();
                        }
                      } else {
                        setOpen(true);
                        setMessage("Please answer the question");
                        setSeverity("error");
                      }
                    }
                  }}
                >
                  {indexOfQuestion == 4 ? "Submit" : "Next"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

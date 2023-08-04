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
import { Router } from "next/router";
import ProtectedPageRoute from "../protected-page-route";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Layout({ children }) {
  const params = useParams();
  const signInRef = useRef();
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");
  const [recaptchaOpen, setRecaptchaOpen] = React.useState(false);

  const router = useRouter();
  const [data, dispatch] = useReducer(dataReducer, {
    questionNumber: 0,
  });

  useEffect(() => {
    localStorage.setItem("questionaireData", JSON.stringify(data));
  }, [data]);

  const removeSpaceFromURL = (url) => {
    //i got this where%20to and i want it to be where to
    const newUrl = url.replace(/%20/g, " ");
    return newUrl;
  };

  const handelNextQuestion = () => {
    router.push("/questionaire/" + questionaires[indexOfQuestion].navTitle);
    dispatch({
      type: "UPDATE_QUESTION_NUMBER",
      payload: indexOfQuestion + 1,
    });
    setIndexOfQuestion(indexOfQuestion + 1);
  };

  useEffect(() => {
    //it must run only once
    const savedData = localStorage.getItem("questionaireData");
    if (savedData) {
      dispatch({
        type: "UPDATE_DATA",
        payload: JSON.parse(savedData),
      });
    }
    return () => {
      localStorage.removeItem("questionaireData");
    };
  }, []);

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
        handleModel={() => {
          console.log("handleModel");
          setRecaptchaOpen(false);
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
            overflow: "hidden",
            height: { lg: "80%", xs: "100%" },
          }}
        >
          <Box
            sx={{
              width: { md: "270px" },
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
              padding: {
                md: "30px",
                xs: "15px",
              },
              width: "100%",

              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "600",
                fontFamily: "Raleway",
                marginBottom: "15px",
                maxWidth: "394px",
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
                  height: { md: "360px", sm: "50%", xs: "50%" },
                  overflow: "auto",
                  flex: "5",
                }}
              >
                {children}
              </Box>
            </DataContext.Provider>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                flex: "1",
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
                //onClick={nextHandler}
                onClick={() => {
                  if (indexOfQuestion <= 4) {
                    if (indexOfQuestion == 0 && (data.country || data.city)) {
                      handelNextQuestion();
                    } else if (
                      indexOfQuestion == 1 &&
                      ((data.monthOfTravel && data.numberOfDays) ||
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
                        setRecaptchaOpen(true);
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

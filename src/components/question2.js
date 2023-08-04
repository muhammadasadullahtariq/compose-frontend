import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import React, { useContext, useEffect } from "react";
import * as COLORS from "@/constants/colors";
import tripLength from "../assets/images/icons/tripLength.svg";
import Counter from "./atomic/counter";
import { months } from "@/constants/months";
import Or from "./Or";
import calender from "../assets/images/icons/calender.svg";
import { Datepicker } from "./atomic/datepicker/datepicker";

const Question2 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [formData, setFormData] = React.useState({
    length: 3,
    month: "",
    date: { to: "Start date", from: "End date" },
  });
  console.log(data, "data");
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    dispatch({ type: "UPDATE_DATA", payload: { monthOfTravel: value } });
  };

  useEffect(() => {
    setFormData({
      length: data.numberOfDays || 3,
      month: data.monthOfTravel || "",
      date: {
        from: data.startDate || "",
        to: data.endDate || "",
      },
    });
  }, []);

  useEffect(() => {
    if (formData.month !== "") {
      dispatch({
        type: "UPDATE_DATA",
        payload: {
          monthOfTravel: formData.month,
          numberOfDays: formData.length,
        },
      });
    }
    if (
      formData.date.from !== "Start date" &&
      formData.date.to !== "End date"
    ) {
      dispatch({
        type: "UPDATE_DATA",
        payload: {
          startDate: formData.date.from,
          endDate: formData.date.to,
        },
      });
    }
  }, [formData]);

  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            md: "20px",
            xs: "15px",
          },
          flexWrap: "nowrap",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: "14px",
          }}
        >
          Choose a date range or length of stay (up to 7 days)
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src={tripLength} />
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "6px",
            }}
          >
            Trip length
          </Typography>
        </Box>
        <Counter
          value={formData.length}
          handleSetValue={(length) => {
            console.log("length", length);
            setFormData({ ...formData, length });
          }}
        />

        <Box
          sx={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            During what month
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              md: "80%",
              xs: "100%",
            },
            overflow: "scroll",
            display: "flex",
            flexWrap: "nowrap",
            gap: "10px",
            padding: "5px",
          }}
        >
          {months.map((el) => (
            <Box
              key={el.name}
              onClick={() => setFormData({ ...formData, month: el.name })}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Image
                src={el.image}
                style={{
                  outline:
                    formData.month === el.name ? "2px solid #2b92d5" : "",
                  borderRadius: "12px",
                  marginTop: "2px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {el.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Or />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src={calender} />
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "6px",
            }}
          >
            Have exact dates in mind
          </Typography>
        </Box>
        <Box sx={{}}>
          <Datepicker
            date1={formData.date.from}
            date2={formData.date.to}
            handleDate={(date, value) => {
              if (date === 1) {
                setFormData({
                  ...formData,
                  date: { ...formData.date, from: value },
                });
              } else {
                setFormData({
                  ...formData,
                  date: { ...formData.date, to: value },
                });
              }
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Question2;

import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import React, { useContext, useEffect, useState } from "react";
import * as COLORS from "@/constants/colors";
import tripLength from "../assets/images/icons/tripLength.svg";
import Counter from "./atomic/counter";
import { months } from "@/constants/months";
import Or from "./Or";
import calender from "../assets/images/icons/calender.svg";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./qtStyles.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Question2 = () => {
  const { data, dispatch } = useContext(DataContext);

  const [formData, setFormData] = React.useState({
    length: 3,
    date: null,
  });

  useEffect(() => {
    console.log(data.startDate);
    setFormData({
      length: parseInt(data.numberOfDays) || 3,
      date: data.startDate || "",
    });
  }, []);

  useEffect(() => {
    console.log(formData);
    console.log(new Date(formData.date));
    if (formData.date !== "") {
      dispatch({
        type: "UPDATE_DATA",
        payload: {
          startDate: formData.date,
          numberOfDays: formData.length,
        },
      });
    }
  }, [formData]);

  return (
    <Box sx={{ width: "100%" }}>
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
          Choose trip start date and length
        </Typography>
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
            Select trip start date?
          </Typography>
        </Box>

        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Please select start date"
                value={formData.date == "" ? dayjs() : dayjs(formData.date)}
                onError={console.log}
                minDate={dayjs()}
                onChange={(newValue) => {
                  setFormData({
                    ...formData,
                    date: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
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
          formData={formData}
          handleSetValue={(length) => {
            setFormData({ ...formData, length: length * 1 });
          }}
        />
      </Grid>
    </Box>
  );
};

export default Question2;

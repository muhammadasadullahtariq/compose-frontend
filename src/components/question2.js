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

const Question2 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [showCalender, setShowCalender] = useState(false);

  const [formData, setFormData] = React.useState({
    length: 3,
    month: "",
    //from set to current date
    date: { to: "", from: "" },
  });
  const handleButtonClick = (value) => {
    dispatch({ type: "UPDATE_DATA", payload: { monthOfTravel: value } });
  };

  useEffect(() => {
    setFormData({
      length: parseInt(data.numberOfDays) || 3,
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

  const handelOpenClose = () => {
    setShowCalender(!showCalender);
  };

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
          Choose a trip length or exact dates.
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
          formData={formData}
          handleSetValue={(length) => {
            setFormData({ ...formData, length: length * 1 });
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
            During what month?
          </Typography>
          <Typography
            sx={{
              color: "#9496A1",
              fontFamily: "Raleway",
              fontSize: "10px",
              textAlign: "right",
              marginLeft: "5px",
            }}
          >
            ( optional )
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
              onClick={() => {
                if (
                  formData.date.from.length > 0 ||
                  formData.date.to.length > 0
                )
                  return;
                setFormData({ ...formData, month: el.name });
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  outline:
                    formData.month === el.name ? "2px solid #2b92d5" : "",
                  borderRadius: "10px",
                  marginTop: "2px",
                  width: {
                    md: "60px",
                    xs: "60px",
                  },
                  height: {
                    md: "60px",
                    xs: "60px",
                  },
                  backgroundImage: `url(${el.image})`,
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
        <Or margin={{ lg: "0px 0px", md: "10px 0 ", xs: "5px 0" }} />
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
            Have exact dates in mind?
          </Typography>
        </Box>
        <Box
          onClick={() => {
            setShowCalender(true);
          }}
          display={!showCalender ? "block" : "none"}
          sx={{
            border: `2px solid ${COLORS.primary}`,
            padding: "10px",
            borderRadius: "12px",
            cursor: "pointer",
            //width: { md: "40%", xs: "50%", lg: "20%" },
            //only ocupy content width
            width: "fit-content",
          }}
        >
          <Typography>
            {formData.date.from !== "" && formData.date.to !== ""
              ? `${formData.date.from.getDate()} ${
                  months[formData.date.from.getMonth()].name
                } - ${formData.date.to.getDate()} ${
                  months[formData.date.to.getMonth()].name
                }`
              : "Please Select Dates"}
          </Typography>
        </Box>
        <Box display={showCalender ? "block" : "none"}>
          <DateRangePicker
            style={{
              width: "100%",
            }}
            ranges={[
              {
                startDate: formData.date.from,
                endDate: formData.date.to,
                key: "selection",
              },
            ]}
            onChange={(item) => {
              setFormData({
                ...formData,
                date: {
                  from: item.selection.startDate,
                  to: item.selection.endDate,
                },
              });
            }}
            months={1}
            direction="horizontal"
            editableDateInputs={true}
            showSelectionPreview={true}
            rangeColors={[COLORS.primary]}
            minDate={new Date()}
            
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Question2;

import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import React, { useContext } from "react";
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
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    dispatch({ type: "UPDATE_DATA", payload: { monthOfTravel: value } });
  };

  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          fontFamily: "Raleway",
          fontSize: "14px",
          marginBottom: "18px",
        }}
      >
        Choose a date range or length of stay (up to 7 days)
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "17px",
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
      <Counter />
      <Typography
        sx={{
          color: "#9496A1",
          fontFamily: "Raleway",
          fontSize: "10px",
          marginTop: "48px",
          alignSelf: "flex-end",
        }}
      >
        7 days maximum
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginTop: "9px",
          marginBottom: "15px",
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
        <Typography
          sx={{
            color: "#9496A1",
            fontFamily: "Raleway",
            fontSize: "10px",
            alignSelf: "center",
            marginLeft: "6px",
          }}
        >
          (optional)
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          overflow: "scroll",
          display: "flex",
          flexWrap: "nowrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {months.map((el) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={el.image} />
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
          marginBottom: "17px",
          marginTop: "20px",
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
      <Datepicker />
    </Grid>
  );
};

export default Question2;

import { Box, Typography, Grid, Divider, TextField } from "@mui/material";
import React, { useContext } from "react";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions1 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import CustomAutocomplete from "./atomic/autocomplete";
import country from "../assets/images/icons/country.svg";
import cities from "../assets/images/icons/cities.svg";
import { citiesList } from "@/constants/cities";
import { countries } from "../constants/countries.js";
import Or from "./Or";
import Autocomplete from "./atomic/autocompleteSingle";

const Question1 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    dispatch({ type: "UPDATE_DATA", payload: { country: value } });
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "90%", lg: "80%" },
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "17px",
        }}
      >
        <Image src={country} />
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: "14px",
            fontWeight: "600",
            marginLeft: "6px",
          }}
        >
          I already know the country
        </Typography>
      </Box>
      <Autocomplete list={countries} />

      <Box sx={{ margin: "32px 0px" }}>
        <Or />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "17px",
        }}
      >
        <Image src={cities} />
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: "14px",
            fontWeight: "600",
            marginLeft: "6px",
          }}
        >
          I already know the cities
        </Typography>
      </Box>
      <CustomAutocomplete list={citiesList} />
    </Box>
  );
};

export default Question1;

import { Box, Typography, Grid, Divider, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions1 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import CustomAutocomplete from "./atomic/autocomplete";
import countryIcon from "../assets/images/questionaires/country.svg";
import cities from "../assets/images/icons/cities.svg";
import { citiesList } from "@/constants/cities";
import { countries } from "../constants/countries.js";
import Or from "./Or";
import Autocomplete from "./atomic/autocompleteSingle";

const Question1 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const handleButtonClick = () => {
    if (country.length != "" || city.length != 0) {
      dispatch({ type: "UPDATE_DATA", payload: { city: city } });
      dispatch({ type: "UPDATE_DATA", payload: { country: country } });
    }
  };
  useEffect(() => {
    setCountry(data.country || "");
    setCity(data.city || "");
  }, []);
  React.useEffect(() => {
    handleButtonClick();
  }, [city, country]);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "90%", lg: "80%" },
        height: "100%",
        marginTop: {
          md: "15px",
          xs: "0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: {
            md: "20px",
            xs: "15px",
          },
        }}
      >
        <Image src={countryIcon} />
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
      <Autocomplete
        list={countries}
        setCountry={setCountry}
        country={country}
        city={city}
      />

      <Box
        sx={{
          margin: {
            md: "30px 0px",
            xs: "25px 0px",
          },
        }}
      >
        <Or />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: {
            md: "20px",
            xs: "15px",
          },
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
          <Typography
            as="span"
            sx={{
              color: "#9496A1",
              fontFamily: "Raleway",
              fontSize: "10px",
              alignSelf: "center",
              marginLeft: "6px",
            }}
          >
            (comma separated)
          </Typography>
        </Typography>
      </Box>
      <CustomAutocomplete cities={city} setCities={setCity} list={citiesList} />
    </Box>
  );
};

export default Question1;

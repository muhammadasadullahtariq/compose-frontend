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
import getAllDestinations from "@/apis/getListOfCities";

const Question1 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [city, setCity] = React.useState("");
  const [countries, setCountries] = React.useState(citiesList);
  const [destinationId, setDestinationId] = React.useState("");
  const handleButtonClick = () => {
    if (city.length != 0) {
      console.log(city);
      console.log(destinationId);
      dispatch({
        type: "UPDATE_DATA",
        payload: { city: city, destinationId: destinationId },
      });
    }
  };
  useEffect(() => {
    setCity(data.city || "");
    (async () => {
      const data = await getAllDestinations();
      console.log(data);
      setCountries(data.data);
    })();
  }, []);
  React.useEffect(() => {
    handleButtonClick();
  }, [city, destinationId]);

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
      {/* <Box
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
      </Box> */}

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
          Enter the city you are going to
        </Typography>
      </Box>
      <CustomAutocomplete
        cities={city}
        setDestinationId={setDestinationId}
        setCities={setCity}
        list={countries}
      />
    </Box>
  );
};

export default Question1;

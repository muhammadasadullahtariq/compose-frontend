import { Grid, Box, Typography } from "@mui/material";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions4 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import Chip from "./atomic/chip";
import activities from "@/constants/activities";
import { useState } from "react";
import Input from "./atomic/input";

const Question4 = () => {
  const handleButtonClick = () => {
    dispatch({ type: "UPDATE_DATA", payload: { purposeOfTrip: "someValue" } });
  };
  const [selected, setSelected] = useState([]);

  const handleSelect = (name) => {
    if (selected.includes(name)) {
      let newSelected = selected.filter((el) => el !== name);
      setSelected(newSelected);
    } else {
      setSelected((curr) => [...curr, name]);
    }
  };

  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{ fontFamily: "Raleway", fontSize: "14px", marginBottom: "15px" }}
      >
        Choose as many as you'd like
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {activities.map((el) => (
          <Box key={el.name} onClick={() => handleSelect(el.name)}>
            <Chip
              icon={el.image}
              name={el.name}
              selected={selected.includes(el.name)}
            />
          </Box>
        ))}
      </Box>
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
          Others
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input />
        <Typography
          sx={{
            color: "#9496A1",
            fontFamily: "Raleway",
            fontSize: "10px",
            alignSelf: "flex-start",
            marginLeft: "6px",
          }}
        >
          separate each entry with a comma
        </Typography>
      </Box>
    </Grid>
  );
};

export default Question4;

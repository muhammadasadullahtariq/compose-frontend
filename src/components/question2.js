import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import React, { useContext } from "react";
import * as COLORS from "@/constants/colors";

const Question2 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    dispatch({ type: "UPDATE_DATA", payload: { monthOfTravel: value } });
  };

  return (
    <Grid container sx={{ gap: { lg: "20px", xs: "10px" } }}>
      {questions3.map((item) => (
        <Grid item key={item} lg={2} xs={12} md={3} sm={4}>
          <div
            onClick={() => handleButtonClick(item.title)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "5px",
            }}
          >
            <Image
              style={{
                //border shadow
                boxShadow:
                  selectedValue == item.title
                    ? `0 0 0 3px ${COLORS.primary}`
                    : "none",

                borderRadius: "20px",
                padding: "0px",
              }}
              src={item.image}
              alt={item}
            />
            <Typography
              as="p"
              sx={{
                textAlign: "center",
                width: "100%",
                fontWeight: "500",
                marginTop: "7px",
              }}
            >
              {item.title}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question2;

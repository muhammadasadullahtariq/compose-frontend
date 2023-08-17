import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";
import React, { useContext, useEffect } from "react";
import * as COLORS from "@/constants/colors";
import { useMediaQuery } from "react-responsive";

const Question2 = () => {
  const { data, dispatch } = useContext(DataContext);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    dispatch({ type: "UPDATE_DATA", payload: { travelingWith: value } });
  };
  const isSmall = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    setSelectedValue(data.travelingWith || "");
  }, []);

  return (
    <Box
      sx={{
        marginTop: {
          md: "15px",
          xs: "0",
        },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: {
            md: "20px",
            xs: "15px",
          },
          justifyContent: {
            sm: "flex-start",
            xs: "center",
          },
          padding: "5px 0",
        }}
      >
        {questions3.map((item) => (
          <Grid item key={item}>
            <div
              onClick={() => handleButtonClick(item.title)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: isSmall ? "116px" : "116px",
                  height: isSmall ? "119px" : "119px",
                  borderRadius: "10px",
                  padding: "0px",
                  outline:
                    selectedValue != item.title
                      ? ``
                      : `2px solid ${COLORS.primary}`,
                  backgroundImage: `url(${item.image})`,
                }}
              >
                {/* <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={item.image}
                  alt={item}
                /> */}
              </Box>

              <Typography
                as="p"
                sx={{
                  fontFamily: "Raleway",
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
    </Box>
  );
};

export default Question2;

"use client";
import { Box, Typography } from "@mui/material";

const TextRender = ({ name, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: {
          lg: "0 50px 0 50px",
          md: "0 30px 0 30px",
          xs: "0 20px 0 20px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          fontFamily: "Raleway",
          padding: "5px 0",
        }}
      >
        {name}
        <Typography
          as="span"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "Raleway",
            //padding: "27px 0 27px 0",
          }}
        >
          {description}
        </Typography>
      </Typography>
    </Box>
  );
};

export default TextRender;

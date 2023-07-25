import React from "react";
import {
  questionBlockBlueColor,
  questionBlockGrayColor,
} from "@/constants/colors";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { questions7 } from "@/constants/questions";

const Question7 = () => {
  return (
    <Grid container sx={{ gap: "20px" }}>
      {questions7.map((item) => (
        <Grid
          item
          key={item.title}
          lg={5}
          sx={{
            background: item.bg,
            overflow: "hidden",
            padding: "20px 20px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              flexDirection: "row",
              gap: "40px",
            }}
          >
            <Image src={item.image} alt={item.title} width={100} height={100} />
            <Typography variant="p" sx={{ fontWeight: "500" }}>
              {item.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question7;

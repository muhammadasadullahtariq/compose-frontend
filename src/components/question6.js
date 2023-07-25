import React from "react";

import { Grid, Box, Typography } from "@mui/material";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions6 } from "@/constants/questions";

const Question7 = () => {
  return (
    <Grid container sx={{ gap: "20px" }}>
      {questions6.map((item, index) => (
        <Grid
          item
          key={item}
          lg={2}
          sx={{
            background:
              index % 2 == 0
                ? COLORS.questionBlockBlueColor
                : COLORS.questionBlockGrayColor,
            overflow: "hidden",
            padding: "15px",
            borderRadius: "10px",
            height: "115px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              gap: "10px",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Image src={item.image} alt={item.title} width={40} height={40} />
            <Typography
              variant="p"
              sx={{ fontWeight: "500", textAlign: "center" }}
            >
              {item.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question7;

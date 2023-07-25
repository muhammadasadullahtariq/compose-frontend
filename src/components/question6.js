import React from "react";

import { Grid, Box, Typography } from "@mui/material";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions6 } from "@/constants/questions";
import "./styles.css";

const Question7 = () => {
  return (
    <Grid className="question6" container sx={{ gap: "20px" }}>
      {questions6.map((item, index) => (
        <Grid
          item
          key={item}
          xs={3}
          sm={2}
          md={2}
          lg={2}
          sx={{
            background:
              index % 2 == 0
                ? COLORS.questionBlockBlueColor
                : COLORS.questionBlockGrayColor,
            overflow: "hidden",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            height: { lg: "115px", sm: "88px", md: "100px", xs: "88px" },
            width: { lg: "115px", sm: "88px", md: "100px", xs: "88px" },
          }}
        >
          <Image src={item.image} alt={item.title} />
          <Typography
            variant="p"
            sx={{
              fontWeight: "500",
              textAlign: "center",
              fontSize: { lg: "18px", sm: "12px", md: "16px", xs: "12px" },
            }}
          >
            {item.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question7;

import React from "react";
import {
  questionBlockBlueColor,
  questionBlockGrayColor,
} from "@/constants/colors";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { questions7 } from "@/constants/questions";
import './styles.css'

const Question7 = () => {
  return (
    <Box
      sx={{
        width: {sm: '100%', md: '100%', lg: "100%"},
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        {questions7.map((item) => (
          <Grid
            item
            key={item.title}
            lg={5}
            xs={12}
            sm={6}
          >
            <Box
              sx={{
                background: item.bg,
                padding: "20px 20px",
                height: '100%',
                display: "flex",
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
                alignItems: "center",
                justifyContent: "start",
                borderRadius: "20px",
                gap: { md: 5, xl: 10 },
              }}
            >
              <Image src={item.image} alt={item.title} width={100} height={100} />
              <Typography  variant="p" sx={{  textAlign: { xs: 'center', sm: 'center' }, fontWeight: "500", fontSize: '21px' }}>
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Question7;

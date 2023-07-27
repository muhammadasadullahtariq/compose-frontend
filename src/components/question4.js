import { Grid, Box, Typography } from "@mui/material";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import { questions4 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";

const Question4 = () => {
   const handleButtonClick = () => {
     dispatch({ type: "UPDATE_DATA", payload: { purposeOfTrip: "someValue" } });
   };

  return (
    <Grid container sx={{ gap: "20px" }}>
      {questions4.map((item) => (
        <Grid
          item
          key={item}
          lg={3}
          sx={{
            background: item.bg,
            overflow: "hidden",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              gap: "50px",
            }}
          >
            <Image src={item.image} alt={item.title} width={120} height={120} />
            <Typography variant="p" sx={{ fontWeight: "500" }}>
              {item.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question4;

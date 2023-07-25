import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";

const Question3 = () => {
  return (
    <Grid container sx={{ justifyContent: "space-between", gap: "15px" }}>
      {questions3.map((item) => (
        <Grid item key={item} lg={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Image src={item.image} alt={item} width={140} />
            <Typography variant="p" sx={{ fontWeight: "500" }}>
              {item.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question3;

import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";

const Question2 = () => {
  return (
    <Grid container>
      {questions3.map((item) => (
        <Grid item key={item} lg={2} xs={12} md={4} sm={6}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={item.image} alt={item} />
            <Typography as="p" sx={{ textAlign: 'center', width: '100%', fontWeight: "500" }}>
              {item.title}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Question2;

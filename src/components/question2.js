import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { questions3 } from "@/constants/questions";
import { DataContext } from "@/app/questionaire/context";

const Question2 = ({ question }) => {
   const handleButtonClick = () => {
     dispatch({ type: "UPDATE_DATA", payload: { purposeOfTrip: "someValue" } });
   };

  console.log(question, "question");
  return (
    <Grid container sx={{ gap: { lg: "20px", xs: "10px" } }}>
      {question.items.map((item) => (
        <Grid item key={item} lg={2} xs={12} md={3} sm={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {questions3.find(
              (ques) => ques.title.toLowerCase() === item.title.toLowerCase()
            ) && (
              <Image
                src={
                  questions3.find(
                    (ques) =>
                      ques.title.toLowerCase() === item.title.toLowerCase()
                  ).image
                }
                alt={item.title}
              />
            )}
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

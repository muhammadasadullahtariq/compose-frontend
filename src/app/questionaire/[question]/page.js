"use client";
import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Button, Typography } from "@mui/material";
import Icon from "@mui/material";
import ProtectedPageRoute from "../../protected-page-route";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@mui/material/TextField";
import verifyRecaptcha from "@/apis/verifyRecaptcha";
import { fetcher } from "../../../lib/APIFetcher";
import Question1 from "@/components/question1";
import Question2 from "@/components/question2";
import Question3 from "@/components/question3";
import Question4 from "@/components/question4";
import Question7 from "@/components/question7";
import Question5 from "@/components/question5";
import Question6 from "@/components/question6";
import { DataContext } from "@/app/questionaire/context";

function ResponsiveAppBar({ params }) {
  const { data } = useContext(DataContext);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {data.questionNumber === 0 && <Question1 />}
      {data.questionNumber === 1 && <Question2 />}
      {data.questionNumber === 2 && <Question3 />}
      {data.questionNumber === 3 && <Question4 />}
      {data.questionNumber === 4 && <Question7 />}
    </Box>
  );
}
export default ResponsiveAppBar;

{
  /* <ReCAPTCHA
  size="normal"
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  onChange={onChange}
/>; */
}

// const recaptchaRef = React.createRef();
// const onChange = async (value) => {
//   console.log("Captcha value:", value);
//   const reponce = await verifyRecaptcha(value);
//   console.log(reponce.message);
//   alert(reponce.message);
// };

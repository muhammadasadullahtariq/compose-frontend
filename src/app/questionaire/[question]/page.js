"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Button, Typography } from "@mui/material";
import Icon from "@mui/material";
import ProtectedPageRoute from "../../protected-page-route";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@mui/material/TextField";
import verifyRecaptcha from "@/apis/verifyRecaptcha";
import Question1 from "@/components/question1";
import Question3 from "@/components/question3";
import Question2 from "@/components/question2";
import Question4 from "@/components/question4";
import Question7 from "@/components/question7";
import Question5 from "@/components/question5";
import Question6 from "@/components/question6";

function ResponsiveAppBar({ params }) {
  console.log(params.question);
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {params.question == "question1" && <Question1 />}
      {params.question == "question2" && <Question2 />}
      {params.question == "question3" && <Question3 />}
      {params.question == "question4" && <Question4 />}
      {params.question == "question5" && <Question5 />}
      {params.question == "question6" && <Question6 />}
      {params.question == "question7" && <Question7 />}
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

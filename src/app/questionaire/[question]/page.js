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
import { fetcher } from "../../../lib/APIFetcher";
import Question1 from "@/components/question1";
import Question2 from "@/components/question2";
import Question3 from "@/components/question3";
import Question4 from "@/components/question4";
import Question7 from "@/components/question7";
import Question5 from "@/components/question5";
import Question6 from "@/components/question6";
import { addSpacesToString } from "../../../lib/CreateSlug";
function ResponsiveAppBar({ params }) {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await fetcher(
        `http://localhost:1337/api/questions?filters[nav_title]=${addSpacesToString(
          params.question
        )}&populate=items`
      );

      const formatted = data.data.map((que) => {
        return {
          id: que.id,
          navTitle: que.attributes.nav_title,
          title: que.attributes.title,
          sortNum: que.attributes.sorting_number,
          items: que.attributes.items.data.map((item) => {
            return {
              title: item.attributes.title,
              description: item.attributes.description,
              url: item.attributes.url,
              id: item.attributes.id,
            };
          }),
        };
      });
      setQuestion(...formatted);
      return data;
    }
    getData();
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {question.sortNum === 1 && <Question1 question={question} />}
      {question.sortNum === 2 && <Question2 question={question} />}
      {question.sortNum === 3 && <Question3 question={question} />}
      {question.sortNum === 4 && <Question4 question={question} />}
      {question.sortNum === 5 && <Question5 question={question} />}
      {question.sortNum === 6 && <Question6 question={question} />}
      {question.sortNum === 7 && <Question7 question={question} />}
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

"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Button, Typography } from "@mui/material";
import Icon from "@mui/material";
import ProtectedPageRoute from "../protected-page-route";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@mui/material/TextField";
import verifyRecaptcha from "@/apis/verifyRecaptcha";

function ResponsiveAppBar() {
  const recaptchaRef = React.createRef();
  const onChange = async (value) => {
    console.log("Captcha value:", value);
    const reponce = await verifyRecaptcha(value);
    console.log(reponce.message);
    alert(reponce.message);
  };
  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to the landing page
        </Typography>
        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            Please fill the form
          </Typography>
          <Box component={"div"}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Question 1
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Question 1
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />{" "}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Question 1
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />{" "}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Question 1
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />{" "}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Question 1
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>

          <Button variant="contained" color="primary">
            Submit
          </Button>
          <ReCAPTCHA
            size="normal"
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default ResponsiveAppBar;

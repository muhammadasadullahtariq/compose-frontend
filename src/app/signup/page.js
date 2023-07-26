"use client";
import React, { useState, useEffect, use } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import registerUser from "@/apis/registerUser";
import firebase_app, { signIn, auth } from "../config";
import GoogleButton from "react-google-button";
import "firebase/compat/auth";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import checkUserExist from "@/apis/checkUserExist";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");
  const router = useRouter();
  const [usedEmailSignUp, setUsedEmailSignUp] = React.useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setCookie("token", token);
        const userExist = await checkUserExist();
        if (userExist?.message == "User found") {
          setCookie("user", userExist.data);
          setOpen(true);
          setMessage("User Signed In Successfully");
          setSeverity("success");
          router.push("/landing");
        } else {
          if (!usedEmailSignUp) {
            if (
              user.displayName == null ||
              user.displayName == "" ||
              user.displayName == undefined
            ) {
              await userRegisterHandaler(user.email);
            }
            await userRegisterHandaler(user.displayName);
          }
        }
      }
    });
  }, []);

  const userRegisterHandaler = async (name) => {
    const userData = await registerUser(name);
    console.log("user not exist extra user called");
    console.log(userData);
    if (userData?.message == "User Created") {
      setCookie("user", userData.data);
      setOpen(true);
      setMessage("User Created Successfully");
      setSeverity("success");
      router.push("/landing");
    } else {
      setOpen(true);
      setMessage(userData.message);
      setSeverity("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsedEmailSignUp(true);
    if (fname == "" || lname == "") {
      setOpen(true);
      setMessage("Please enter your first and last name");
      setSeverity("error");
      return;
    } else if (email == "" || password == "") {
      setOpen(true);
      setMessage("Please enter your email and password");
      setSeverity("error");
      return;
    } else if (password.length < 6) {
      setOpen(true);
      setMessage("Password must be at least 6 characters");
      setSeverity("error");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        //await sendEmailVerification(auth.currentUser);
        const user = userCredential.user;
        const token = await user.getIdToken();
        setCookie("token", token);
        const userData = await registerUser(fname + " " + lname);
        console.log(userData);
        if (userData?.message == "User Created") {
          setCookie("user", userData.data);
          setOpen(true);
          setMessage("User Created Successfully");
          setSeverity("success");
          router.push("/landing");
        } else {
          console.log("user not created called");
          console.log(userData);
          setOpen(true);
          setMessage(userData.message);
          setSeverity("error");
        }
      })
      .catch((error) => {
        setOpen(true);
        setMessage(error.message);
        setSeverity("error");

        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth="xs"
        sx={{
          height: "100vh",
        }}
      >
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert onClose={() => setOpen(false)} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <GoogleButton
              onClick={() => {
                console.log("Google button clicked");
                signIn();
              }}
            />
          </Box>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

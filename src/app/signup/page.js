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
import Or from "@/components/Or";
import SignIn from "@/components/signin";

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

export default function SignUp({ closeModel, popup }) {
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
        try {
          const userExist = await checkUserExist();
          if (userExist?.message == "User found") {
            setCookie("user", userExist.data);
            setOpen(true);
            setMessage("User Signed In Successfully");
            setSeverity("success");
            closeModel();
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
        } catch (e) {
          setOpen(true);
          setMessage(e.message);
          setSeverity("error");
        }
      }
    });
  }, []);

  const userRegisterHandaler = async (name) => {
    try {
      const userData = await registerUser(name);
      console.log("user not exist extra user called");
      console.log(userData);
      if (userData?.message == "User Created") {
        setCookie("user", userData.data);
        setOpen(true);
        setMessage("User Created Successfully");
        setSeverity("success");
        closeModel();
      } else {
        setOpen(true);
        setMessage(userData.message);
        setSeverity("error");
        closeModel();
      }
    } catch (e) {
      setOpen(true);
      setMessage(e.message);
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
        await sendEmailVerification(auth.currentUser);
        const user = userCredential.user;
        const token = await user.getIdToken();
        setCookie("token", token);
        try {
          const userData = await registerUser(fname + " " + lname);
          console.log(userData);
          if (userData?.message == "User Created") {
            setCookie("user", userData.data);
            setOpen(true);
            setMessage("User Created Successfully");
            setSeverity("success");
            closeModel();
          } else {
            console.log("user not created called");
            console.log(userData);
            setOpen(true);
            setMessage(userData.message);
            setSeverity("error");
            closeModel();
          }
        } catch (e) {
          setOpen(true);
          setMessage(e.message);
          setSeverity("error");
        }
      })
      .catch((error) => {
        setOpen(true);
        setMessage(error.message);
        setSeverity("error");
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
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
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GoogleButton
            label="Continue with Google"
            className="google-button"
            onClick={signIn}
            style={{
              borderRadius: "100px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "#fff",
              color: "#333",
              border: "1px solid #D2D4DA",
              boxShadow: "none",
            }}
          />
          <Or />
          <Box component="form" sx={{ mt: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
                  label="By selecting agree and continue, i agree to composetrip terms of service and privacy policy."
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
              Create Account
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                Already a user? <a onClick={popup}>Login</a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

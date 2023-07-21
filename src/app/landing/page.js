"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Typography } from "@mui/material";
import Icon from "@mui/material";
import ProtectedPageRoute from "../protected-page-route";
import { useRouter } from "next/navigation";
import * as COLORS from "@/constants/colors";
import FirstBloack from "@/components/firstBlock";
import SecondBlock from "@/components/secondBlock";
import ThirdBlock from "@/components/thirdBlock";
import FourthBlock from "@/components/fourthBlock";

function ResponsiveAppBar() {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <Box
      className="landing"
      sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
    >
      <AppBar />
      <FirstBloack />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
    </Box>
  );
}
export default ResponsiveAppBar;

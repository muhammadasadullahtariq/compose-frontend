"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/navbar";
import { Typography } from "@mui/material";
import Icon from "@mui/material";
import ProtectedPageRoute from "../protected-page-route";
import { useRouter } from "next/navigation";

function ResponsiveAppBar() {
  const router = useRouter();
  useEffect(() => {
    ProtectedPageRoute(() => {
      router.push("/signin");
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
      <AppBar />
    </Box>
  );
}
export default ResponsiveAppBar;

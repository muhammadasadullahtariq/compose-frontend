"use client";
import { Box, Typography, Grid, Button } from "@mui/material";
import LocationIcon from "@/assets/images/tripDetails/icons/location.svg";
import StarIcon from "@/assets/images/tripDetails/icons/star.svg";
import TimeIcon from "@/assets/images/tripDetails/icons/time.svg";
import Image from "next/image";
import * as COLORS from "@/constants/colors";
import AddIcon from "@mui/icons-material/Add";
import ProtectedPageRoute from "@/app/protected-page-route";
import { useCollapse } from "react-collapsed";
import TextRender from "@/components/atomic/TextRender/textRender";

const ResturantCollaspible = ({ restaurants }) => {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <>
      {restaurants?.length > 0 && (
        <Typography
          {...getToggleProps()}
          sx={{
            fontSize: "22px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Raleway",
          }}
        >
          Resturants
        </Typography>
      )}
      <Box {...getCollapseProps()}>
        {restaurants?.map((item) => {
          return (
            <Box
              sx={{
                margin: {
                  lg: "0 70px 0 70px",
                  md: "0 50px 0 50px",
                  xs: "0",
                },
              }}
            >
              <TextRender
                name="Name:&nbsp;"
                description={item.restaurant}
                color="#F9F9F9"
              ></TextRender>
              <TextRender
                name="Location:&nbsp;"
                description={item.location}
                color="#FFFFFF"
              ></TextRender>
              <TextRender
                name="Description:&nbsp;"
                description={item.description}
                color="#F9F9F9"
              ></TextRender>
              <Box
                sx={{
                  margin: "25px 20 25px 20",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "1px",
                    margin: "0 20px 0 20px",
                    width: "100%",
                    background: "#F3F4F8",
                  }}
                ></Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ResturantCollaspible;

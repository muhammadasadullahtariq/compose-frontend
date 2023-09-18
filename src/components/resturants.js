"use client";
import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";
import LocationIcon from "@/assets/images/tripDetails/icons/location.svg";
import Resturant from "@/assets/images/tripDetails/resturantName.svg";
import Detail from "@/assets/images/tripDetails/detail.svg";
import * as COLORS from "@/constants/colors";
import { useCollapse } from "react-collapsed";
import Image from "next/image";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import "./resturantStyle.css";

const TextRender = ({ name, location, description }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image src={Resturant} width="15" alt="name-icon" />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "400" }}>
            {name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "20px",
          margin: "5px 0 2px 6px",
          display: "flex",
        }}
      >
        <Box className="dashed-linex" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image src={LocationIcon} width="15" alt="name-icon" />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "400" }}>
            {location}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "20px",
          margin: "5px 0 2px 6px",
          display: "flex",
        }}
      >
        <Box className="dashed-linex" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image src={Detail} width="15" alt="name-icon" />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "400" }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ResturantCollaspible = ({ restaurants }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: COLORS.white,
        marginBottom: "20px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        paddingRight: "20px",
        paddingLeft: "10px",
        paddingTop: "10px",
        paddingBottom: isExpanded ? "0px" : "10px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        {...getToggleProps()}
      >
        <dev
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            {...getToggleProps()}
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              width: "100%",
              fontFamily: "Raleway",
              marginRight: "10px",
            }}
          >
            Restaurants
          </Typography>
          {!(restaurants?.length > 0) && (
            <Box
              sx={{
                display: "flex",
              }}
            >
              <CircularProgress size={30} />
            </Box>
          )}
        </dev>
        {isExpanded ? (
          <KeyboardArrowUpSharpIcon />
        ) : (
          <KeyboardArrowDownSharpIcon />
        )}
      </Box>
      {isExpanded && (
        <Box
          style={{
            width: "100%",
            height: "1px",
            background: "#F3F4F8",
            margin: "15px 0",
          }}
        />
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
                name={item.restaurant}
                description={item.description}
                location={item.location}
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
    </Box>
  );
};

export default ResturantCollaspible;

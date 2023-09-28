"use client";
import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";
import LocationIcon from "@/assets/images/tripDetails/icons/locationResturant.svg";
import Resturant from "@/assets/images/tripDetails/icons/resturant.svg";
import Detail from "@/assets/images/tripDetails/icons/detail.svg";
import * as COLORS from "@/constants/colors";
import { useCollapse } from "react-collapsed";
import Image from "next/image";
import "./resturantStyle.css";

const background = [
  "/assets/img/resturant-1.svg",
  "/assets/img/resturant-2.svg",
  "/assets/img/resturant-3.svg",
];

const TextRender = ({ name, location, description, index }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background[index % 3]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image src={Resturant} width="15" alt="name-icon" />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography
            variant="p"
            sx={{ fontSize: "16px", fontWeight: "400", color: COLORS.white }}
          >
            {name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "5px",
          margin: "5px 0 2px 6px",
          display: "flex",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image src={LocationIcon} width="15" alt="name-icon" />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography
            variant="p"
            sx={{ fontSize: "16px", fontWeight: "400", color: COLORS.white }}
          >
            {location}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "1px",
          margin: "10px 0 10px 6px",
          display: "flex",
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "1px",
            display: "flex",
            background: COLORS.white,
            width: "100%",
            alignSelf: "center",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image src={Detail} width="15" alt="name-icon" />
        <Box sx={{ width: "100%", marginLeft: "10px" }}>
          <Typography
            variant="p"
            sx={{ fontSize: "16px", fontWeight: "400", color: COLORS.white }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ResturantCollaspible = ({ restaurants }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: COLORS.white,
        marginBottom: "20px",
        paddingTop: "10px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <dev
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              width: "100%",
              fontFamily: "Raleway",
              marginRight: "10px",
              color: COLORS.primary,
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
      </Box>

      <Box
        style={{
          width: "100%",
          height: "1px",
          background: "#F3F4F8",
          margin: "15px 0",
        }}
      />
      <Box>
        {restaurants?.map((item, index) => {
          return (
            <Box
              sx={{
                margin: "0 10px 0 10px",
              }}
            >
              <TextRender
                name={item.restaurant}
                description={item.description}
                location={item.location}
                index={index}
              ></TextRender>
              <Box
                sx={{
                  margin: "25px 20 25px 20",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ResturantCollaspible;

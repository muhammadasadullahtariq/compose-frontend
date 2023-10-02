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
import TextRender from "@/components/atomic/TextRender/textRender";
import CircleIcon from "@mui/icons-material/Circle";

const SuggestionCollaspible = ({ suggestion }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: COLORS.white,
        marginBottom: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
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
            Suggestions
          </Typography>
          {!(suggestion?.length > 0) && (
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
        <Box
          sx={{
            margin: {
              lg: "0 10px 0px 10px",
              md: "0 10px 0 10px",
              xs: "0",
            },
            paddingBottom: "20px",
          }}
        >
          {suggestion?.length > 0 &&
            suggestion.map((item, index) => {
              return (
                <Box
                  sx={{
                    margin: {
                      lg: "0 10px 0 10px",
                      md: "0 10px 0 10px",
                      xs: "0",
                    },
                  }}
                >
                  <TextRender
                    name={
                      <CircleIcon
                        sx={{
                          height: "10px",
                          width: "10px",
                        }}
                      />
                    }
                    description={"  " + item}
                    color={"#FFFFFF"}
                  ></TextRender>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default SuggestionCollaspible;

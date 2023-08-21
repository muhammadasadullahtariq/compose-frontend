"use client";
import { Box, Typography } from "@mui/material";
import { useCollapse } from "react-collapsed";
import CircleIcon from "@mui/icons-material/Circle";
import TextRender from "@/components/atomic/TextRender/textRender";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import Do from "@/assets/images/tripDetails/do.svg";
import Dont from "@/assets/images/tripDetails/dont.svg";

const Culture = ({ dosCulture, dontsCulture }) => {
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
      {dosCulture?.length > 0 && dontsCulture?.length > 0 && (
        <Box>
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
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Raleway",
              }}
            >
              Culture
            </Typography>
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
            {dosCulture?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: {
                    lg: "70px",
                    md: "50px",
                    xs: "20px",
                  },
                }}
              >
                <Image src={Do} alt="Do" />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily: "Raleway",
                    marginLeft: "10px",
                  }}
                >
                  Do’s
                </Typography>
              </Box>
            )}
            {dosCulture?.length > 0 &&
              dosCulture?.map((item, index) => {
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
            <Box
              sx={{
                width: "100%",
                height: "20px",
              }}
            />
            {dontsCulture?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: {
                    lg: "70px",
                    md: "50px",
                    xs: "20px",
                  },
                }}
              >
                <Image src={Dont} alt="Dont's" />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily: "Raleway",
                    marginLeft: "10px",
                  }}
                >
                  Dont’s
                </Typography>
              </Box>
            )}

            {dontsCulture?.length > 0 &&
              dontsCulture?.map((item, index) => {
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
            <Box
              sx={{
                margin: "70px 20 70px 20",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Culture;

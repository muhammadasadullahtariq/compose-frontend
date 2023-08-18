"use client";
import { Box, Typography } from "@mui/material";
import { useCollapse } from "react-collapsed";
import CircleIcon from "@mui/icons-material/Circle";
import TextRender from "@/components/atomic/TextRender/textRender";

const Culture = ({ dosCulture, dontsCulture }) => {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <>
      {dosCulture?.length > 0 && dontsCulture?.length > 0 && (
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "20px",
              fontFamily: "Raleway",
            }}
            {...getToggleProps()}
          >
            Culture
          </Typography>
          <Box {...getCollapseProps()}>
            {dosCulture?.length > 0 && (
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  fontFamily: "Raleway",
                  marginLeft: {
                    lg: "70px",
                    md: "50px",
                    xs: "20px",
                  },
                }}
              >
                Do’s
              </Typography>
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
                      color={index % 2 == 0 ? "#F9F9F9" : "#FFFFFF"}
                    ></TextRender>
                  </Box>
                );
              })}
            {dontsCulture?.length > 0 && (
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  marginTop: "20px",
                  fontFamily: "Raleway",
                  marginLeft: {
                    lg: "70px",
                    md: "50px",
                    xs: "20px",
                  },
                }}
              >
                Dont’s
              </Typography>
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
                      color={index % 2 == 0 ? "#F9F9F9" : "#FFFFFF"}
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
            >
              <Box
                sx={{
                  height: "1px",
                  margin: "0 90px 0 90px",
                  width: "100%",
                  background: "#F3F4F8",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Culture;

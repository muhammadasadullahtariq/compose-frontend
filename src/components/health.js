"use client";
import { Box, Typography } from "@mui/material";
import { useCollapse } from "react-collapsed";
import CircleIcon from "@mui/icons-material/Circle";
import TextRender from "@/components/atomic/TextRender/textRender";

const Health = ({ dosHealth, dontsHealth }) => {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <>
      {dosHealth?.length > 0 &&
        dontsHealth?.length > 0 && (
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
              Health
            </Typography>
            <Box {...getCollapseProps()}>
              {dosHealth?.length > 0 && (
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
              {dosHealth?.length > 0 &&
                dosHealth?.map((item, index) => {
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
              {dontsHealth?.length > 0 && (
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
              {dontsHealth?.length > 0 &&
                dontsHealth?.map((item, index) => {
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
            </Box>
          </Box>
        )}
    </>
  );
};

export default Health;

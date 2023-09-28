import { useState } from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import Input from "@/components/atomic/input";
import { TextField, Stack, CircularProgress } from "@mui/material";
import uploadImageIcon from "@/assets/images/icons/imageUpload.svg";
import Image from "next/image";
import * as COLORS from "@/constants/colors";
import uploadImage from "@/utils/uploadImage";
import { Type } from "@aws-sdk/client-s3";

const AddPlace = ({ open, handleModel, modalFor, handerlSave }) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      open={open}
      onClose={loading ? null : handleModel}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          width: {
            md: "430px",
            xs: "320px",
          },
          borderRadius: "10px",
          padding: "20px 25px",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}
          >
            Add Place
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "10px" }}
          >
            Name
          </Typography>
          <Input
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
            }}
            value={name}
            setValue={setName}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "10px" }}
          >
            Start Time
          </Typography>
          <Input
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
            }}
            value={time}
            setValue={setTime}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "10px" }}
          >
            End Time
          </Typography>
          <Input
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
            }}
            value={endTime}
            setValue={setEndTime}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "10px" }}
          >
            Description
          </Typography>
          <TextField
            multiline
            rows={4}
            sx={{
              "& fieldset": {
                border: "none",
              },
              backgroundColor: "#f9f9f9",
              border: "none",
              borderRadius: "10px",
              width: "100%",
            }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "10px" }}
          >
            Image
            <Typography
              as="span"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#757780",
              }}
            >
              {" "}
              (optional)
            </Typography>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              component="label"
              sx={{
                backgroundColor: "#f9f9f9",
                border: "none",
                borderRadius: "10px",
                width: "100%",
                height: "154px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                  border: "none",
                  outline: "none",
                },
              }}
            >
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={async (e) => {
                  setLoading(true);
                  const responce = await uploadImage(e.target.files[0]);
                  setLoading(false);
                 // console.log(responce);
                  if (responce.data) {
                    setImage(responce.data);
                  }
                }}
              ></input>
              {loading ? (
                <CircularProgress
                  size={50}
                  sx={{
                    color: COLORS.PRIMARY_COLOR,
                  }}
                />
              ) : (
                <Image
                  src={image ? image : uploadImageIcon}
                  width={image ? 150 : 50}
                  height={image ? 150 : 50}
                  alt="uploadImageIcon"
                />
              )}
            </Button>
          </Stack>
          <Box
            sx={{
              marginTop: "28px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                padding: "5px 25px",
                color: "#F9F9F9",
                background: "#2B92D5",
                fontSize: "12px",
                borderRadius: "20px",
              }}
              onClick={() => {
                handerlSave(name, time, endTime, description, image);
              }}
              disabled={!name || !time || !endTime || !description}
            >
              save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddPlace;

import { createRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./style.css";
import ReCAPTCHA from "react-google-recaptcha";
import verifyRecaptcha from "@/apis/verifyRecaptcha";
const Recaptchs = ({ open, handleModel }) => {
  const recaptchaRef = createRef();
  const onChange = async (value) => {
    const reponce = await verifyRecaptcha(value);
    handleModel(reponce.message);
  };
  return (
    <Modal
      open={open}
      onClose={handleModel}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        className="recaptcha-model"
        sx={{
          backgroundColor: "#fff",
          maxWidth: "430px",
          height: "200px",
        }}
      >
        <div className="recaptcha-heading">
          <h4>Verify Recaptcha</h4>
        </div>
        <div className="recaptcha-box">
          <ReCAPTCHA
            size="normal"
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onChange}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default Recaptchs;

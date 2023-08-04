import "./styles.css";
import { Box } from "@mui/material";
const Or = () => {
  return (
    <Box className="or" sx={{ margin: { md: "10px 0 ", xs: "5px 0" } }}>
      <div className="bar" />
      <span>or</span>
      <div className="bar" />
    </Box>
  );
};

export default Or;

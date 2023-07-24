import { getCookie } from "cookies-next";
export default function ProtectedPageRoute() {
  console.log("ProtectedPageRoute");
  const token = getCookie("token");
  if (!token) {
    return false;
  } else {
    return true;
  }
}

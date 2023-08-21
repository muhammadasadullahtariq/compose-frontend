import { getCookie, deleteCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
export default function ProtectedPageRoute() {
  console.log("ProtectedPageRoute");
  const token = getCookie("token");
  if (!token) {
    return false;
  } else {
    const decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded.exp < Date.now() / 1000) {
      deleteCookie("token");
      deleteCookie("user");
      return false;
    }
    return true;
  }
}

export function clearToken() {
  deleteCookie("token");
  deleteCookie("user");
  return true;
}

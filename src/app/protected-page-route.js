import { getCookie,deleteCookie } from "cookies-next";
export default function ProtectedPageRoute() {
  console.log("ProtectedPageRoute");
  const token = getCookie("token");
  if (!token) {
    return false;
  } else {
    return true;
  }
}

export  function clearToken() {
  deleteCookie("token");
  deleteCookie("user");
  return true;
}

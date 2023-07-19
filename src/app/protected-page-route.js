import { getCookie } from "cookies-next";
export default async function ProtectedPageRoute(functionToRun) {
  console.log("ProtectedPageRoute");
  const token = getCookie("token");
  if (!token) {
    return false;
  } else {
    return true;
  }
}

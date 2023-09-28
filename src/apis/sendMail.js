import { getCookie } from "cookies-next";
import checkUserExist from "./checkUserExist";

const sendMail = async (name, mail) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        mail,
      }),
    });
    const result = await res.json();
    //("result of trip", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;

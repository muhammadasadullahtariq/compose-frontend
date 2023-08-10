import { getCookie } from "cookies-next";

const registerUser = async (name) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}registerUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getCookie("token"),
        },
        body: JSON.stringify({
          name,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
};

export default registerUser;

import { getCookie } from "cookies-next";

const updateUser = async (name, phone) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}updateUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getCookie("token"),
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Something went wrong" };
  }
};

export default updateUser;

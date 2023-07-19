import { getCookie } from "cookies-next";

const getUserDetailsById = async (id, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}getUserDetailsById/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getCookie("token"),
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Something went wrong" };
  }
};

export default getUserDetailsById;

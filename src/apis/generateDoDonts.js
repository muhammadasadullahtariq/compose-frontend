//import { getCookie } from "cookies-next";

const getTripDoDonts = async (id) => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      //"x-access-token": getCookie("token"),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}getTripDoDonts/${id}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Something went wrong" };
  }
};

export default getTripDoDonts;
const getLatestTripsWithDetail = async () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}getLatestTripWithDetail`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Something went wrong" };
  }
};

export default getLatestTripsWithDetail;
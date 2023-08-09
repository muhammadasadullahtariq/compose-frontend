const getTripDetailById = async (id) => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:3000/api/getTripDetails/${id}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Something went wrong" };
  }
};

export default getTripDetailById;

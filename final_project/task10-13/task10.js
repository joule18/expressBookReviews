const axios = require("axios");

const getAllBooks = async () => {
  try {
    const result = await axios.get("http://localhost:5000/");
    return result.data;
  } catch (error) {
    console.log("Error fetching books:", error.message);
    return;
  }
};

getAllBooks().then((data) => console.log(data));

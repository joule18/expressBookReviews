const axios = require("axios");

const getBookByTitle = async (title) => {
  try {
    const result = await axios.get(`http://localhost:5000/title/${title}`);
    return result.data;
  } catch (error) {
    console.log("Error fetching book:", error.message);
    return;
  }
};

let title = "The Divine Comedy"; // from user frontend interaction

getBookByTitle(title).then((data) => console.log(data));

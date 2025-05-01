const axios = require("axios");

const getBookByISBN = async (isbn) => {
  try {
    const result = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    return result.data;
  } catch (error) {
    console.log("Error fetching book:", error.message);
    return;
  }
};

let isbn = 1; // from user frontend interaction

getBookByISBN(isbn).then((data) => console.log(data));

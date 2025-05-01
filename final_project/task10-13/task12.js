const axios = require("axios");

const getBookByAuthor = async (author) => {
  try {
    const result = await axios.get(`http://localhost:5000/author/${author}`);
    return result.data;
  } catch (error) {
    console.log("Error fetching book:", error.message);
    return;
  }
};

let author = "Jane Austen"; // from user frontend interaction

getBookByAuthor(author).then((data) => console.log(data));

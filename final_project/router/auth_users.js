const express = require("express");
const jwt = require("jsonwebtoken");
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const JWT_SECRET = "SUPERSECRETPASSWORD123";

const isValid = (username) => {
  //returns boolean
  //write code to check is the username is valid
  if (users.find((el) => el.username === username)) {
    return false;
  }
  return true;
};

const authenticatedUser = (username, password) => {
  if (
    users.find((el) => el.username === username && el.password === password)
  ) {
    return true;
  }
  return false;
};

const createJWT = (username) => {
  const payload = { username };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

//only registered users can login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Invalid user credentials" });
  }
  const token = createJWT(username);
  req.session.user = { username, token };
  return res
    .status(300)
    .json({ token, message: "User logged in successfully" });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;

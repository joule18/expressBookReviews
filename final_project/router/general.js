const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  return res.status(300).json(books);
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  //Write your code here
  const { isbn } = req.params;
  if (!books.hasOwnProperty(isbn)) {
    return res.status(300).send("Book not found");
  }
  const book = books[isbn];
  return res.status(300).json({ [isbn]: book });
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  let { author } = req.params;
  author = author.toLowerCase().trim();
  const bookKeys = Object.keys(books);
  let booksByAuthor = {};
  bookKeys.forEach((el) => {
    if (books[el].author.toLowerCase() === author) {
      booksByAuthor[el] = books[el];
    }
  });
  if (Object.keys(booksByAuthor).length == 0) {
    return res.status(300).send("Author is not present on book collection.");
  }
  return res.status(300).json(booksByAuthor);
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  let { title } = req.params;
  title = title.toLowerCase().trim();
  const bookKeys = Object.keys(books);
  let booksByTitle = {};
  bookKeys.forEach((el) => {
    if (books[el].title.toLowerCase() === title) {
      booksByTitle[el] = books[el];
    }
  });
  if (Object.keys(booksByTitle).length == 0) {
    return res.status(300).send("Title is not present on book collection.");
  }
  return res.status(300).json(booksByTitle);
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  const { isbn } = req.params;
  if (!books.hasOwnProperty(isbn)) {
    return res.status(300).send("Book not found");
  }
  return res.status(300).json(books[isbn].reviews);
});

module.exports.general = public_users;

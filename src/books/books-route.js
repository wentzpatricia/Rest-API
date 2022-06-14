const express = require('express');

const bookRouter = express.Router();

const {
  addNewBook,
  showAllBooks,
  getBookByIsbn,
  deleteBookByIsbn,
  updateBookByIsbn,
} = require('./books-service');

bookRouter.get('/', (req, res) => {
  res.send('Welcome to the Library!');
});

bookRouter.get('/api/books', showAllBooks);

bookRouter.get('/api/books/:isbn', getBookByIsbn);

bookRouter.post('/api/books', addNewBook);

bookRouter.delete('/api/books/:isbn', deleteBookByIsbn);

bookRouter.put('/api/books/:isbn', updateBookByIsbn);

module.exports = {
  bookRouter,
};

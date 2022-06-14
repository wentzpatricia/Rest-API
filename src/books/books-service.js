const Joi = require('joi');

const {
  addNewBookOnDB,
  showBooksOnDB,
  getBookByIsbnOnDB,
  deleteBookByIsbnOnDB,
  updateBookByIsbnOnDB,
} = require('./books-dao');

const showAllBooks = async (req, res) => {
  return showBooksOnDB()
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const getBookByIsbn = async (req, res) => {
  return getBookByIsbnOnDB(req.params.isbn)
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const addNewBook = async (req, res) => {
  const { error } = validateBook(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  return addNewBookOnDB(req.body)
    .then((response) => res.status(response.status).json(response))
    .catch((error) => res.status(error.status).json(error));
};

const deleteBookByIsbn = async (req, res) => {
  return deleteBookByIsbnOnDB(req.params.isbn)
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const updateBookByIsbn = async (req, res) => {
  const { error } = validateBook(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  return updateBookByIsbnOnDB(req.params.isbn, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const validateBook = (book) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(90).required(),

    author: Joi.string().min(3).max(90).required(),

    publisher: Joi.string().min(3).max(90).required(),

    year: Joi.number().integer().max(2022).required(),
  });

  return Joi.validate(book, schema);
};

module.exports = {
  addNewBook,
  showAllBooks,
  getBookByIsbn,
  deleteBookByIsbn,
  updateBookByIsbn,
};

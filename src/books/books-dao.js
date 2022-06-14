const { connection } = require('../db/connection');

const showBooksOnDB = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM books', (error, results) => {
      if (error) return reject({ status: 500, error });

      if (results.length <= 0) {
        return resolve({ status: 200, message: 'Book list empty!' });
      }

      return resolve(results);
    });
  });
};

const getBookByIsbnOnDB = (isbn) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM books WHERE isbn = ${isbn}`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        if (results.length <= 0) {
          return resolve({
            status: 404,
            message: 'The book with the given ISNB was not found.',
          });
        }

        return resolve(results);
      }
    );
  });
};

const addNewBookOnDB = (book) => {
  return new Promise((resolve, reject) => {
    const { title, author, publisher, year } = book;

    connection.query(
      `INSERT INTO books(title, author, publisher, year) VALUES("${title}", "${author}","${publisher}","${year}")`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        return resolve({
          status: 200,
          message: 'Book added successfully',
          data: book,
        });
      }
    );
  });
};

const deleteBookByIsbnOnDB = (isbn) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM books WHERE isbn = ${isbn}`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        if (results.affectedRows === 0) {
          return resolve({
            status: 404,
            message: 'The book with the given ISNB was not found.',
          });
        }

        return resolve({
          results,
          status: 200,
          message: 'Successfully deleted book',
        });
      }
    );
  });
};

const updateBookByIsbnOnDB = (isbn, book) => {
  return new Promise((resolve, reject) => {
    const { title, author, publisher, year } = book;
    connection.query(
      `UPDATE books SET title = "${title}", author = "${author}", publisher = "${publisher}", year = "${year}" WHERE isbn = "${isbn}"`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        if (results.affectedRows === 0) {
          return resolve({
            status: 404,
            message: 'The book with the given ISNB was not found.',
          });
        }

        return resolve({
          results,
          status: 200,
          message: 'Book successfully updated',
        });
      }
    );
  });
};

module.exports = {
  addNewBookOnDB,
  showBooksOnDB,
  getBookByIsbnOnDB,
  deleteBookByIsbnOnDB,
  updateBookByIsbnOnDB,
};

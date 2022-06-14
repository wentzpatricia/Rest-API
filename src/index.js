const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

const { bookRouter } = require('./books/books-route');

app.use(express.json());

app.use(bookRouter);

app.listen(port, () => console.log(`listening on port ${port}`));

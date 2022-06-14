const mysql = require('mysql');
require('dotenv').config();

const {
  MYSQL_HOST, 
  MYSQL_USER, 
  MYSQL_PASSWORD, 
  MYSQL_DATABASE
} = process.env

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user:MYSQL_USER,
  password:MYSQL_PASSWORD,
  database:MYSQL_DATABASE
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = {
  connection,
};
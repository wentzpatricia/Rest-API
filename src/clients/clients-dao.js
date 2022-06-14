const { connection } = require('../db/connection');

const showClientsOnDB = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM clients', (error, results) => {
      if (error) return reject({ status: 500, error });

      if (results.length <= 0) {
        return resolve({ status: 200, message: 'Client list empty!' });
      }

      return resolve(results);
    });
  });
};

const getClientByRegistrationOnDB = (registration) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM clients WHERE registration = ${registration}`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        if (results.length <= 0) {
          return resolve({
            status: 404,
            message: 'The client with the given registration was not found.',
          });
        }

        return resolve(results);
      }
    );
  });
};

const addNewClientOnDB = (client) => {
  return new Promise((resolve, reject) => {
    const { name, telephone } = client;

    connection.query(
      `INSERT INTO clients (name, telephone) VALUES("${name}","${telephone}")`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        return resolve({
          status: 200,
          message: 'Client added successfully',
          data: client,
        });
      }
    );
  });
};

const deleteClientByRegistrationOnDB = (registration) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM clients WHERE registration = ${registration}`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        if (results.affectedRows === 0) {
          return resolve({
            status: 404,
            message: 'The client with the given registration was not found.',
          });
        }

        return resolve({
          results,
          status: 200,
          message: 'Successfully deleted client',
        });
      }
    );
  });
};

const updateClientByRegistrationOnDB = (registration, client) => {
  return new Promise((resolve, reject) => {
    const { name, telephone } = client;
    connection.query(
      `UPDATE clients SET name = "${name}", telephone = "${telephone}" WHERE registration = "${registration}"`,
      (error, results) => {
        if (error) return reject({ status: 500, error });

        if (results.affectedRows === 0) {
          return resolve({
            status: 404,
            message: 'The client with the given registration was not found.',
          });
        }

        return resolve({
          results,
          status: 200,
          message: 'Client successfully updated',
        });
      }
    );
  });
};

module.exports = {
  addNewClientOnDB,
  showClientsOnDB,
  getClientByRegistrationOnDB,
  deleteClientByRegistrationOnDB,
  updateClientByRegistrationOnDB,
};

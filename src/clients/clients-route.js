const express = require('express');

const clientRouter = express.Router();

const {
  addNewClient,
  showAllClients,
  getClientByRegistration,
  deleteClientByRegistration,
  updateClientByRegistration,
} = require('./clients-service');

clientRouter.get('/', (req, res) => {
  res.send('Welcome to the Library!');
});

clientRouter.get('/api/clients', showAllClients);

clientRouter.get('/api/clients/:registration', getClientByRegistration);

clientRouter.post('/api/clients', addNewClient);

clientRouter.delete('/api/clients/:registration', deleteClientByRegistration);

clientRouter.put('/api/clients/:registration', updateClientByRegistration);

module.exports = {
  clientRouter,
};

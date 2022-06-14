const Joi = require('joi');

const {
  addNewClientOnDB,
  showClientsOnDB,
  getClientByRegistrationOnDB,
  deleteClientByRegistrationOnDB,
  updateClientByRegistrationOnDB,
} = require('./clients-dao');

const showAllClients = async (req, res) => {
  return showClientsOnDB()
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const getClientByRegistration = async (req, res) => {
  return getClientByRegistrationOnDB(req.params.registration)
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const addNewClient = async (req, res) => {
  const { error } = validateClient(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  return addNewClientOnDB(req.body)
    .then((response) => res.status(response.status).json(response))
    .catch((error) => res.status(error.status).json(error));
};

const deleteClientByRegistration = async (req, res) => {
  return deleteClientByRegistrationOnDB(req.params.registration)
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const updateClientByRegistration = async (req, res) => {
  const { error } = validateClient(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  return updateClientByRegistrationOnDB(req.params.registration, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(error.status).json(error));
};

const validateClient = (client) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(90).required(),

    telephone: Joi.string().min(11).max(13).required(),
  });

  return Joi.validate(client, schema);
};

module.exports = {
  addNewClient,
  showAllClients,
  getClientByRegistration,
  deleteClientByRegistration,
  updateClientByRegistration,
};

const users = require('./users/users.service.js');
const carta = require('./carta/carta.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(carta);
};

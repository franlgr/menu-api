// Initializes the `carta` service on path `/carta`
const { Carta } = require('./carta.class');
const hooks = require('./carta.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/carta', new Carta(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('carta');

  service.hooks(hooks);
};

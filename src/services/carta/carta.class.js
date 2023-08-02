const { Service } = require('feathers-mongodb');

exports.Carta = class Carta extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('carta');
    });
  }
};

const { authenticate } = require('@feathersjs/authentication').hooks;
const { disallow } = require('feathers-hooks-common');

// Hook personalizado para eliminar el historial de la consola
const deleteConsoleHistory = () => (context) => {
  console.clear(); // Esto borra el historial de la consola antes de que se almacenen los registros
  return context;
};

module.exports = {
  before: {
    all: [deleteConsoleHistory()],
    find: [
      (context) => {
        const { params } = context;
        const { user } = params;
        
        if (user) {
          const userId = user._id.toString();
          console.log('UserId:', userId);
        }
      },
    ],
    
    create: [authenticate('jwt'),
      context => {
        const { params } = context;
        const { user } = params;

        if (user) {
          context.data = {
            ...context.data,
            userId: user._id.toString(),
          };
        }
      },
    ],
    // ... Otros métodos y hooks que puedas tener ...
  },
  // ... Otros bloques (before, after, error) y hooks que puedas tener ...
};

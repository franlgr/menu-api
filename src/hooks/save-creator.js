module.exports = (options = {}) => {
  return async (context) => {
    const { data, params } = context;

    // Verificar si el usuario está autenticado
    if (params.user) {
      // Agregar el creatorId a la data solo si no se proporciona explícitamente
      if (!data.creatorId) {
        data.creatorId = params.user._id; // Ajusta '_id' según el nombre del campo que almacena el ID del usuario en tu base de datos
      }
    } else {
      throw new Error('Debes estar autenticado para realizar esta acción.');
    }

    return context;
  };
};

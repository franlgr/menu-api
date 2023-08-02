// hooks/verify-creator.js

module.exports = (options = {}) => {
  return async (context) => {
    const { method, id, params, service } = context;

    // Verificar si el usuario está autenticado (puedes ajustar esta lógica según tus necesidades)
    if (!params.user) {
      throw new Error('Debes estar autenticado para realizar esta acción.');
    }

    // Si el método es remove (eliminar) o create (crear), no permitir que continúe con la operación
    if (method === 'remove' || method === 'create') {
      throw new Error('No tienes permiso para realizar esta acción.');
    }

    // Obtener la carta para verificar el creador
    const carta = await service.get(id, params);

    // Comparar el ID del creador con el ID del usuario autenticado
    if (carta.creatorId !== params.user._id) {
      throw new Error('No tienes permiso para realizar esta acción.');
    }

    return context;
  };
};

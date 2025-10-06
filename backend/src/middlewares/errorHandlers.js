function notFoundHandler(req, res, next) {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
}

function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || 'Error interno del servidor';
  res.status(status).json({ error: message });
}

module.exports = { notFoundHandler, errorHandler };


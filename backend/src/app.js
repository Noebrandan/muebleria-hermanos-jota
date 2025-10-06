const express = require('express');
const productsRouter = require('./routes/products');
const requestLogger = require('./middlewares/logger');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandlers');

const app = express();

// Middlewares global simple
app.use(express.json());
app.use(requestLogger);

// Rutas de productos
app.use('/api/productos', productsRouter);

// 404 y manejador de errores
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;


const products = require('../data/products');

function getAllProducts(req, res) {
  return res.json(products);
}

function getProductById(req, res, next) {
  try {
    const { id } = req.params;
    const numericId = Number(id);
    const product = products.find((p) => p.id === numericId);

    if (!product) {
      const error = new Error('Producto no encontrado');
      error.status = 404;
      throw error;
    }

    return res.json(product);
  } catch (err) {
    return next(err);
  }
}

module.exports = { getAllProducts, getProductById };


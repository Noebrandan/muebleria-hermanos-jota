const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers/productsController');

const router = Router();

// GET /api/productos
router.get('/', getAllProducts);

// GET /api/productos/:id
router.get('/:id', getProductById);

module.exports = router;


const express = require('express');
const router = express.Router();
const { generateProductDescriptionWithAI } = require('../services/aiServices');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    generateDescription
} = require('../controllers/productController');

router.post('/generate-description', generateDescription);
router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;

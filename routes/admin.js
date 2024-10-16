const path = require('path');
const express = require('express');
const router = express.Router();
const products = [];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(path.dirname(require.main.filename), 
  'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({little: req.body.tittle})
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
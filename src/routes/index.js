const express = require('express');
const productsRoute = require('./products');
const usersRoute = require('./users');

const router = express.Router();

router.use('/products', productsRoute);
router.use('/users', usersRoute);
router.get('/', (req, res) => res.send('Hello World!'));

module.exports = router;
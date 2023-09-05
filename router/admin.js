const express = require('express');
const path = require('path')
const rootDir = require('../util/path');
const adminRouter = express.Router();

adminRouter.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views','add-product.html'));
});

adminRouter.post('/add-product', (req, res, next) => { 
    res.render('add-product', {pageTitle : "Add-product"});
});


module.exports = adminRouter
  
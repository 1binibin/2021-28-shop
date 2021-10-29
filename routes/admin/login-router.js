const path = require('path');
const express = require('express');
const router = express.Router();
const { error } = require('../../modules/util');

router.get('/', (req, res, next) => {
  res.render('admin/auth/login', { css: 'admin-login' });
});

router.post('/', (req, res, next) => {
  res.send('login');
});

module.exports = { name: '/login', router };

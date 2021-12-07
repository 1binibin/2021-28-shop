const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.render('admin/color/color-list');
  } catch (err) {
    next(createError(err));
  }
});

router.put('/', async (req, res, next) => {
  try {
    res.send('hello');
  } catch (err) {
    next(createError(err));
  }
});

router.delete('/', async (req, res, next) => {
  try {
    res.send('hello');
  } catch (err) {
    next(createError(err));
  }
});

module.exports = { name: '/color', router };

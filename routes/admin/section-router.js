const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.get('/', async (req, res, next) => {
  try {
    res.send('hello');
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

module.exports = { name: '/section', router };

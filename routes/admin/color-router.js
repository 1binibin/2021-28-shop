const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { Color } = require('../../models');

router.get('/', async (req, res, next) => {
  try {
    const list = await Color.findAll({ attribute: ['id', 'name', 'code'], order: [['id', 'desc']] });
    console.log(list);
    res.render('admin/color/color-list', { list });
  } catch (err) {
    next(createError(err));
  }
});

router.post('/', async (req, res, next) => {
  try {
    await Color.create(req.body);
    res.redirect('/admin/color');
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

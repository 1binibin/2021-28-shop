const path = require('path');
const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const { error, absPath } = require('../../modules/util');
const { BoardComment } = require('../../models');
const queries = require('../../middlewares/query-mw');
const boardinit = require('../../middlewares/boardinit-mw');

router.post('/', queries('body'), async (req, res, next) => {
  try {
    await BoardComment.create({ ...req.body });
    res.redirect('board/' + req.body.board_id + '?' + res.locals.goQuery);
  } catch (err) {
    next(createError(err));
  }
});

router.delete('/', queries('body'), async (req, res, next) => {
  try {
    await BoardComment.destroy({ where: { id: req.body.id } });
    res.redirect('board/' + req.body.board_id + '?' + res.locals.goQuery);
  } catch (err) {
    next(createError(err));
  }
});

module.exports = { name: '/comment', router };

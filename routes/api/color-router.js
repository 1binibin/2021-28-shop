const express = require('express');
const router = express.Router();
const queries = require('../../middlewares/query-mw');
const { Color } = require('../../models');

// 리스트
router.get('/', queries(), async (req, res, next) => {
  try {
    const rs = await Color.findAll({ order: [['name', 'asc']] });
    const color = rs.map((v) => v.toJSON());
    res.status(200).json(color);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 컬러 하나
router.get('/:id', queries(), async (req, res, next) => {
  try {
    const color = await Color.findOne({ where: { id: req.params.id }, order: [['name', 'asc']] });
    res.status(200).json(color);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = { name: '/color', router };

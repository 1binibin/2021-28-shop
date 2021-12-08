const express = require('express');
const router = express.Router();
const queries = require('../../middlewares/query-mw');
const { Section } = require('../../models');

// 리스트
router.get('/', queries(), async (req, res, next) => {
  try {
    const rs = await Section.findAll({ order: [['name', 'asc']] });
    const section = rs.map((v) => v.toJSON());
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 컬러 하나
router.get('/:id', queries(), async (req, res, next) => {
  try {
    const section = await Section.findOne({ where: { id: req.params.id }, order: [['name', 'asc']] });
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = { name: '/section', router };

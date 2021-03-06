const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { moveFile, alert } = require('../../modules/util');
const db = require('../../models');
const { isAdmin } = require('../../middlewares/auth-mw');

router.delete('/file/:id', isAdmin(8, 'API'), async (req, res, next) => {
  try {
    const modelName = req.query.modelName || 'BoardFile';
    const { id } = req.params;
    const { saveName } = await db[modelName].findOne({ where: { id }, attributes: ['saveName'] });
    await moveFile(saveName);
    await db[modelName].destroy({ where: { id } });
    res.status(200).json({ code: 200, result: 'success' });
  } catch (err) {
    next(createError(err));
  }
});

module.exports = { name: '/api', router };

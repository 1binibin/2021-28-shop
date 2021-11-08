const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { moveFile, alert } = require('../../modules/util');
const { BoardFile } = require('../../models');

router.delete('/file/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { saveName } = await BoardFile.findOne({ where: { id }, attributes: ['saveName'] });
    await BoardFile.destroy({ where: { id } });
    await moveFile(saveName);
    res.status(200).json({ code: 200, result: 'success' });
  } catch (err) {
    next(createError(err));
  }
});

module.exports = { name: '/api', router };

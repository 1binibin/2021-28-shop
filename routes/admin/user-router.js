const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const queries = require('../../middlewares/query-mw');
const { telNumber, alert, getSeparateArray } = require('../../modules/util');
const { User } = require('../../models');

// 회원 등록 화면
router.get('/', queries(), (req, res, next) => {
  if (req.query.type === 'create') {
    const ejs = { telNumber };
    res.render('admin/user/user-form', ejs);
  } else next();
});

// 회원리스트
router.get('/', queries(), async (req, res, next) => {
  try {
    let { field, search, sort, status } = req.query;
    const { lists, pager, totalRecord } = await User.getLists(req.query);
    const ejs = { telNumber, pager, lists, totalRecord };
    res.render('admin/user/user-list', ejs);
  } catch (err) {
    next(createError(err));
  }
});

// 회원 수정 화면
router.get('/:id', queries(), async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    user.tel = getSeparateArray(user.tel, '-');
    const ejs = { telNumber, user };
    res.render('admin/user/user-update', ejs);
  } catch (err) {
    next(createError(err));
  }
});

// 회원 저장
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send(alert('회원가입이 완료되었습니다.', '/admin/user'));
  } catch (err) {
    next(createError(err));
  }
});

// 회원 수정
router.put('/', async (req, res, next) => {
  try {
    const [rs] = await User.update(req.body, {
      where: { id: req.body.id },
      individualHooks: true,
    });
    if (rs) res.send(alert('회원수정이 완료되었습니다.', '/admin/user'));
    else res.send(alert('처리되지 않았습니다', '/admin/user'));
  } catch (err) {
    next(createError(err));
  }
});

// 회원 삭제
router.delete('/', async (req, res, next) => {
  try {
    const { id } = req.body;
    await User.destroy({ where: { id } });
    res.redirect('/admin/user');
  } catch (err) {
    next(createError(err));
  }
});

module.exports = { name: '/user', router };

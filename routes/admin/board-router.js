const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const boardinit = require('../../middlewares/boardinit-mw');
const uploader = require('../../middlewares/multer-mw');
const afterUploader = require('../../middlewares/after-multer-mw');
const { Board, BoardFile } = require('../../models');

// 신규글 작성
router.get('/', boardinit, (req, res, next) => {
  const { type } = req.query;
  if (type === 'create') {
    res.render('admin/board/board-form', { type });
  } else next();
});

// 리스트
router.get('/', boardinit, (req, res, next) => {
  const { type } = req.query;
  res.render('admin/board/board-list', { type });
});

// 상세보기
router.get('/:id', (req, res, next) => {
  const type = req.query.type;
  const boardType = req.query.boardType || 'default';
  if (type === 'update') {
    res.render('admin/board/board-form', { css: 'admin-board', boardType });
  } else {
    res.render('admin/board/board-view', { css: 'admin-board', boardType });
  }
});

// 게시물 저장
router.post(
  '/',
  boardinit,
  uploader.fields([{ name: 'img' }, { name: 'pds' }]),
  afterUploader(['img', 'pds']),
  async (req, res, next) => {
    try {
      req.body.user_id = 1; // 회원작업 후 수정 예정
      req.body.binit_id = res.locals.boardId;
      const board = await Board.create(req.body);
      req.files.forEach((file) => (file.board_id = board.id));
      const files = await BoardFile.bulkCreate(req.files);
      res.redirect('/admin/board?boardId=' + res.locals.boardId);
    } catch (err) {
      next(createError(err));
    }
  }
);

router.put('/', (req, res, next) => {
  res.send('/admin/board:PUT');
});

router.delete('/', (req, res, next) => {
  res.send('/admin/board:DELETE');
});

module.exports = { name: '/board', router };

/* // 신규글 작성
router.get('/', boardinit, (req, res, next) => {
  const { type } = req.query;
  if (type === 'create') {
    res.render('admin/board/board-form', { type, ...binit });
  } else next();
});

// 리스트
router.get('/', boardinit, (req, res, next) => {
  const binit = req.binit;
  const { type } = req.query;
  res.render('admin/board/board-list', { type, ...binit });
}); */

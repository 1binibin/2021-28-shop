const createPager = require('../modules/pager-init');

module.exports = (model, _listCnt = 5, _pagerCnt = 3) => {
  return async (req, res, next) => {
    const { page = 1 } = req.query;
    const totalRecord = await model.getCount(req.query);
    const pager = createPager(page, totalRecord, 5, 3);
    req.pager = pager;
    res.locals.pager = pager;
    next();
  };
};

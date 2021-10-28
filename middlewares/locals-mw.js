const linkInit = require('../modules/link-init');
module.exports = (req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.path = {};
  res.locals.init = linkInit.admin;
  res.locals.current = req.path;
  res.locals.currents = req.path.split('/');
  res.locals.currents.shift();
  const { currents } = res.locals.path;
  res.locals.path.second = '/' + res.locals.path.currents[0];
  res.locals.path.second += res.locals.path.currents[1]
    ? '/' + res.locals.path.currents[1]
    : '';
  next();
};

/* 
path: {
  current: 현재경로
  currents: 경로 배열 
  second: 2Depth 경로
}
*/

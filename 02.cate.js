const fs = require('fs-extra');
const path = require('path');
const { findChildId, findLastId } = require('./modules/util');
const [jsonFile] = fs.readJsonSync(path.join(__dirname, './json/tree.json'));
const cateIds = findLastId(jsonFile, []);

console.log(cateIds);

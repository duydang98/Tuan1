var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
 //lu du lieu vao file json cung thu muc
var adapter = new FileSync('db.json');
var db = low(adapter);
// Set some defaults
db.defaults({ users: [],products: [],sessionId: []})
  .write()
module.exports = db;
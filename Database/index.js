var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'valence'
})

var returnEntries = function (cb) {
  connection.query('select * from entries', function (err, results) {
    if (err) {
      cb(err,null)
    } else {
      cb(null, results)
    }
  })
}

module.exports.returnEntries = returnEntries;
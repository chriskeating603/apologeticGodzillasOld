var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'valence'
})

mysqlConnection.connection();

module.exports = mysqlConnection;

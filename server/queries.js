var mysql = require('mysql');
// var Schema = require('../database/schema.sql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'valence'
})


connection.connection();

// CHECK IF USING SCHEMA HERE IS APPROPRIATE, CONSIDER MAKING CONNECTION FILE
connection.query(Schema, function (err, reults, fields) {
  if (err) {
    console.error('Schema did not load', err);
  } else {
    console.log('Schema loaded!')
  }
});

// may need to refactor name select depending on data stream
modular.exports = {

  // QUERY DOES NOT WORK YET, BUT IS CLOSE!
  selectUserData: function (name, callback) {
    connection.query(
    `SELECT entries.* FROM entries, users WHERE
    entries.users_id =
    (SELECT id FROM users WHERE username = ${name}
    )`, function (err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  };

  // may need to refactor variables depending on data stream
  insertUserData: function (data, callback) {
    connection.query(
    `INSERT INTO entries (sleepHrs, minsExercise, mood, users_ID) VALUES
    (${data.sleepHrs}, ${data.exerciseMins}, ${data.moodLeveliu}, ${data.username})
    `), function (err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  };

}

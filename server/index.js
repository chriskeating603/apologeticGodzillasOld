var express = require('express');
var bodyParser = require('body-parser');
var queries = require('./query.js');

// import database schema or file
// and/or import database query functions

var app = express();

// import React files;

// middleware that accepts only url Encoded files down server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./'))
app.use(express.static(__dirname + '/../client/dist'));


// "Parses the text as JSON and exposes the resulting object on req.body.""
// **Might be unncessary
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.status(200);
  res.json({
    Success: true
  });
  
  // perform database query to select all data for user using helper function
  // that is same as POST listener function

  // var data = JSON.parse(res.data);
  // *** NEED TO CHECK IF DATA.USERNAME WORKS FOR GET REQUEST
  queries.selectUserData('TO_DO: username' function (err, results) {
    if (err) {
      console.error('User data not selected')
    }
    // on success: send data to graph creator or client to display
    res.json({
      Success: true,
      Data: results;
      // **Need to test results
    });
  }

});

app.post('/users', function (req, res) {
  res.status(201)
  res.json({
    Success: true
  });

  // perform database query to insert user using helper function

  // var data = JSON.parse(res.data);
  queries.insertUserData('TO_DO: data object', function err, results) {
    if (err) {
      console.error('User data cannot be inserted into table');
    }
    // on success: perform database query to select all data for user using
    // helper function that is same as GET listener function
    res.json({
      Sucess: true
    });
    // on success: send data to graph creator or client to display
    queries.selectUserData('TO_DO: username' function (err, results) {
      if (err) {
        console.error('User data not selected')
      }
      // on success: send data to graph creator or client to display
      res.json({
        Sucess: true,
        Data: results;
        // **Need to test results
      });
    };
  }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
})

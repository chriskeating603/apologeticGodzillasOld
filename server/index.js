var express = require('express');
var bodyParser = require('body-parser');

// import database schema or file
// and/or import database query functions

var app = express();

// import React files;

// middleware that accepts only url Encoded files down server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./'))
app.use(express.static(__dirname + '/../client/dist'));


app.get('/', function (req, res) {
  res.status(200);
  res.json({
    Success: true
  });
  // perform database query to select all data for user using helper function that is same as POST listener function
    // on success: send data to graph creator or client to display
});

app.post('/users', function (req, res) {
  res.status(201)
  res.json({
    Success: true
  });
  // perform database query to insert user using helper function
    // on success: perform database query to select all data for user using helper function that is same as GET listener function
      // on success: send data to graph creator or client to display
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
})

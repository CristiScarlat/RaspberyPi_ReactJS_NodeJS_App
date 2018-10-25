var http = require('http');
var express = require('express');

var app = express();

//Next we will define an array of objects the client will be able to query….

var inputs = [{ pin: '11', gpio: '17', value: 1 },
              { pin: '12', gpio: '18', value: 0 }];

const PORT = 5000;

// Express route for incoming requests for a customer name
app.get('/inputs/:id', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).send(inputs[req.params.id]);
}); 

// Express route for any other unrecognised incoming requests
app.get('*', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(404).send('Unrecognised API call');
});

// Express route to handle errors
app.use(function(err, req, res, next) {
  if (req.xhr) {
    res.header('Access-Control-Allow-Origin', '*');
    res.status(500).send('Oops, Something went wrong!');
  } else {
    next(err);
  }
});

app.listen(PORT);
console.log('App Server running at port ' + PORT);

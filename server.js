var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('*.*', function(req, res) {
  res.sendFile(__dirname + '/static/' + req.path);
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App is listening at http://%s:%s', host, port);
});

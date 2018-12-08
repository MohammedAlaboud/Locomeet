var express = require('express');
var app = express();

var port = 8000;

//app.use(bodyParser.json());

app.listen(port, function() {
  console.log('app listening on port ' + port);
});
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true 
}));

app.use('/cssFiles', express.static(__dirname + '/views'));

app.get('/', (req, res) => {
	res.sendFile('main.html', {root: path.join(__dirname, './views')});
});


app.listen(3000, () => {
    console.log('Server started on port 3000...');
})
// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	q=url.parse(req.url, true);
// 	query=q.query;
// 	pathname=q.pathname;
// 	switch(pathname){
// 		case "/create":
// 			res.write("Page to create new form");
// 			break;
// 		case "/input":
// 			res.write("Page to input data");
// 			break;			
// 		case "/results":
// 			res.write("Page with results");
// 			token=query.i;
// 			var algo = require('algo');
// 			algo.getMeetingTimes()
// 			break;
// 		default:
// 			res.write("hm...nothing here");
// 			return;
// 	}
// 	res.end();
// }).listen(8080);

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var port = 3000;


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	// res.send('main.html')
	res.sendFile(path.join(__dirname + '/views/main.html'));
});


app.listen(3000, () => {
    console.log('Server started on port 3000...');
})



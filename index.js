var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	q=url.parse(req.url, true);
	query=q.query;
	pathname=q.pathname;
	switch(pathname){
		case "/create":
			res.write("Page to create new form");
			break;
		case "/input":
			res.write("Page to input data");
			break;			
		case "/results":
			res.write("Page with results");
			token=query.i;
			var algo = require('algo');
			algo.getMeetingTimes()
			break;
		default:
			res.write("hm...nothing here");
			return;
	}
	res.end();
}).listen(8080);
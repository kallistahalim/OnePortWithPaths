var http = require("http");

var PORT = 7000;

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("server listening on http://localhost:" + PORT);
});

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/":
            return displayRoot(path, req, res);

        case "/portfolio":
            return displayPortfolio(path, req, res);

        default:
            return display404(path, req, res);
    }
}

function displayRoot(url, req, res) {
    var myHTML = "<html>" + "<body><H1>HomePage</H1>" + "<a href = '/portfolio'>Portfolio</a>" + "</body></html>";
    res.writeHead(200, { "content-type" : "text/html"});
    res.end(myHTML);
};

function displayPortfolio(url, req, res) {
    var myHTML = "<html>" + "<body>" + "<h1>Portfolio</h1>" + "<a href = '/'>Home Page</a>" + "</body>" + "</html>";
    res.writeHead(200, { "content-type" : "text/html"});
    res.end(myHTML);
}

function display404(url,req, res) {
    var myHTML =  "<html>" + "<body>" + "<h1>404 not found</h1>" + "<p>The page you are looking for " + "http://localhost:" +PORT + url + " can not be found</p>" + "</body>" + "</html>";
    res.writeHead(404, { "content-type" : "text/html"});
    res.end(myHTML);
}



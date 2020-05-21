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


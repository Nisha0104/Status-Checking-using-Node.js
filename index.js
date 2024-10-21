const http = require("http");
const hostname = "127.0.0.1"; //server host name
const port = 3000; //server port number
// create an server
//function will be executed when request comes
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is about page");
  } else if (req.url === "/notfound") {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Page Not Found");
  } else if (req.url === "/error") {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Page Not Found");
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("bad request");
  }
});
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});

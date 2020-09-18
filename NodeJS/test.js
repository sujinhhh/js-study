let http = require("http");
let ourApp = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("hello, welcome");
  }
  if (req.url == "/about") {
    res.end("this is about");
  }
  res.end(" not found");
});
ourApp.listen(3000);

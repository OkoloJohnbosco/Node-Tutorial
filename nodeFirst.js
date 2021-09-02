const http = require("http");
const fs = require("fs");

function reqListener(req, res) {
  const url = req.url;
  const meth = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body><form action='/message' method='POST' name='message'>");
    res.write("<input type='text' />");
    res.write("<button type='submit'>Submit form</button>");
    res.write("</form></body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && meth === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body>");
  res.write("<h1>Hello</h1>");
  res.write("<h1>Passenger</h1>");
  res.write("</body>");
  res.write("</html>");

  res.end();
  // process.exit();
}

// console.log(http);
const server = http.createServer(reqListener);
server.listen(8000);

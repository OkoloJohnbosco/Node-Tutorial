const http = require('http');

const serverReqListener = (req, res) => {
  console.log(req.url, req.method, req.headers);

  // To quit the process
  //   process.exit()

  res.setHeader('Content-Type', 'text/html');

  // A simple text
  res.write('I Love Zuri Internship');

  //   Web Page????
  // I dont quite understand the question
  res.write('<html>');
  res.write(
    '<body style="text-align: center"><h1>Hello from Node server</h1></body>'
  );

  //   The json
  res.end(`
  {
      "name: "Okolo Johnbosco",
      "country": "Nigeria",
      "hobby": "Singing"
    }
  
  `);
};

const server = http.createServer(serverReqListener);

// This opens up a listener on port 4200
server.listen(4200);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server= http.createServer((req, res) =>{
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello Ice Cream");
  }
  else if (req.url === '/ice-cream') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Tanks for ordering Ice Cream");
  }
  else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end("404 Not Found");
  }
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
})
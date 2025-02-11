const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('NodeJS server running on Shared Hosting\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${studenteducationsystem.com}:${3000}/');
});
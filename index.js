const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from ${os.hostname()}!\nVersion: 1.0\n`);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

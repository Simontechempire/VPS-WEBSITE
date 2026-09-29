const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <h1>🚀 VPS is LIVE!</h1>
    <p>Your Node.js server is running 24/7</p>
    <p>Time: ${new Date()}</p>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

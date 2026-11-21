
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 10000;
const file = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
        res.end('KUMI STUDIO: page loading error');
        return;
      }
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      res.end(data);
    });
    return;
  }

  res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
  res.end('Not found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('KUMI STUDIO server started on port ' + PORT);
});

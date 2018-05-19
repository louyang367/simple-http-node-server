let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
  fs.writeFile('hello-world.txt', "Hello to this great world", 'utf8', (err) => {
  if (err) throw err;
  console.log('success');
  });
}).listen(3000);

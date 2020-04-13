const http = require('http');

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Set-Cookie', [`foo=bar;expires=${new Date('2021-01-01')};domain=bb.com;`, `foo1=bar1;expires=${new Date('2021-01-01')};domain=bb.com;`]);
  const cookie = res.getHeader('Set-cookie');
  console.log(cookie);
  res.end('ba-ba-ba-la-la...');
}).listen(9000);
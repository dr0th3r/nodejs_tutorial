const http = require('http');

const sever = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  else if (req.url === '/about') {
    res.end('Here is our about page')
  } else {
    res.end(`
      <h1>This is ${req.url.slice(1,)} page</h1>
      <a href='/'>Home Page</a>
    `)
  }
})

sever.listen(5000)
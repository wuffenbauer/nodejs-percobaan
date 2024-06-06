const http = require('http')

let server = http.createServer((req, res) => {
    console.log('Tes, nyalain server.')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello World!<hr><hr>')
})

server.listen(3000, () => {
    console.log('Server sudah siap jalan.')
})
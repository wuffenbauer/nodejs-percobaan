const http = require('http')
const URL  = require('url')
const qs   = require('querystring')
const port = 3000

let server = http.createServer(function(request, respon) {
        console.log(request.url)
        console.log(URL.parse(request.url).query)
        console.log(qs.parse(URL.parse(request.url).query))
        // respon.writeHead(200, {'Content-Type': 'text/html'})
        // respon.write()
        // respon.end()
})

server.listen(port, () => {
    console.log(`Server sudah on, buka http://localhost:${port}`)
})
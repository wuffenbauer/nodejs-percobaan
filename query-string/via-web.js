const http = require('http')
const URL  = require('url')
const qs   = require('querystring')
const port = 3000

let server = http.createServer(function(request, respon) {
    let url_asli        = request.url
    let url_queryString = URL.parse(url_asli).query
    let url_object      = qs.parse(url_queryString)

    respon.writeHead(200, {'Content-Type': 'text/html'})
    respon.write(
        '<h1>Nama saya adalah ' + url_object.nama + ', bekerja sebagai ' + url_object.pekerjaan + '.</h1>'
    )
    respon.end()
})

server.listen(port, () => {
    console.log(`Server sudah on, buka http://localhost:${port}`)
})
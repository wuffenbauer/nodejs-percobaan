const http  = require('http')
const URL   = require('url')
const qs    = require('querystring')
const mysql = require('mysql2')
const port  = 3000
const db    = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'xdb_belajar_database',
})
db.connect()

let server = http.createServer(function(req, res) {
    let url_asli        = req.url
    let url_queryString = URL.parse(url_asli).query
    let url_object      = qs.parse(url_queryString)

    res.writeHead(200, {'Content-Type': 'text/html'})
    db.query(`SELECT * FROM daftar_karyawan WHERE nama = ?`, [url_object.nama], function(errorSql, hasil) {
        if (errorSql) throw errorSql

        let datakaryawan = ''
        if (hasil.length > 0) {
            for (const i in hasil) {
                datakaryawan +=
                `<ul>
                    <li>Nama: ${hasil[i].nama}</li>
                    <li>Alamat: ${hasil[i].alamat}</li>
                    <li>Golongan Darah: ${hasil[i].gol_darah}</li>
                </ul>`
            }
        }   
        else {
            datakaryawan = `<h2>Tidak ada karyawan dengan nama ${url_object.nama}</h2>`
        }
        res.write(datakaryawan)
        res.end()
    })
})

server.listen(port, function() {
    console.log(`Server sudah on, buka http://localhost:${port}`)
})
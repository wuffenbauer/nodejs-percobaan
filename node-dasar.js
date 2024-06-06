let nama = 'Ami'
let alamat = 'Pamulang'
let gajian = 100000 * 30 - 35000

// menggunakan modul http yang sudah disiapkan oleh node.js
// modul http berfungsi untuk...
// ...membuat komputer kita bisa diakses dari luar
// (dengan menggunakan internet)
// localhost adalah replika (dummy) dari situs web asli,
// tapi hanya berjalan di komputer kita...
// ...untuk keperluan pengembangan/pembuatan aplikasi
const http = require('http')

let server = http.createServer((req, res) => {
    // mendefinisikan status code dan tipe konten yang ingin diberikan ke user
    res.writeHead(200, {'Content-Type': 'text/html'})

    // isi konten
    res.end(nama + ' ' + alamat + ' ' + gajian)
})

// konfigurasi port yang ingin digunakan
// karena port default (80) sudah dipakai oleh software lain
// jadi kita pakai port yang free
server.listen(3000, () => {
    console.log('Server sudah siap jalan.')
})
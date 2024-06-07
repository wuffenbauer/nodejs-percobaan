// panggil modul mysql dari node_modules
const mysql = require('mysql2')


// konfigurasi ke database mysql yang ingin digunakan
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xdb_belajar_database',
})

// menyambungkan atau membuka koneksi
database.connect()

// 
try {
    database.query('SELECT * FROM daftar_karyawan', function(error, hasil) {
        if (error) throw error

            // untuk melihat data yang dihasilkan dari syntax sql yang ditulis
            // console.log(hasil)

            // data yang sudah diolah
            for (const i in hasil) {
                let notelp = ''
                if (hasil[i].no_telepon) {
                    notelp = hasil[i].no_telepon
                }
                else {
                    notelp= '-'
                }
                console.log(hasil[i].nama + ', No. Telp: ' + notelp)
                }
    })
    database.end()
} catch (err) {
    console.log(err)
}
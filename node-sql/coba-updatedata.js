const mysql = require('mysql2')
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xdb_belajar_database',
})

database.connect()

try {
    let sql = 
        `UPDATE daftar_karyawan
        SET nama = 'Richard EB', alamat = 'Amerika', gol_darah = 'O'
        WHERE id = 9;`
    database.query(sql, function (errorSql, hasil) {
            if (errorSql) throw errorSql
                // console.log(hasil)
            if (hasil.affectedRows > 0) {
                console.log(`Berhasil edit ${hasil.affectedRows} data.`)
            } 
            else {
                console.log(`Gagal edit data.`)
            }
        }
    )
    database.end()
} catch (error) {
    console.log(error)
}
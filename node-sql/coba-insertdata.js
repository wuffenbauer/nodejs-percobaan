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
        `INSERT INTO daftar_karyawan 
        (nama, alamat, no_telepon, gol_darah, jenis_kelamin, departemen_id, jabatan_id)
        VALUES 
        ('Chester Bennington', 'Amerika', null, 'O', 'L', 3, 3)`
    database.query(sql, function (errorSql, hasil) {
            if (errorSql) throw errorSql
                // console.log(hasil)
            if (hasil.affectedRows > 0) {
                console.log(`Berhasil menambah ${hasil.affectedRows} data.`)
            } 
            else {
                console.log(`Gagal menambah data.`)
            }
        }
    )
    database.end()
} catch (error) {
    console.log(error)
}
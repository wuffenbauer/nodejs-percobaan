let nama    = 'Amirah Puspadewi'
let alamat  = 'Pamulang, Tangerang Selatan'

function biodata() {
    let hasil =
    `
    Nama: ${nama}
    Alamat: ${alamat}
    Pekerjaan: Penerjemah Lepas`

    return hasil
}

// console.log(nama + ', ' + alamat)
module.exports = {
    nama, 
    alamat, 
    cetakBiodata: biodata()
}
let gajiPokok = 4000000
let tunjanganJabatan = 750000
let bpjs = (2.5 / 100) * gajiPokok
let netGaji = gajiPokok + tunjanganJabatan - bpjs

function slipGaji() {
    let hasil = 
    `Gaji Karyawan Periode Juni 2024\n` +
    `===============================\n` +
    `Gaji Pokok: Rp${gajiPokok.toLocaleString('id-ID')},-\n` +
    `Tunjangan Jabatan: Rp${tunjanganJabatan.toLocaleString('id-ID')},-\n` +
    `Potongan BPJS: -Rp${bpjs.toLocaleString('id-ID')},-\n` +
    `Net Gaji: Rp${netGaji.toLocaleString('id-ID')},-\n`

    return hasil
}

module.exports = {
    cetak_slipGaji: slipGaji(),
}
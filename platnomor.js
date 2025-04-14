let platNomor = ['B 2403 NDR', 'B 1354 WIB', 'B 3678 WIT'];

let tanggalHariIni = 15;

platNomor.forEach(function(plat) {
    let angka = plat.split(' ')[1]; 
    let angkaTerakhir = angka[angka.length - 1]; 
    let jenisPlatnomor = '';

    switch (angkaTerakhir) {
        case '0':
            jenisPlatnomor = 'GENAP';
            break;
        case '1':
            jenisPlatnomor = 'GANJIL';
            break;
        default:
    }

   let jenistanggal = (tanggal % 2 === 0) ? 'GENAP' : 'GANJIL';

 
    let bolehmelintas = (jenisPlatnomor === jenistanggal) ? 'BOLEH' : 'TIDAK BOLEH';

    console.log(${plat} adalah plat ${jenisPlatnomor} maka ${bolehmelintas} melintas karena hari ini tanggal ${tanggalHariIni});
});

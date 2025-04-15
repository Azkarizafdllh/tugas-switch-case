let platNomor = ['B 2403 NDR', 'B 1354 WIB', 'B 3678 WIT'];
let tanggalHariIni = 15;

platNomor.forEach(function(plat) {
    let angka = plat.split(' ')[1]; 
    let angkaTerakhir = angka[angka.length - 1]; 
    let jenisPlatnomor = '';

    switch (angkaTerakhir) {
        case '0':
        case '2':
        case '4':
        case '6':
        case '8':
            jenisPlatnomor = 'GENAP';
            break;
        default:
            jenisPlatnomor = 'GANJIL';
    }

    let jenisTanggal = (tanggalHariIni % 2 === 0) ? 'GENAP' : 'GANJIL';
    let bolehMelintas = (jenisPlatnomor === jenisTanggal) ? 'BOLEH' : 'TIDAK BOLEH';

    console.log(`${plat} adalah plat ${jenisPlatnomor}, maka ${bolehMelintas} melintas karena hari ini tanggal ${tanggalHariIni}`);
});

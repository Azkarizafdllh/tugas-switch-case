let hargaAwal = 500000;
console.log("harga awal: " + hargaAwal)


let diskonPersen =20;
console.log(Diskon = + {diskonPersen}%)

let potonganHarga = hargaAwal * (diskonPersen / 100);
hargaAwal -= potonganHarga;

console.log("Potongan Harga: " + potonganHarga);
console.log("Harga Setelah Diskon: " + hargaAwal);
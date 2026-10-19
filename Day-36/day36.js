
/*
POTONGAN A: SCOPE

TEBAKAN OUTPUT:
Dalam
Luar
Global
85
di dalam blok
putaran 0
putaran 1

HASIL ASLI:
Dalam
Luar
Global
85
di dalam blok
putaran 0
putaran 1
*/

const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);
}

// Percobaan 1:
// Tebakan: ReferenceError karena pesanBlok hanya berlaku di dalam blok if.
// Hasil asli: ReferenceError: pesanBlok is not defined.
// console.log(pesanBlok);

// Percobaan 2:
// Tebakan: ReferenceError karena i hanya berlaku di dalam perulangan for.
// Hasil asli: ReferenceError: i is not defined.
// console.log(i);


/*
POTONGAN B: HOISTING

TEBAKAN OUTPUT:
Halo!
undefined
biru

HASIL ASLI:
Halo!
undefined
biru
*/

console.log(sapa());

function sapa() {
  return "Halo!";
}

console.log(warna);
var warna = "biru";
console.log(warna);

// PERCOBAAN 1 — jalankan secara terpisah.
// Tebakan: ReferenceError karena lokasi belum diinisialisasi.
// Hasil asli: ReferenceError: Cannot access 'lokasi'
// before initialization.

// console.log(lokasi);
// const lokasi = "Sleman";

// PERCOBAAN 2 — jalankan secara terpisah.
// Tebakan: TypeError karena salam belum bisa dipanggil
// sebagai function sebelum inisialisasi.
// Hasil asli: TypeError: salam is not a function.

// console.log(salam());
// const salam = function () {
//   return "Hai";
// };


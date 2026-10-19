
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


/*
POTONGAN C: CLOSURE

TEBAKAN OUTPUT:
1
2
3
1
4

HASIL ASLI:
1
2
3
1
4
*/

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungB());
console.log(penghitungA());


/*
JAWABAN PERTANYAAN

1. POTONGAN A — SCOPE

Tiga console.log(nama) menghasilkan nilai berbeda karena
JavaScript menggunakan scope dan memilih variabel nama
yang paling dekat dengan tempat variabel tersebut dipanggil.
Fungsi dalam memakai "Dalam", fungsi luar memakai "Luar",
dan kode di luar kedua fungsi memakai "Global".

hitung(100) tetap bisa memakai diskonGlobal karena variabel
tersebut berada di scope luar yang dapat diakses oleh fungsi.
Hasilnya 100 - 10 - 5 = 85.

pesanBlok error di luar if karena dideklarasikan menggunakan
let di dalam blok if. Variabel i juga error di luar for
karena dideklarasikan menggunakan let di dalam perulangan.

2. POTONGAN B — HOISTING

sapa() bisa dipanggil sebelum definisi karena function
declaration dapat digunakan sebelum baris deklarasinya.

warna bernilai undefined karena deklarasi var diproses
lebih awal, tetapi nilai "biru" baru diberikan saat eksekusi
mencapai baris tersebut.

lokasi menimbulkan ReferenceError karena const belum
diinisialisasi saat diakses sebelum deklarasinya.

salam menimbulkan TypeError karena variabel salam belum
berisi fungsi saat dipanggil. Deklarasi const belum selesai
diinisialisasi.

3. POTONGAN C — CLOSURE

penghitungA terus bertambah karena fungsi yang dikembalikan
menyimpan akses ke variabel hitungan milik pemanggilan
buatPenghitung() yang pertama.

penghitungB mulai dari 1 karena pemanggilan
buatPenghitung() yang kedua membuat variabel hitungan
baru dengan nilai awal 0. Kedua penghitung memiliki
lingkungan variabel yang terpisah.

REFLEKSI:
Bagian yang paling sulit adalah hoisting pada var dan const
karena keduanya memiliki perilaku berbeda saat diakses
sebelum deklarasi. Saya memahami bahwa urutan kode dan
jenis deklarasi memengaruhi hasil JavaScript.
*/

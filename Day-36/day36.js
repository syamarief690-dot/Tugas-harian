
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


// ==========================================
// LANGKAH 2: PERBAIKI 8 KESALAHAN
// ==========================================

// 1. Scope pesanStok
const stok = 10;
if (stok > 5) {
  let pesanStok = "Stok aman";
  console.log(pesanStok); // FIX 1: cetak di dalam scope let.
}

// 2. Scope potongan
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}

// FIX 2: gunakan nilai return, bukan variabel lokal potongan.
console.log(hitungPotongan(50000)); // 45000

// 3. Hoisting function expression
// FIX 3: deklarasikan const sebelum dipanggil.
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan());

// 4. Temporal dead zone
// FIX 4: deklarasikan let sebelum digunakan.
let kota = "Yogyakarta";
console.log(kota);

// 5. Scope var
// FIX 5: gunakan let agar total di dalam blok terpisah.
let totalAwal = 100000;
if (true) {
  let totalAwal = 90000;
}
console.log(totalAwal); // 100000

// 6. Saldo kas
let saldoKasLuar = 100000;

function tambahKas(jumlah) {
  // FIX 6: ubah saldo di scope luar, jangan membuat saldo lokal baru.
  saldoKasLuar += jumlah;
}

tambahKas(50000);
console.log(saldoKasLuar); // 150000

// 7. Nomor antrean
function buatAntrean() {
  // FIX 7: letakkan nomor di luar function yang dikembalikan.
  let nomor = 0;

  return function () {
    nomor++;
    return nomor;
  };
}

const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor()); // 1 2 3

// 8. Dompet
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;

  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      // FIX 8: gunakan variabel privat saldo, bukan this.saldo.
      return saldo;
    },
  };
}

const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo()); // 70000

// Jawaban pertanyaan:
// 1. Kesalahan pertama memakai let di luar bloknya; kedua membaca
// variabel lokal yang tidak tersedia; ketiga memanggil const sebelum
// deklarasi; keempat membaca let sebelum inisialisasi; kelima memakai
// var yang dapat menimpa nilai di luar; keenam mengubah saldo lokal;
// ketujuh mengatur ulang nomor setiap pemanggilan; kedelapan membaca
// property object yang tidak ada.
//
// 2. Kesalahan 1, 2, 3, dan 4 menimbulkan error pada kode asli.
// Kesalahan 5, 6, 7, dan 8 tidak selalu error, tetapi hasilnya salah
// atau tidak sesuai harapan.
//
// 3. let saldoKas = 0 di dalam function membuat variabel lokal baru.
// Ini disebut shadowing, karena nama lokal menutupi nama dari scope luar.
//
// 4. this.saldo adalah property object, bukan variabel saldo dalam
// closure. Karena property tersebut tidak dibuat, hasilnya undefined.


// ==========================================
// LANGKAH 3: KASIR DENGAN CLOSURE
// ==========================================

const NAMA_WARUNG = "KEDAI SENJA";
const TARIF_PAJAK = 0.11;

// Function dipanggil sebelum deklarasi function.
cetakJudul();

function cetakJudul() {
  console.log(`===== ${NAMA_WARUNG} =====`);
}

// Percobaan function expression sebelum deklarasi.
// Jalankan terpisah untuk melihat error, lalu biarkan sebagai komentar.
// cetakJudulEkspresi();
// const cetakJudulEkspresi = () => console.log(NAMA_WARUNG);
// Hasil: ReferenceError: Cannot access 'cetakJudulEkspresi' before initialization

// Pabrik kasir dengan data privat.
function buatKasir(namaKasir, modalAwal) {
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    catatPenjualan(namaMenu, harga, jumlah) {
      const subtotal = harga * jumlah;
      const pajak = subtotal * TARIF_PAJAK;
      const totalPenjualan = subtotal + pajak;

      saldoKas += totalPenjualan;
      jumlahTransaksi++;

      riwayat.push({
        namaMenu,
        jumlah,
        total: totalPenjualan,
      });

      return totalPenjualan;
    },

    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }

      saldoKas -= jumlah;
      return true;
    },

    cekSaldo() {
      return saldoKas;
    },

    lihatRiwayat() {
      return riwayat.slice();
    },

    ringkasan() {
      console.log(
        `Kasir ${namaKasir} | Transaksi: ${jumlahTransaksi} | Saldo: Rp${saldoKas.toFixed(0)}`
      );
    },
  };
}

// Membuat dua kasir dengan data yang terpisah.
const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

// Tiga penjualan kasir pagi.
console.log(
  "Pagi - Nasi Goreng:",
  kasirPagi.catatPenjualan("Nasi Goreng", 15000, 2).toFixed(0)
);
console.log(
  "Pagi - Es Teh:",
  kasirPagi.catatPenjualan("Es Teh", 5000, 3).toFixed(0)
);
console.log(
  "Pagi - Mie Goreng:",
  kasirPagi.catatPenjualan("Mie Goreng", 12000, 2).toFixed(0)
);

// Dua penjualan kasir malam.
console.log(
  "Malam - Kopi:",
  kasirMalam.catatPenjualan("Kopi", 8000, 2).toFixed(0)
);
console.log(
  "Malam - Roti:",
  kasirMalam.catatPenjualan("Roti", 6000, 3).toFixed(0)
);

// Ambil kas: satu berhasil dan satu gagal.
console.log("Ambil Rp20000:", kasirPagi.ambilKas(20000));
// Hasil: true

console.log("Ambil Rp999999:", kasirPagi.ambilKas(999999));
// Hasil: false karena saldo tidak cukup.

// Ringkasan kedua kasir.
kasirPagi.ringkasan();
kasirMalam.ringkasan();

// Buktikan saldo privat.
console.log("Property saldoKas:", kasirPagi.saldoKas);
// Hasil: undefined

kasirPagi.saldoKas = 999999;
console.log("Saldo asli setelah dicoba diubah:", kasirPagi.cekSaldo());
// Hasil: saldo tidak berubah karena saldo privat tidak memakai property
// kasirPagi.saldoKas.

// Buktikan riwayat merupakan salinan.
const salinanRiwayat = kasirPagi.lihatRiwayat();
salinanRiwayat.push({
  namaMenu: "Menu Palsu",
  jumlah: 1,
  total: 1000,
});

console.log("Panjang salinan:", salinanRiwayat.length);
// Hasil: 4

console.log("Panjang riwayat asli:", kasirPagi.lihatRiwayat().length);
// Hasil: 3, karena push dilakukan pada salinan.

// Pabrik function diskon dengan closure.
function buatPenghitungDiskon(persen) {
  return (harga) => harga - harga * persen;
}

const diskon10 = buatPenghitungDiskon(0.10);
const diskon25 = buatPenghitungDiskon(0.25);

console.log("Harga setelah diskon 10%:", diskon10(80000));
// Hasil: 72000

console.log("Harga setelah diskon 25%:", diskon25(80000));
// Hasil: 60000

// Shadowing: nama variabel sama, scope berbeda.
const suasanaKedai = "Ramai";

function cekSuasana() {
  const suasanaKedai = "Tenang";
  console.log("Suasana dalam:", suasanaKedai);
}

console.log("Suasana luar:", suasanaKedai);
// Hasil: Suasana luar: Ramai

cekSuasana();
// Hasil: Suasana dalam: Tenang

// Jawaban pertanyaan:
// 1. kasirPagi.saldoKas bernilai undefined karena saldoKas adalah
// variabel lokal privat, bukan property object. Closure membuat method
// tetap bisa mengakses variabel privat tersebut.
//
// 2. Setiap pemanggilan buatKasir membuat lingkungan variabel baru,
// sehingga saldo kasir Rina dan Dodi terpisah.
//
// 3. saldoKas, jumlahTransaksi, riwayat, dan namaKasir tetap diingat
// oleh method yang dikembalikan karena closure mempertahankan akses
// ke lingkungan lexical function pembuatnya.
//
// 4. TARIF_PAJAK bisa dipakai karena JavaScript mencari variabel
// berdasarkan lexical scope, termasuk scope luar tempat function dibuat.
//
// 5. cetakJudul bisa dipanggil lebih awal karena function declaration
// mengalami hoisting. Function expression dengan const tidak bisa
// dipanggil sebelum deklarasinya dijalankan.
//
// 6. diskon10 mengingat persen 0.10 dan diskon25 mengingat persen 0.25
// dari closure masing-masing, jadi nilai persen tidak perlu dikirim lagi.

// ==========================================
// BONUS: LET VS VAR
// ==========================================

// Tebakan:
// let menghasilkan 0 1 2 karena setiap putaran memiliki binding i sendiri.
// var menghasilkan 3 3 3 karena semua function membaca j yang sama.

const fungsiLet = [];

for (let i = 0; i < 3; i++) {
  fungsiLet.push(() => i);
}

console.log(fungsiLet[0](), fungsiLet[1](), fungsiLet[2]());
// Hasil: 0 1 2

const fungsiVar = [];

for (var j = 0; j < 3; j++) {
  fungsiVar.push(() => j);
}

console.log(fungsiVar[0](), fungsiVar[1](), fungsiVar[2]());
// Hasil: 3 3 3

// Penjelasan:
// let membuat binding berbeda untuk setiap putaran perulangan.
// var menggunakan satu variabel j yang sama, dan function baru
// dipanggil setelah perulangan selesai sehingga semuanya membaca 3.
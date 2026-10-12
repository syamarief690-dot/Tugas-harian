// Program pencatatan data usaha
// Dibuat dan diperbaiki untuk latihan JavaScript dasar

// ============================================================
// LANGKAH 1 - PERBAIKI KODE AWAL
// ============================================================

const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020; // FIX: Tahun dibuat number agar bisa dihitung sebagai angka.
const TARIF_PAJAK = 0.11;
let statusBuka = true;
let website = null; // FIX: Deklarasi website dibuat satu kali dan diberi nilai null.
let jumlahProduk = 3;

// FIX: Data harga dan nama sementara tetap dipakai pada langkah awal
// agar perbaikan kode awal dapat diperiksa sebelum struktur datanya diubah.
let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

// FIX: JavaScript membedakan huruf besar dan kecil sehingga nama variabel
// harus sama persis dengan deklarasinya.
console.log(namaUsaha);

// FIX: Console harus ditulis dengan huruf C besar karena nama objeknya console.
console.log("Kota: " + kotaUsaha);

// FIX: tahunBerdiri sekarang number sehingga operasi + menghasilkan penjumlahan.
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

// FIX: TARIF_PAJAK adalah const sehingga nilainya tidak boleh diganti.
// Nilai 0.11 tetap digunakan sesuai ketentuan tugas.

let hargaKopiSetelahPajak =
    hargaProduk[0] * (1 + TARIF_PAJAK); // FIX: Operator perkalian harus menggunakan *.
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurahAwal = Math.min(
    hargaProduk[0],
    hargaProduk[1],
    hargaProduk[2]
);

console.log("Termurah: " + hargaTermurahAwal);

// FIX: Index 3 belum memiliki data sehingga hasilnya undefined.
// Baris tetap ditampilkan untuk menunjukkan perilaku array.
console.log("Produk ke-4: " + produk[3]);

// FIX: Komentar blok ditutup agar kode status usaha dapat dijalankan.
console.log("Status buka: " + statusBuka);

/*
============================================================
CATATAN BUG
============================================================

No | Baris/bagian | Jenis | Penyebab | Perbaikan

1 | let website; lalu let website = null;
  | Error
  | Variabel website dideklarasikan dua kali menggunakan let dalam scope yang sama.
  | Digabung menjadi satu deklarasi: let website = null;

2 | var jumlahProduk = 3;
  | Tidak error tetapi salah aturan tugas
  | var tidak diperbolehkan pada bagian utama tugas.
  | Diganti menjadi let jumlahProduk = 3;

3 | console.log(namausaha);
  | Error
  | namausaha berbeda dengan namaUsaha karena JavaScript bersifat case-sensitive.
  | Menggunakan namaUsaha.

4 | Console.log(...)
  | Error
  | Console bukan objek yang sama dengan console karena JavaScript membedakan huruf besar dan kecil.
  | Menggunakan console.log(...).

5 | tahunBerdiri = "2020";
  | Tidak error tetapi hasil salah
  | Nilainya bertipe string sehingga operator + melakukan penggabungan teks.
  | Mengubah menjadi number: 2020.

6 | TARIF_PAJAK = 0.12;
  | Error
  | Variabel const tidak boleh diberi nilai baru.
  | Baris penggantian nilai dihapus dan tarif tetap 0.11.

7 | hargaProduk[0] x (1 + TARIF_PAJAK);
  | Error
  | JavaScript tidak menggunakan huruf x sebagai operator perkalian.
  | Menggunakan operator *.

8 | console.log("Produk ke-4: " + produk[3]);
  | Tidak error tetapi hasilnya tidak berisi nama produk.
  | Index 3 belum mempunyai data karena array hanya memiliki index 0 sampai 2.
  | Pada langkah berikutnya daftar produk ditambah dan dibuat lebih terstruktur.

9 | Blok komentar /* ...  tidak ditutup.
  | Error
  |/* Komentar blok yang tidak ditutup membuat bagian kode berikutnya dianggap sebagai komentar.
  | Menambahkan  sebelum console.log status.

============================================================

JAWABAN LANGKAH 1

1. Mengapa namausaha dan namaUsaha berbeda?
JavaScript bersifat case-sensitive sehingga huruf besar dan kecil dianggap berbeda. Jadi namausaha dan namaUsaha dianggap sebagai dua nama identifier yang berbeda.

2. Mengapa TARIF_PAJAK ditolak sedangkan statusBuka boleh diubah?
TARIF_PAJAK dibuat menggunakan const sehingga nilainya tidak boleh diberikan nilai baru. statusBuka menggunakan let sehingga nilainya masih boleh diubah selama masih dalam scope yang sama.

3. Mengapa "2020" + 1 menghasilkan "20201"?
Karena "2020" merupakan string, operator + menggabungkan string dengan angka menjadi teks. Saya memilih mengubah tahunBerdiri menjadi number 2020 supaya operasi matematika dapat dilakukan dengan benar.
*/


// ============================================================
// LANGKAH 2 - BENAHI STRUKTUR DATA
// ============================================================

// Object digunakan supaya informasi usaha yang saling berkaitan berada
// dalam satu tempat dan lebih mudah dipanggil berdasarkan nama properti.
const usaha = {
    nama: "Kopi Senja",
    pemilik: "Arief",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    statusBuka: true,
    nomorWhatsApp: "08123456789",
    website: null
};

// Array object dipilih agar nama dan harga suatu produk tidak mudah tertukar.
const daftarProduk = [
    {
        nama: "Kopi Susu",
        harga: 18000
    },
    {
        nama: "Es Teh Manis",
        harga: 7500
    },
    {
        nama: "Roti Bakar",
        harga: 15000
    },
    {
        nama: "Cokelat Panas",
        harga: 12000
    }
];

// Notasi titik digunakan karena nama properti usaha sudah diketahui secara langsung.
console.log("Nama usaha:", usaha.nama);

// Kurung siku menunjukkan bahwa nama properti dapat diakses menggunakan string.
console.log("Kota:", usaha["kota"]);

// Index 0 berarti elemen pertama karena array dimulai dari angka 0.
console.log("Produk pertama:", daftarProduk[0].nama);

// Index terakhir dihitung dari panjang array agar tidak bergantung pada angka
// tertentu jika jumlah produk nanti berubah.
console.log(
    "Produk terakhir:",
    daftarProduk[daftarProduk.length - 1].nama
);

/*
JAWABAN LANGKAH 2

1. Mengapa nomor WhatsApp lebih tepat sebagai string?
Nomor WhatsApp bukan angka yang akan dihitung, tetapi identitas kontak. String juga menjaga angka 0 di bagian depan agar tidak hilang.

2. Mengapa website menggunakan null?
null menunjukkan bahwa website memang belum memiliki nilai. undefined biasanya berarti nilai belum diberikan atau properti tersebut belum tersedia.

3. Mengapa daftarProduk[4] bukan produk ke-4?
Karena array dimulai dari index 0, sehingga produk ke-4 berada pada index 3. Jika mengakses daftarProduk[4], hasilnya adalah undefined karena index tersebut belum ada.
*/


// ============================================================
// LANGKAH 3 - PERHITUNGAN DAN TAMPILAN
// ============================================================

const TAHUN_SEKARANG = 2026;

// Tarif pajak tidak diubah agar tetap mengikuti ketentuan tugas.
const tarifPajak = TARIF_PAJAK;

// Semua nilai pada perhitungan ini tidak perlu diubah setelah dibuat,
// sehingga const lebih aman daripada let.
const usiaUsaha = TAHUN_SEKARANG - usaha.tahunBerdiri;

const hargaSetelahPajak = daftarProduk.map(function (produkItem) {
    return produkItem.harga * (1 + tarifPajak);
});

const semuaHarga = daftarProduk.map(function (produkItem) {
    return produkItem.harga;
});

const hargaTermurah = Math.min(...semuaHarga);
const hargaTermahal = Math.max(...semuaHarga);

const statusUsaha = usaha.statusBuka ? "Buka" : "Tutup";
const keteranganWebsite = usaha.website ?? "belum ada";

console.log(`
===== KARTU USAHA =====
Nama Usaha  : ${usaha.nama}
Pemilik     : ${usaha.pemilik}
Kota        : ${usaha.kota}
Usia Usaha  : ${usiaUsaha} tahun
Status      : ${statusUsaha}
Website     : ${keteranganWebsite}

Daftar Produk (harga + PPN 11%):
${daftarProduk
    .map(
        (produkItem, index) =>
            `${index + 1}. ${produkItem.nama} : Rp ${hargaSetelahPajak[index]}`
    )
    .join("\n")}

Termurah : Rp ${hargaTermurah}
Termahal : Rp ${hargaTermahal}
=======================
`);


/*
JAWABAN LANGKAH 3

1. Alasan memilih const atau let:
- namaUsaha, kotaUsaha, tahunBerdiri, TARIF_PAJAK, usaha, daftarProduk, TAHUN_SEKARANG,
  tarifPajak, usiaUsaha, hargaSetelahPajak, semuaHarga, hargaTermurah,
  hargaTermahal, statusUsaha, dan keteranganWebsite menggunakan const karena
  referensinya tidak perlu diganti.
- statusBuka dan jumlahProduk pada bagian awal menggunakan let karena nilainya
  masih memungkinkan untuk diubah. Pada struktur usaha, statusBuka disimpan
  sebagai properti object.

2. Perhitungan manual:
Contoh produk Es Teh Manis:
Harga awal = Rp7.500
Pajak = 11% × Rp7.500
Pajak = Rp825
Harga setelah pajak = Rp7.500 + Rp825
Harga setelah pajak = Rp8.325

Hasil program juga Rp8.325 sehingga perhitungannya sama.

3. Apakah hasil tercetak berubah otomatis jika harga object diubah?
Tidak. Hasil yang sudah dicetak di console merupakan nilai yang sudah dihitung
pada saat console.log dijalankan. Jika object diubah, perhitungannya harus
dijalankan kembali agar menghasilkan nilai baru.
*/


// BUKTI PERUBAHAN DATA DAN PERHITUNGAN ULANG

console.log("Harga awal produk pertama:", daftarProduk[0].harga);

daftarProduk[0].harga = 20000;

console.log("Harga produk pertama setelah diubah:", daftarProduk[0].harga);

const hargaBaruSetelahPajak =
    daftarProduk[0].harga * (1 + TARIF_PAJAK);

console.log(
    "Hasil perhitungan ulang setelah harga berubah:",
    hargaBaruSetelahPajak
);


// ============================================================
// LANGKAH 4 - DETEKTIF TIPE DATA
// ============================================================

// Tebakan: "number"
console.log(typeof 42);
// Hasil asli: "number" ✔

// Tebakan: "string"
console.log(typeof "42");
// Hasil asli: "string" ✔

// Tebakan: "boolean"
console.log(typeof true);
// Hasil asli: "boolean" ✔

// Tebakan: "undefined"
console.log(typeof undefined);
// Hasil asli: "undefined" ✔

// Tebakan: "null"
// Catatan: ini tebakan yang sering muncul, tetapi ternyata berbeda.
console.log(typeof null);
// Hasil asli: "object" ✘

// Tebakan: "array"
// Catatan: Array sebenarnya dilaporkan typeof sebagai object.
console.log(typeof [1, 2, 3]);
// Hasil asli: "object" ✘

// Tebakan: "object"
console.log(typeof { nama: "Budi" });
// Hasil asli: "object" ✔

// Tebakan: "53"
console.log("5" + 3);
// Hasil asli: "53" ✔

// Tebakan: "15"
console.log("5" * 3);
// Hasil asli: 15 ✔

// Tebakan: "NaN"
console.log("abc" * 2);
// Hasil asli: NaN ✔

// Tebakan: "Infinity"
console.log(10 / 0);
// Hasil asli: Infinity ✔

// Tebakan: "object"
console.log(typeof usaha.website);
// Hasil asli: "object" ✔


/*
JAWABAN LANGKAH 4

1. Tebakan yang meleset:
typeof null menghasilkan "object", bukan "null". Ini merupakan perilaku
lama JavaScript dan bukan berarti null benar-benar merupakan object biasa.

typeof [1, 2, 3] juga menghasilkan "object". Untuk mengetahui bahwa suatu
nilai merupakan array, cara yang lebih tepat adalah Array.isArray(nilai).

2. Apakah null adalah object?
Tidak. null adalah nilai khusus yang berarti tidak ada nilai object yang
sedang diberikan, tetapi typeof null menghasilkan "object" karena perilaku
historis JavaScript.

3. Mengapa "5" + 3 dan "5" * 3 berbeda?
Operator + dapat digunakan untuk penggabungan string sehingga hasilnya "53".
Operator * memaksa nilai string "5" menjadi angka sehingga hasilnya 15.
*/


// ============================================================
// LANGKAH 5 - MODIFIKASI DADAKAN
// ============================================================

// Produk baru ditambahkan agar daftar produk dapat berkembang tanpa membuat
// array harga terpisah yang berisiko memiliki urutan berbeda.
daftarProduk.push({
    nama: "Matcha Latte",
    harga: 16000
});

// Properti Instagram ditambahkan langsung pada object usaha.
usaha.instagram = "@kopisenja";

// Total harga dihitung dari seluruh produk setelah produk baru dimasukkan.
const totalHargaProduk = daftarProduk.reduce(
    (totalHarga, produkItem) => totalHarga + produkItem.harga,
    0
);

console.log(`
===== MODIFIKASI USAHA =====
Instagram   : ${usaha.instagram}
Jumlah Produk: ${daftarProduk.length}
Total Harga : Rp ${totalHargaProduk}
============================
`);


/*
JAWABAN LANGKAH 5

1. Bagian yang perlu diubah:
Saya hanya perlu menambahkan object produk baru, properti Instagram, dan
perhitungan total harga. Struktur data usaha dan cara mengambil data produk
tidak perlu diubah karena sudah menggunakan object dan array yang fleksibel.

2. Contoh statement:
a. const totalHargaProduk = daftarProduk.reduce(...);
   Statement tersebut menghasilkan deklarasi sebuah variabel.

b. usaha.instagram = "@kopisenja";
   Statement tersebut memberikan nilai baru pada properti object.

Contoh expression:
a. daftarProduk.length
   Expression ini dievaluasi menjadi jumlah elemen dalam array.

b. totalHarga + produkItem.harga
   Expression ini dievaluasi menjadi hasil penjumlahan dua nilai harga.
*/


// ============================================================
// BONUS - VAR VS LET
// ============================================================

// var sengaja digunakan hanya di bagian bonus sesuai aturan tugas.

if (true) {
    var nomorBonus = 100;
    let nomorLet = 200;

    console.log("var di dalam blok:", nomorBonus);
    console.log("let di dalam blok:", nomorLet);
}

// var memiliki function scope sehingga masih bisa diakses di luar blok if.
console.log("var di luar blok:", nomorBonus);

// let memiliki block scope sehingga tidak bisa diakses dari luar blok.
// Baris berikut sengaja TIDAK dijalankan karena akan menyebabkan ReferenceError.
// console.log("let di luar blok:", nomorLet);


// var juga dapat dideklarasikan ulang dengan nama yang sama.
var statusBonus = "awal";
var statusBonus = "berubah";

console.log("var setelah deklarasi ulang:", statusBonus);


// Untuk let, deklarasi ulang dengan nama yang sama dalam scope yang sama
// akan menyebabkan SyntaxError sehingga tidak dijalankan.
// let namaBonus = "Arief";
// let namaBonus = "Budi";


/*
PENJELASAN BONUS

Dalam program besar, var dapat menyebabkan bug ketika sebuah variabel yang
seharusnya hanya berlaku di dalam blok ternyata dapat digunakan di luar blok.
Deklarasi ulang var juga dapat tidak sengaja mengganti nilai variabel yang
dipakai bagian program lain, sehingga let atau const lebih aman untuk kode modern.
*/
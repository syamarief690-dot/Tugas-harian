
// ==========================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

// POTONGAN A
// Tebakan output:
// "Jus", "Air", ["Kopi", "Roti", "Susu"], ["Roti", "Susu"],
// 1, -1, true, "Susu"

let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang); // Hasil: Jus
console.log(pertamaDibuang); // Hasil: Air
console.log(menu); // Hasil: ["Kopi", "Roti", "Susu"]
console.log(irisan); // Hasil: ["Roti", "Susu"]
console.log(menu.indexOf("Susu")); // Hasil: 2
console.log(menu.indexOf("Nasi")); // Hasil: -1
console.log(menu.includes("Kopi")); // Hasil: true
console.log(menu[menu.length - 1]); // Hasil: Susu

// Jawaban pertanyaan A:
// menu dan irisan berbeda karena slice mengambil bagian array sebagai array baru,
// sedangkan splice mengubah array asli. push, unshift, pop, shift, dan splice
// mengubah array asli, sedangkan slice tidak mengubah array asli.

// POTONGAN B
// Tebakan output:
// 5, undefined, 5, undefined

function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x); // Hasil: 5
console.log(y); // Hasil: undefined

// Jawaban pertanyaan B:
// tambah mengembalikan hasil menggunakan return, sedangkan cetakTambah
// hanya menampilkan hasil dengan console.log. Karena tidak memiliki return,
// nilai y menjadi undefined meskipun angka 4? Tidak, hasil yang dicetak adalah 5.

// POTONGAN C
// Tebakan output:
// 40000, 45000, "negatif", "bukan negatif"

const hitungDiskonPersen = (harga, persen = 10) =>
  harga - (harga * persen) / 100;

console.log(hitungDiskonPersen(50000, 20)); // Hasil: 40000
console.log(hitungDiskonPersen(50000)); // Hasil: 45000

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5)); // Hasil: negatif
console.log(cekAngka(5)); // Hasil: bukan negatif

// Jawaban pertanyaan C:
// Parameter persen memiliki nilai default 10 sehingga tetap bisa digunakan
// saat hanya satu argumen diberikan. console.log setelah return tidak tercetak
// karena return langsung mengakhiri fungsi pada bagian tersebut.


// ==========================================
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ==========================================

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: push menambahkan "Susu" di akhir array.
daftarBelanja.push("Susu");

// FIX 2: splice menghapus "Teh" dari indeks 1.
daftarBelanja.splice(1, 1);

// FIX 3: includes menghasilkan true atau false.
let adaRoti = daftarBelanja.includes("Roti");

// FIX 4: length - 1 mengambil indeks terakhir.
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// FIX 5: return mengembalikan nilai hasil diskon.
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}

// FIX 6: return mengembalikan hasil perhitungan pajak.
const hitungPajak = (subtotal) => {
  return subtotal * 0.11;
};

// FIX 7: deklarasikan function expression sebelum dipanggil.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));
console.log(hitungTotal(80000, 8800));

// HASIL CONSOLE:
// ["Kopi", "Roti", "Susu"] true "Susu"
// 80000
// 8800
// 88800

// Jawaban pertanyaan:
// 1. push menggantikan unshift, splice menggantikan slice,
// indexOf diganti includes, indeks terakhir memakai length - 1,
// hitungDiskon ditambah return, hitungPajak ditambah return,
// dan hitungTotal dideklarasikan sebelum dipanggil.
//
// 2. Kesalahan yang menimbulkan error adalah memanggil hitungTotal
// sebelum deklarasi const-nya. Kesalahan lainnya dapat menghasilkan
// output yang salah atau mengubah array dengan cara yang tidak sesuai.
//
// 3. Keduanya menghasilkan undefined karena hasil hitungannya tidak
// dikembalikan dengan return. Function yang hanya menjalankan perhitungan
// tanpa return tidak memberikan hasil perhitungan kepada pemanggil.


// ==========================================
// LANGKAH 3: PROGRAM KASIR SENDIRI
// ==========================================

const KASIR_TARIF_PAJAK = 0.11;

const kasirNamaMenu = [
  "Kopi Susu",
  "Es Teh",
  "Roti Bakar",
  "Nasi Goreng",
  "Jus Jeruk"
];

const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];

let kasirKeranjang = [];

// Menguji push, unshift, shift, pop, dan splice.
console.log("Keranjang awal:", kasirKeranjang);

// push menambahkan empat item di akhir array.
kasirKeranjang.push("Kopi Susu");
kasirKeranjang.push("Es Teh");
kasirKeranjang.push("Roti Bakar");
kasirKeranjang.push("Jus Jeruk");

// unshift menambahkan item prioritas di depan.
kasirKeranjang.unshift("Nasi Goreng");

// shift membatalkan item prioritas tadi.
kasirKeranjang.shift();

// pop membatalkan item terakhir.
kasirKeranjang.pop();

// splice mengganti Roti Bakar dengan Nasi Goreng.
kasirKeranjang.splice(2, 1, "Nasi Goreng");

// Menambahkan kembali Jus Jeruk agar keranjang berisi 4 item.
kasirKeranjang.push("Jus Jeruk");

console.log("Keranjang akhir:", kasirKeranjang);

// includes mengecek keberadaan menu.
console.log(
  "Ada Es Teh?",
  kasirKeranjang.includes("Es Teh")
);

// slice mengambil tiga item pertama tanpa mengubah keranjang.
const kasirPaketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket cepat:", kasirPaketCepat);

// Function 1: function declaration.
// Mencari harga berdasarkan nama menu.
function kasirCariHarga(namaMenu) {
  const indeksMenu = kasirNamaMenu.indexOf(namaMenu);

  if (indeksMenu === -1) {
    return 0;
  }

  return kasirHargaMenu[indeksMenu];
}

// Function 2: function expression.
// Menjumlahkan harga seluruh item dalam keranjang.
const kasirHitungSubtotal = function () {
  let subtotalKasir = 0;

  for (let i = 0; i < kasirKeranjang.length; i++) {
    subtotalKasir += kasirCariHarga(kasirKeranjang[i]);
  }

  return subtotalKasir;
};

// Function 3: arrow function dengan return dan if...else.
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (subtotal >= 50000) {
    return subtotal * 0.10;
  } else if (subtotal >= 25000) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
};

// Function 4: arrow function ringkas dengan nilai default.
const kasirHitungPajak = (nilai, tarif = KASIR_TARIF_PAJAK) =>
  nilai * tarif;

// Function 5: mencetak struk menggunakan template literal.
const kasirCetakStruk = (subtotal, diskon, pajak) => {
  const totalAkhir = subtotal - diskon + pajak;

  console.log(`
========== STRUK KASIR ==========
Daftar Belanja:
${kasirKeranjang.map((item, indeks) =>
  `${indeks + 1}. ${item} - Rp${kasirCariHarga(item).toLocaleString("id-ID")}`
).join("\n")}

Subtotal : Rp${subtotal.toLocaleString("id-ID")}
Diskon   : Rp${diskon.toLocaleString("id-ID")}
Pajak    : Rp${pajak.toLocaleString("id-ID")}
Total    : Rp${totalAkhir.toLocaleString("id-ID")}
=================================
  `);
};

// ------------------------------------------
// SKENARIO 1
// ------------------------------------------

// Keranjang awal berisi Kopi Susu, Es Teh,
// Nasi Goreng, dan Jus Jeruk.
// Nilai subtotal: Rp59.500.

const kasirSubtotalSatu = kasirHitungSubtotal();
const kasirDiskonSatu = kasirHitungDiskon(kasirSubtotalSatu);
const kasirSetelahDiskonSatu = kasirSubtotalSatu - kasirDiskonSatu;
const kasirPajakSatu = kasirHitungPajak(kasirSetelahDiskonSatu);
const kasirTotalSatu =
  kasirSetelahDiskonSatu + kasirPajakSatu;

console.log("SKENARIO 1");
kasirCetakStruk(
  kasirSubtotalSatu,
  kasirDiskonSatu,
  kasirPajakSatu
);

// Catatan hasil skenario 1:
// Subtotal: Rp59.500
// Diskon 10%: Rp5.950
// Pajak 11% dari Rp53.550: Rp5.890,5
// Total: Rp59.440,5

// ------------------------------------------
// SKENARIO 2
// ------------------------------------------

// Mengganti isi keranjang agar mendapat diskon 15%.
kasirKeranjang = [
  "Nasi Goreng",
  "Nasi Goreng",
  "Nasi Goreng",
  "Nasi Goreng",
  "Nasi Goreng"
];

const kasirSubtotalDua = kasirHitungSubtotal();
const kasirDiskonDua = kasirHitungDiskon(kasirSubtotalDua);
const kasirSetelahDiskonDua = kasirSubtotalDua - kasirDiskonDua;
const kasirPajakDua = kasirHitungPajak(kasirSetelahDiskonDua);
const kasirTotalDua = kasirSetelahDiskonDua + kasirPajakDua;

console.log("SKENARIO 2");
kasirCetakStruk(
  kasirSubtotalDua,
  kasirDiskonDua,
  kasirPajakDua
);

// Catatan hasil skenario 2:
// Subtotal: Rp110.000
// Diskon 15%: Rp16.500
// Pajak 11% dari Rp93.500: Rp10.285
// Total: Rp103.785

// ------------------------------------------
// BONUS: MEMBATALKAN MENU
// ------------------------------------------

const kasirBatalkanItem = (namaMenu) => {
  const posisiItem = kasirKeranjang.indexOf(namaMenu);

  if (posisiItem !== -1) {
    kasirKeranjang.splice(posisiItem, 1);
    return true;
  }

  return false;
};

// Pengujian bonus dilakukan pada keranjang skenario 2.
console.log(kasirBatalkanItem("Nasi Goreng")); // true
console.log(kasirBatalkanItem("Bakso")); // false

// ------------------------------------------
// JAWABAN PERTANYAAN LANGKAH 3
// ------------------------------------------

// 1. push mengubah array asli karena menambahkan item ke dalam
// keranjang. Buktinya, console.log sebelum dan sesudah push
// menampilkan isi keranjang yang berbeda.
//
// 2. splice mengubah array asli, sedangkan slice membuat array baru.
// Di kode ini, splice mengganti Roti Bakar dengan Nasi Goreng;
// slice mengambil tiga item pertama sebagai paket cepat.
//
// 3. kasirCariHarga memakai return agar harga bisa dipakai kembali
// oleh kasirHitungSubtotal. Jika hanya memakai console.log, subtotal
// tidak menerima angka harga dari function tersebut.
//
// 4. Pada kasirCariHarga(namaMenu), namaMenu adalah parameter.
// Pada kasirCariHarga("Kopi Susu"), "Kopi Susu" adalah argumen.
// Parameter adalah tempat menerima data, sedangkan argumen adalah
// nilai yang dikirim ketika function dipanggil.
//
// 5. kasirHitungPajak memiliki nilai default 0.11. Jika dipanggil
// dengan satu argumen, tarifnya otomatis 11%; jika diberi dua argumen,
// tarif kedua akan digunakan.
//
// 6. Function expression kasirHitungSubtotal tidak bisa dipanggil
// sebelum baris const-nya dijalankan karena masih berada dalam
// temporal dead zone. Function declaration kasirCariHarga dapat
// dipanggil sebelum deklarasinya karena mengalami hoisting.
//
// Percobaan untuk membuktikan:
// console.log(kasirHitungSubtotal()); // Sebelum deklarasi: ReferenceError
// console.log(kasirCariHarga("Kopi Susu")); // Sebelum deklarasi: bisa berjalan
//
// Kedua baris di atas dijadikan komentar agar tidak menghentikan
// program. Baris percobaan kasirCariHarga harus ditempatkan sebelum
// deklarasi function tersebut untuk membuktikan perbedaannya.
//
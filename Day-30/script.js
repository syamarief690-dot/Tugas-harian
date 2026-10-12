/*
Nama: Muhammad Arief Syam
Tanggal: 12 Oktober 2026
Tujuan: Belajar percabangan, Truthy/Falsy, switch, dan program kasir.
*/

// ==================================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==================================================

// POTONGAN A
// Tebakan sebelum dijalankan: baris 2, 4, dan 6 yang tercetak.
if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

// Hasil asli: baris 2, 4, dan 6.
// Penjelasan:
// "0" adalah string yang berisi karakter sehingga Truthy.
// [] adalah array kosong yang tetap Truthy.
// 0, "", dan null termasuk Falsy.

// Jawaban pertanyaan A:
// 1. "0" dan [] tetap masuk karena keduanya Truthy.
// 2. Nilai yang tampak kosong belum tentu Falsy dalam JavaScript.
// 3. Tebakan yang paling sulit adalah [] karena array kosong tetap Truthy.


// POTONGAN B
let belanja = 120000;

// Tebakan sebelum dijalankan:
// Diskon 5%, karena kondisi pertama sudah terpenuhi.
if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// Hasil asli: Diskon 5%.
// Penjelasan:
// Kondisi diperiksa dari atas ke bawah.
// Perbaikannya adalah mengurutkan batas diskon dari terbesar ke terkecil.

if (belanja >= 100000) {
  console.log("Perbaikan: Diskon 15%");
} else if (belanja >= 50000) {
  console.log("Perbaikan: Diskon 10%");
} else if (belanja >= 25000) {
  console.log("Perbaikan: Diskon 5%");
} else {
  console.log("Perbaikan: Tidak ada diskon");
}

// Jawaban pertanyaan B:
// Diskon 5% muncul karena kondisi pertama langsung benar.
// Urutkan kondisi mulai dari 100000, lalu 50000, kemudian 25000.


// POTONGAN C
let hari = "sabtu";

// Tebakan sebelum dijalankan:
// Promo Akhir Pekan dan Promo Keluarga akan tercetak.
switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// Hasil asli:
// Promo Akhir Pekan
// Promo Keluarga
// Penjelasan: tidak ada break setelah case sabtu,
// sehingga program berlanjut ke case minggu.

// Jawaban pertanyaan C:
// Tambahkan break setelah console.log pada case sabtu
// agar hanya satu baris promo yang tercetak.


// ==================================================
// LANGKAH 2: PERBAIKI 5 KESALAHAN
// ==================================================

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// FIX 1: Urutkan diskon dari batas terbesar ke terkecil.
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// FIX 2: Gunakan jenisMember dengan huruf besar M.
// FIX 3: Tambahkan break agar potongan gold tidak tertimpa.
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// FIX 4: Gunakan === untuk membandingkan,
// bukan = yang justru memberikan nilai ke variabel.
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir
let totalAkhir = totalBelanja - diskon - potonganMember;

// FIX 5: Gunakan >= agar pembayaran yang pas juga dianggap lunas.
let uangBayar = 67000;
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// Hasil yang diharapkan:
// Voucher tidak dipakai
// Status: Lunas
// 8000 5000 67000

// Jawaban pertanyaan Langkah 2:
// 1. Kondisi diskon salah urutan; urutkan dari terbesar.
// 2. Nama jenismember salah; perbaiki menjadi jenisMember.
// 3. Case gold tidak punya break; tambahkan break.
// 4. Tanda = mengubah nilai; gunakan === untuk perbandingan.
// 5. Tanda > tidak menerima uang pas; gunakan >=.
//
// Error di Console:
// jenismember yang tidak didefinisikan menyebabkan ReferenceError.
// Kesalahan lain tidak selalu menghasilkan error, tetapi
// bisa membuat nilai atau hasil program menjadi salah.
//
// Perbedaan operator:
// = untuk memberikan nilai.
// == untuk membandingkan dengan kemungkinan konversi tipe.
// === membandingkan nilai dan tipe tanpa konversi.
//
// if (kodeVoucher = "") tidak error karena = adalah
// operator assignment yang sah. Namun, kode tersebut
// mengubah voucher menjadi string kosong dan kondisi menjadi Falsy.


// ==================================================
// LANGKAH 3: MEMBUAT PROGRAM KASIR SENDIRI
// ==================================================

function kasirProses(
  kasirNamaPelanggan,
  kasirTotalBelanja,
  kasirHari,
  kasirJenisMember,
  kasirKodeVoucher,
  kasirUangBayar
) {
  let kasirDiskon = 0;
  let kasirPotonganMember = 0;
  let kasirPotonganHari = 0;
  let kasirPotonganVoucher = 0;
  let kasirStatusVoucher = "";

  // Diskon belanja, dimulai dari batas terbesar.
  if (kasirTotalBelanja >= 100000) {
    kasirDiskon = kasirTotalBelanja * 0.15;
  } else if (kasirTotalBelanja >= 50000) {
    kasirDiskon = kasirTotalBelanja * 0.10;
  } else if (kasirTotalBelanja >= 25000) {
    kasirDiskon = kasirTotalBelanja * 0.05;
  } else {
    kasirDiskon = 0;
  }

  // Potongan berdasarkan jenis member.
  switch (kasirJenisMember) {
    case "gold":
      kasirPotonganMember = 5000;
      break;
    case "silver":
      kasirPotonganMember = 2000;
      break;
    default:
      kasirPotonganMember = 0;
      break;
  }

  // Promo berdasarkan hari.
  switch (kasirHari) {
    case "jumat":
      kasirPotonganHari = 3000;
      break;
    case "sabtu":
    case "minggu":
      // Kedua hari memakai potongan yang sama.
      kasirPotonganHari = 5000;
      break;
    default:
      kasirPotonganHari = 0;
      break;
  }

  // Validasi nama menggunakan Truthy/Falsy.
  if (kasirNamaPelanggan) {
    console.log(`Pelanggan: ${kasirNamaPelanggan}`);
  } else {
    console.log("Nama pelanggan belum diisi");
  }

  // Voucher terisi mendapatkan potongan Rp2.000.
  if (kasirKodeVoucher) {
    kasirPotonganVoucher = 2000;
    kasirStatusVoucher = `Voucher dipakai: ${kasirKodeVoucher}`;
  } else {
    kasirPotonganVoucher = 0;
    kasirStatusVoucher = "Voucher tidak dipakai";
  }

  // Menghitung total akhir setelah semua potongan.
  const kasirTotalAkhir =
    kasirTotalBelanja -
    kasirDiskon -
    kasirPotonganMember -
    kasirPotonganHari -
    kasirPotonganVoucher;

  console.log(kasirStatusVoucher);
  console.log(`Diskon belanja: Rp${kasirDiskon}`);
  console.log(`Potongan member: Rp${kasirPotonganMember}`);
  console.log(`Potongan hari: Rp${kasirPotonganHari}`);
  console.log(`Potongan voucher: Rp${kasirPotonganVoucher}`);
  console.log(`Total akhir: Rp${kasirTotalAkhir}`);

  // Memeriksa pembayaran dan menghitung selisihnya.
  if (kasirUangBayar > kasirTotalAkhir) {
    const kasirKembalian = kasirUangBayar - kasirTotalAkhir;
    console.log(`Status: Lunas, kembalian Rp${kasirKembalian}`);
  } else if (kasirUangBayar === kasirTotalAkhir) {
    console.log("Status: Lunas (uang pas)");
  } else {
    const kasirKekurangan = kasirTotalAkhir - kasirUangBayar;
    console.log(`Status: Kurang Rp${kasirKekurangan}`);
  }

  console.log("------------------------------");
}

// SKENARIO 1: Diskon 10%, promo akhir pekan, pembayaran lebih.
console.log("SKENARIO 1");
kasirProses("Rina", 90000, "sabtu", "silver", "SENJA10", 100000);

// Hasil perhitungan skenario 1:
// Pelanggan: Rina
// Voucher dipakai: SENJA10
// Diskon belanja: Rp9000
// Potongan member: Rp2000
// Potongan hari: Rp5000
// Potongan voucher: Rp2000
// Total akhir: Rp72000
// Status: Lunas, kembalian Rp28000


// SKENARIO 2: Diskon 5%, hari Jumat, nama dan voucher kosong,
// serta pembayaran pas.
console.log("SKENARIO 2");
kasirProses("", 40000, "jumat", "gold", "", 30000);

// Hasil perhitungan skenario 2:
// Nama pelanggan belum diisi
// Voucher tidak dipakai
// Diskon belanja: Rp2000
// Potongan member: Rp5000
// Potongan hari: Rp3000
// Potongan voucher: Rp0
// Total akhir: Rp30000
// Status: Lunas (uang pas)


// SKENARIO 3: Diskon 15%, hari tidak dikenal (default),
// dan pembayaran kurang.
console.log("SKENARIO 3");
kasirProses("Budi", 120000, "selasa", "biasa", "HEMAT", 50000);

// Hasil perhitungan skenario 3:
// Pelanggan: Budi
// Voucher dipakai: HEMAT
// Diskon belanja: Rp18000
// Potongan member: Rp0
// Potongan hari: Rp0
// Potongan voucher: Rp2000
// Total akhir: Rp100000
// Status: Kurang Rp50000


// Jawaban pertanyaan Langkah 3:
// 1. Diskon dimulai dari angka terbesar agar diskon tertinggi
//    tidak terlewat oleh kondisi yang lebih rendah.
//    Jika dibalik, kondisi 25000 bisa langsung benar sehingga
//    belanja 100000 tetap hanya mendapat diskon 5%.
// 2. switch cocok untuk membandingkan satu variabel dengan
//    beberapa pilihan hari yang nilainya sudah diketahui.
// 3. Case sabtu dan minggu sengaja digabung tanpa break
//    di antaranya karena keduanya mendapat potongan Rp5000.
// 4. Contoh nilai Falsy: "", null, dan undefined.
// 5. Jika jumlah beli -1, if (jumlahBeli) bernilai true
//    karena angka bukan nol bersifat Truthy.
//    Namun, if (jumlahBeli > 0) bernilai false karena -1
//    tidak lebih besar daripada nol.


// ==================================================
// BONUS: JUMLAH HARI DALAM BULAN
// ==================================================

const kasirNomorBulan = 2;

switch (kasirNomorBulan) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Jumlah hari: 30");
    break;
  case 2:
    console.log("Jumlah hari: 28 atau 29");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Jumlah hari: 31");
    break;
  default:
    console.log("Bulan tidak valid");
    break;
}

// Penjelasan bonus:
// Beberapa case dapat digabung karena semuanya memberikan
// hasil yang sama. Tanpa break di antara case tersebut,
// program terus memeriksa label berikutnya sampai menemukan
// kode yang dijalankan, lalu berhenti pada break.

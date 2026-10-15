// ==========================================
// TUGAS DAY 33 - OBJECT DAN PERULANGAN
// Nama: Muhammad Arief Syam
// ==========================================


// ==========================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

// POTONGAN A
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

// Tebakan output:
// Kopi Susu
// Kopi Susu
// 20000
// undefined
// true
// false
// [nama, harga, kategori]
// [Kopi Susu, 20000, minuman]

console.log(produk.nama);          // Hasil: Kopi Susu
console.log(produk[kunci]);        // Hasil: Kopi Susu
console.log(produk["harga"]);      // Hasil: 20000
console.log(produk.stok);          // Hasil: undefined
console.log("kategori" in produk); // Hasil: true
console.log("stok" in produk);     // Hasil: false
console.log(Object.keys(produk));  // Hasil: ["nama", "harga", "kategori"]
console.log(Object.values(produk));// Hasil: ["Kopi Susu", 20000, "minuman"]

// POTONGAN B
const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

// Tebakan output:
// 30000
// Rina: Rp 30000
// Rina: Rp 20000
// 20000

let sisa = dompet.belanja(20000);
console.log(sisa);       // Hasil: 30000
dompet.cekSaldo();        // Hasil: Rina: Rp 30000
dompet.belanja(10000);
dompet.cekSaldo();        // Hasil: Rina: Rp 20000
console.log(dompet.saldo);// Hasil: 20000

// POTONGAN C
const hari = ["Senin", "Selasa"];

// Tebakan output:
// Senin
// Selasa
// 0
// 1
// nama: Kopi
// harga: 18000
// K
// o
// p
// i

for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}

// Percobaan:
// for (let x of kopi) { console.log(x); }
// Tebakan: terjadi error karena object biasa tidak iterable.
// Hasil percobaan: TypeError: kopi is not iterable.
// Baris percobaan dijadikan komentar agar kode berikutnya tetap berjalan.

// Jawaban pertanyaan Langkah 1:
// 1. produk.nama memakai nama property secara langsung, sedangkan
// produk[kunci] memakai nilai variabel kunci. Stok menjadi undefined
// karena property stok sudah dihapus dengan delete.
// 2. Saldo akhir menjadi 20000 karena belanja(10000) tetap mengubah
// property saldo. this merujuk pada object dompet saat method dipanggil.
// 3. for...in pada array mengambil indeks berupa string "0" dan "1",
// sedangkan for...of mengambil nilai array. Object kopi tidak bisa
// dipakai dengan for...of karena object biasa tidak iterable.


// ==========================================
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ==========================================

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // FIX 1: Gunakan this.saldoKas agar property object berubah.
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
  },

  // FIX 2: Gunakan return agar sisa kas bisa dikembalikan.
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);       // 150000
console.log(warung.ambilKas(30000));// 120000

// FIX 3: Gunakan bracket notation karena nama key mengandung tanda hubung.
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);       // 08123

// FIX 4: Gunakan delete untuk menghapus property sepenuhnya.
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);                  // { nama: 'Rina' }

// FIX 5: Gunakan for...of untuk mendapatkan nilai array.
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// FIX 6: Gunakan for...in untuk mengambil kunci object.
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX 7: Nama method yang benar adalah Object.keys.
console.log(Object.keys(info));     // [ 'nama', 'kota' ]

// Membuktikan perbedaan undefined dan delete.
const akunUji = { nama: "Rina", kataSandi: "abc123" };
akunUji.kataSandi = undefined;
console.log("kataSandi" in akunUji); // true

delete akunUji.kataSandi;
console.log("kataSandi" in akunUji);// false

// Jawaban pertanyaan Langkah 2:
// 1. saldoKas harus memakai this.saldoKas; ambilKas perlu return;
// key no-wa harus diakses dengan bracket; kataSandi perlu dihapus
// dengan delete; array harus memakai for...of; object harus memakai
// for...in; dan Object.key harus diganti Object.keys.
// 2. Kode awal yang mengakses kontak.no-wa dan memakai for...of pada
// object menyebabkan error. Kesalahan lain bisa menghasilkan nilai
// yang salah, tidak mengembalikan nilai, atau tidak menghapus property.
// Object.key juga menghasilkan TypeError karena method tersebut tidak ada.
// 3. Memberi nilai undefined hanya mengubah nilai property, sehingga
// key tetap ada. delete menghapus key sehingga operator in menghasilkan false.


// ==========================================
// LANGKAH 3: BIKIN KASIR SENDIRI
// ==========================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,

  jamOperasional: {
    buka: "08:00",
    tutup: "21:00",
  },

  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Americano", kategori: "minuman", harga: 15000, stok: 12 },
    { nama: "Teh Manis", kategori: "minuman", harga: 8000, stok: 15 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 22000, stok: 8 },
    { nama: "Kentang Goreng", kategori: "makanan", harga: 12000, stok: 6 },
  ],

  keranjang: [],

  // Mencari harga menu berdasarkan nama.
  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

  // Menambah pesanan jika menu ada dan stok mencukupi.
  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu && jumlah > 0 && item.stok >= jumlah) {
        this.keranjang.push({
          nama: namaMenu,
          jumlah: jumlah,
        });

        item.stok -= jumlah;
        return true;
      }
    }

    return false;
  },

  // Menghitung subtotal seluruh isi keranjang.
  hitungSubtotal() {
    let subtotal = 0;

    for (let item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }

    return subtotal;
  },

  // Menentukan diskon berdasarkan subtotal.
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return subtotal * 0.15;
    } else if (subtotal >= 50000) {
      return subtotal * 0.10;
    } else if (subtotal >= 25000) {
      return subtotal * 0.05;
    }

    return 0;
  },

  // Mencetak struk dan menambahkan total ke saldo kas.
  cetakStruk() {
    const subtotal = this.hitungSubtotal();
    const diskon = this.hitungDiskon(subtotal);
    const dasarPajak = subtotal - diskon;
    const pajak = dasarPajak * 0.11;
    const total = dasarPajak + pajak;

    console.log("===== STRUK " + this.nama + " =====");
    console.log("Kota: " + this.kota);

    let nomor = 1;

    for (let item of this.keranjang) {
      const harga = this.cariHarga(item.nama);
      console.log(
        nomor + ". " + item.nama +
        " x" + item.jumlah +
        " @ Rp " + harga
      );
      nomor++;
    }

    console.log("------------------------");
    console.log("Subtotal: Rp " + subtotal);
    console.log("Diskon  : Rp " + diskon);
    console.log("Pajak   : Rp " + pajak);
    console.log("Total   : Rp " + total);

    this.saldoKas += total;
    console.log("Saldo kas: Rp " + this.saldoKas);
    console.log("========================");

    return total;
  },

  // BONUS: Mengumpulkan nama menu yang stoknya kurang dari 5.
  menuMenipis() {
    const daftarMenipis = [];

    for (let item of this.menu) {
      if (item.stok < 5) {
        daftarMenipis.push(item.nama);
      }
    }

    return daftarMenipis;
  },
};


// ------------------------------------------
// 3.1 PROPERTI DINAMIS
// ------------------------------------------

const namaProperti = "website";

// Menambahkan property dengan bracket notation.
kasirKedai[namaProperti] = "https://keda senja.example";

console.log("Website ada:", namaProperti in kasirKedai); // true

delete kasirKedai[namaProperti];

console.log("Website ada setelah dihapus:", namaProperti in kasirKedai); // false


// ------------------------------------------
// 3.2 MENGGUNAKAN for...in PADA OBJECT
// ------------------------------------------

console.log("Jam operasional:");

for (let kunci in kasirKedai.jamOperasional) {
  console.log(kunci + ": " + kasirKedai.jamOperasional[kunci]);
}

console.log("Menu pertama:");

for (let kunci in kasirKedai.menu[0]) {
  console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}

console.log("Kunci jam:", Object.keys(kasirKedai.jamOperasional));
// [ 'buka', 'tutup' ]

console.log("Nilai jam:", Object.values(kasirKedai.jamOperasional));
// [ '08:00', '21:00' ]


// ------------------------------------------
// 3.3 MENGHITUNG HURUF a
// ------------------------------------------

let jumlahHurufA = 0;

for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}

console.log("Jumlah huruf a:", jumlahHurufA); // 2


// ------------------------------------------
// 3.4 SKENARIO 1: DISKON 10%
// ------------------------------------------

// Pesanan: Kopi Susu x2 dan Roti Bakar x1.
// Kopi Susu: 2 x Rp18.000 = Rp36.000
// Roti Bakar: 1 x Rp22.000 = Rp22.000
// Subtotal Rp58.000, diskon 10% Rp5.800.
// Pajak 11% dari Rp52.200 = Rp5.742.
// Total Rp57.942.

console.log("Skenario 1");
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 2)); // true
console.log(kasirKedai.tambahKeKeranjang("Roti Bakar", 1)); // true

const totalSkenario1 = kasirKedai.cetakStruk();
// Hasil: subtotal 58000, diskon 5800, pajak 5742, total 57942.


// ------------------------------------------
// 3.5 SKENARIO 2: DISKON 15%
// ------------------------------------------

// Kosongkan keranjang sebelum skenario baru.
// Stok yang telah dipakai pada skenario pertama tidak dikembalikan.
kasirKedai.keranjang = [];

// Pesanan: Kopi Susu x4, Roti Bakar x3, Americano x2.
// Subtotal Rp168.000, diskon 15% Rp25.200.
// Pajak 11% dari Rp142.800 = Rp15.708.
// Total Rp158.508.

console.log("Skenario 2");
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 4)); // true
console.log(kasirKedai.tambahKeKeranjang("Roti Bakar", 3)); // true
console.log(kasirKedai.tambahKeKeranjang("Americano", 2)); // true

const totalSkenario2 = kasirKedai.cetakStruk();
// Hasil: subtotal 168000, diskon 25200, pajak 15708, total 158508.


// ------------------------------------------
// 3.6 DUA KASUS GAGAL
// ------------------------------------------

console.log(
  kasirKedai.tambahKeKeranjang("Es Cokelat", 1)
); // false karena menu tidak ditemukan.

console.log(
  kasirKedai.tambahKeKeranjang("Kentang Goreng", 99)
); // false karena stok tidak mencukupi.


// ------------------------------------------
// 3.7 BONUS: CEK STOK MENIPIS
// ------------------------------------------

console.log("Menu dengan stok kurang dari 5:");
console.log(kasirKedai.menuMenipis());
// Hasil: [ 'Kopi Susu', 'Roti Bakar' ]


// ------------------------------------------
// JAWABAN PERTANYAAN LANGKAH 3
// ------------------------------------------

// 1. Dot notation menggunakan titik, misalnya kasirKedai.nama.
// Bracket notation menggunakan kurung siku, misalnya
// kasirKedai[namaProperti]. Bracket diperlukan jika nama property
// disimpan dalam variabel atau key berisi tanda khusus seperti tanda hubung.

// 2. this.saldoKas menunjuk property saldoKas milik object kasirKedai.
// Jika this dihapus, JavaScript mencari variabel saldoKas biasa.
// Percobaan: saldoKas += 1000;
// Hasilnya ReferenceError: saldoKas is not defined.
// Baris percobaan tidak dijalankan karena sudah dijadikan komentar.

// 3. for...of mengambil nilai dari array atau string, sedangkan
// for...in mengambil nama key atau indeks. for...of dipakai untuk
// menu dan keranjang; for...in dipakai untuk property object.

// 4. Object biasa tidak iterable sehingga tidak dapat langsung
// digunakan pada for...of. Pesan error: TypeError: kasirKedai is not iterable.
// Array menu dan string nama dapat digunakan dengan for...of.

// 5. Object.keys mengambil daftar key, sedangkan Object.values
// mengambil nilai dari setiap key. Contoh: keys menghasilkan
// ['buka', 'tutup'], sedangkan values menghasilkan ['08:00', '21:00'].

// 6. cariHarga dan hitungSubtotal memakai return agar hasilnya dapat
// dipakai oleh method lain. cetakStruk boleh tidak mengembalikan nilai
// jika hanya mencetak, tetapi di sini return total ditambahkan sebagai
// nilai tambahan. Jika hitungSubtotal hanya memakai console.log,
// pemanggil tidak menerima angka subtotal dan hasilnya menjadi undefined.

// Catatan bonus:
// Hasil menuMenipis berubah setelah transaksi karena stok menu dikurangi.
// Setelah skenario kedua, stok Kopi Susu menjadi 4 dan Roti Bakar menjadi 4.
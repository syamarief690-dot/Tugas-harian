 // ==========================================
 // Contoh - Menghitung mundur
 // ==========================================
for (let i = 8; i >= 1; i--) {
    console.log(i);
}
console.log("Selesai!");
// Output: 8, 7, 6, 5, 4, 3, 2, 1, Selesai!


// ==========================================
// Contoh - Menjumlahkan angka 1 sampai 15
// ==========================================
let total = 0;

for (let i = 1; i <= 15; i++) {
    total += i;
}

console.log("Total:", total); // Output: Total: 120

// ==========================================
// Contoh - Mengakses elemen array
// ==========================================
const buah = ["Apel", "Jeruk", "Pisang", "Melon", "Pepaya", "Salak"];

for (let i = 0; i < buah.length; i++) {
    console.log(i + 1 + ".", buah[i]);
}

// Output:
// 1. Apel
// 2. Jeruk
// 3. Pisang
// 4. Melon
// 5. Pepaya
// 6. Salak


 // ==========================================
 // Contoh lengkap - Menebak angka
 // ==========================================
let angkaRahasia = 12;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
    percobaan++;
    tebakan = Math.floor(Math.random() * 15) + 1;
    console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
    "Berhasil menebak angka",
    angkaRahasia,
    "dalam",
    percobaan,
    "percobaan."
);

// ==========================================
// Contoh penggunaan nyata - Konfirmasi pengguna
// ==========================================
let konfirmasi;

do {
    konfirmasi = prompt("Ketik 'lanjut' untuk melanjutkan:");
} while (konfirmasi !== "lanjut");

console.log("Pengguna telah mengonfirmasi. Proses dilanjutkan...");


 // ==========================================
 // Menghentikan Perulangan: break
 // ==========================================
for (let i = 1; i <= 80; i++) {
    if (i === 12) {
        console.log(
            "Target ditemukan pada posisi ke-" + i + ". Pencarian dihentikan."
        );
        break;
    }
    console.log("Memeriksa posisi ke-" + i);
}

// Output:
// Memeriksa posisi ke-1
// Memeriksa posisi ke-2
// ...
// Memeriksa posisi ke-11
// Target ditemukan pada posisi ke-12. Pencarian dihentikan.


 // ==========================================
 // Contoh - Memfilter data array
 // ==========================================
const nilai = [72, -8, 95, -15, 64, 88, 43, -3];

console.log("Nilai valid:");

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] < 0) {
        continue; // Lewati nilai negatif
    }
    console.log("-", nilai[i]);
}

// Output:
// Nilai valid:
// - 72
// - 95
// - 64
// - 88
// - 43


 // ==========================================
 // Simulasi Lengkap - Kombinasi Looping
 // ==========================================
const daftarNilai = [65, 82, 95, -7, 74, 88, 105, 0, 56, 91, -12, 79];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarNilai.length; i++) {
    const nilai = daftarNilai[i];

    // Lewati nilai yang tidak valid (di luar rentang 0-100)
    if (nilai < 0 || nilai > 100) {
        console.log("Nilai tidak valid dilewati:", nilai);
        invalid++;
        continue;
    }

    jumlah += nilai;
    valid++;
}

const rataRata = jumlah / valid;

console.log("-----");
console.log("Total data      :", daftarNilai.length);
console.log("Data valid      :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata       :", rataRata.toFixed(2));

// Output:
// Nilai tidak valid dilewati: -7
// Nilai tidak valid dilewati: 105
// Nilai tidak valid dilewati: -12
// -----
// Total data      : 12
// Data valid      : 9
// Data tidak valid: 3
// Rata-rata       : 70.00
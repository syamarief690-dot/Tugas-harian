// TUGAS DAY 28 - JAVASCRIPT
// Nama: Muhammad Arief Syam 

// ==========================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

// Baris 1
// Tebakan: 13
// Hasil asli: 13, hasil dari 13 adalah 3*2=6 hasil dari 6+7=13
console.log(7 + 3 * 2);

// Baris 2
// Tebakan: 20
// Hasil asli: 20, hasil dari 20 adalah 7+3=10 hasil dari 10*2=20
console.log((7 + 3) * 2);

// Baris 3
// Tebakan: 2
// Hasil asli: 2, hasil dari 2 adalah sisa pembagian dari hasil 15/5=3
console.log(17 % 5);

// Baris 4
// Tebakan: 8
// Hasil asli: 8, hasil dari 8 adalah 2 pangkat 3 (2**3)= 8
console.log(2 ** 3);

// Baris 5
// Tebakan: true
// Hasil asli: true, kenapa bisa menjadi true karena angka 5 dan string "5" dianggap sama karena nilainya mirip
console.log(5 == "5");

// Baris 6
// Tebakan: false
// Hasil asli: false, kenapa bisa menjadi false karena Membandingkan nilai dan tipe datanya sekaligus
console.log(5 === "5");

// Baris 7
// Tebakan: false
// Hasil asli: false, kenapa bisa menjadi false karena && tidak bisa berbeda nilai hanya bisa nilai true dan true
console.log(true && false);

// Baris 8
// Tebakan: true
// Hasil asli: true, kenapa bisa menjadi true karen cukup satu kondisi yang true
console.log(true || false);

// Baris 9
// Tebakan: false
// Hasil asli: false, kenapa bisa menjadi false karena operator "!" membalik nilai true menjadi false
console.log(!true);

// Baris 10
// Tebakan: false
// Hasil asli: false, kenapa bisa menjadi false karena 10 > 5 bernilai true, tetapi 3 > 8 bernilai false.
console.log(10 > 5 && 3 > 8);


// Jawaban pertanyaan Langkah 1

// 1. Tebakan yang paling sulit adalah baris 5 dan 6 karena
// operator == dan === memiliki aturan perbandingan berbeda.

// 2. Perkalian dikerjakan lebih dahulu daripada penjumlahan,
// jadi 3 * 2 = 6 lalu 7 + 6 = 13.

// 3. Operator == membandingkan nilai dengan konversi tipe tertentu,
// sedangkan === membandingkan nilai sekaligus tipe datanya.



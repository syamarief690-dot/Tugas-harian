1. Mengapa Merge Conflict bisa terjadi?
Merge Conflict terjadi ketika Git tidak dapat menentukan perubahan mana yang harus dipakai saat menggabungkan dua branch.
Minimal 2 situasi yang dapat memicu konflik:
1. Dua orang mengedit baris yang sama pada file yang sama dengan isi berbeda.
2. Satu orang mengubah atau menghapus file/baris, sementara orang lain juga mengubah bagian yang sama.
Contoh nyata:
- Arief mengubah judul di index.html menjadi "Selamat Datang" dengan warna merah.
- Temannya mengubah judul yang sama menjadi warna biru.
- Saat branch digabung, Git bingung perubahan mana yang harus dipertahankan sehingga muncul Merge Conflict.

2. Arti tanda Merge Conflict
Kode:
<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>
=======
<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman

a. Arti masing-masing penanda:
- <<<<<<< HEAD → menandai awal perubahan dari branch yang sedang aktif.
- ======= → menjadi pemisah antara dua versi yang mengalami konflik.
- >>>>>>> branch-teman → menandai akhir perubahan dari branch yang sedang digabungkan, yaitu branch-teman.
b. Versi dari branch aktif:
<h1 style="color: red;">Selamat Datang</h1>

c. Versi dari branch yang datang:
<h1 style="color: blue;">Selamat Datang</h1>

Setelah memilih salah satu versi, semua tanda konflik harus dihapus.

3. Cara menyelesaikan Merge Conflict
A. Menggunakan Visual Studio Code
Langkah-langkah:
1. Jalankan proses merge sampai Git menunjukkan adanya conflict.
2. Buka file yang mengalami conflict di VS Code.
3. VS Code biasanya memberikan pilihan:
   - Accept Current Change → menggunakan perubahan branch aktif.
   - Accept Incoming Change → menggunakan perubahan dari branch lain.
   - Accept Both Changes → menggunakan keduanya.
4. Pilih perubahan yang sesuai.
5. Pastikan tanda <<<<<<<, =======, dan >>>>>>> sudah tidak ada.
6. Simpan file.
7. Jalankan:git add .
8. Lanjutkan dengan commit.
B. Menggunakan editor teks secara manual
1. Buka file yang mengalami conflict menggunakan editor teks.
2. Cari tanda:<<<<<<< HEAD
   =======
   >>>>>>> branch-teman
3. Tentukan kode yang ingin dipertahankan.
4. Hapus kode yang tidak diperlukan.
5. Hapus semua tanda conflict.
6. Simpan file.
7. Jalankan:git add .
8. Buat commit.
Mengapa VS Code direkomendasikan untuk pemula?
Karena VS Code menampilkan bagian yang konflik dengan jelas dan menyediakan tombol pilihan seperti Accept Current, Accept Incoming, dan Accept Both. Jadi lebih mudah daripada mencari dan menghapus tanda konflik secara manual.

4. Perintah setelah conflict diselesaikan
Urutannya dapat dilakukan seperti berikut:
git status
git add .
git commit -m "fix: menyelesaikan merge conflict"

Fungsinya:
1. git status
   Mengecek file yang masih mengalami conflict atau belum masuk staging.
2. git add .
   Menandai file yang sudah diperbaiki sebagai perubahan yang siap di-commit.
3. git commit -m "fix: menyelesaikan merge conflict"
   Mencatat hasil penyelesaian conflict ke dalam riwayat Git.
Jika hasil merge perlu dikirim ke GitHub, bisa dilanjutkan:
git push

5. Fungsi git merge --abort
Perintah:
git merge --abort

digunakan untuk membatalkan proses merge yang sedang berlangsung dan mengembalikan kondisi repository seperti sebelum merge dimulai.
Contoh situasi:
Arief melakukan merge branch teman, tetapi ternyata terdapat banyak sekali konflik pada file penting dan perubahan dari kedua branch terlalu berbeda. Daripada menyelesaikan konflik satu per satu, Arief dapat membatalkan proses tersebut dengan:
git merge --abort

Kemudian perubahan dapat diperiksa dan direncanakan kembali sebelum melakukan merge.

6. Praktik terbaik untuk mengurangi Merge Conflict
1.  Sering melakukan git pull
   - Mengambil perubahan terbaru dari repository.
   - Membuat branch lokal tidak terlalu tertinggal sehingga konflik lebih kecil.
2. Melakukan commit secara teratur
   - Perubahan menjadi lebih kecil dan mudah dilacak.
   - Konflik lebih mudah diperbaiki.
3. Membagi tugas dengan jelas
   - Misalnya satu orang mengerjakan halaman index.html, sementara orang lain mengerjakan kontak.html.
   - Mengurangi kemungkinan dua orang mengedit bagian yang sama.
4. Menggunakan branch untuk setiap fitur
   - Contohnya:feature/login
     feature/katalog
   - Perubahan setiap fitur menjadi lebih terorganisir.
5. Berkomunikasi dengan anggota tim
   - Anggota tim dapat mengetahui file atau bagian yang sedang dikerjakan orang lain.
   - Menghindari pekerjaan yang bertabrakan.

7. Pentingnya pesan commit yang jelas
Pesan commit yang jelas membantu anggota tim mengetahui apa yang berubah dan tujuan perubahan tersebut tanpa harus membuka setiap file.
Contoh pesan buruk:
update

fix

perubahan

Pesan tersebut terlalu umum sehingga sulit mengetahui perubahan yang dilakukan.
Contoh pesan baik:
feat: menambahkan halaman katalog produk

fix: memperbaiki tombol login yang tidak berfungsi

style: memperbaiki tampilan navbar pada mobile

Pesan yang baik membuat riwayat proyek lebih mudah dibaca dan dipahami.

8. Format Conventional Commits
Format dasarnya:
type: deskripsi perubahan

Contoh:
feat: menambahkan fitur pencarian produk

Beberapa tipe yang umum:
Tipe	Fungsi	Contoh
feat	Menambahkan fitur baru	feat: menambahkan fitur pencarian
fix	Memperbaiki bug	fix: memperbaiki tombol login
docs	Mengubah dokumentasi	docs: memperbarui README
style	Perubahan tampilan/format kode tanpa mengubah fungsi	style: merapikan CSS navbar
refactor	Merapikan struktur kode tanpa mengubah fungsi	refactor: menyederhanakan fungsi login
test	Menambahkan atau memperbaiki pengujian	test: menambahkan test login


9. Commit mana yang paling baik?
Dari ketiga pesan:
git commit -m "update"

git commit -m "fix bug tombol"

git commit -m "feat: menambahkan fitur pencarian produk di navbar"

Yang paling baik adalah:
git commit -m "feat: menambahkan fitur pencarian produk di navbar"

Alasannya:
- Menggunakan format Conventional Commits.
- Menjelaskan jenis perubahan dengan feat.
- Menjelaskan perubahan secara spesifik.
- Orang lain dapat langsung memahami isi commit.
update terlalu umum, sedangkan fix bug tombol sudah lebih jelas tetapi belum mengikuti format Conventional Commits dan masih kurang spesifik.
10. Fungsi .gitignore
.gitignore digunakan untuk memberi tahu Git file atau folder apa yang tidak perlu dilacak dan dikirim ke repository.
Contoh:
node_modules/
.env
*.log
.DS_Store

Jenis file yang sebaiknya dimasukkan:
1. node_modules/
   - Berisi banyak dependency.
   - Ukurannya besar dan dapat di-install kembali menggunakan package manager.
2. .env
   - Biasanya berisi API key, password, token, atau konfigurasi rahasia.
   - Tidak boleh sembarangan di-upload ke GitHub.
3. File log seperti *.log
   - Berisi catatan proses/error aplikasi.
   - Biasanya tidak diperlukan untuk source code utama.
4. File sistem seperti .DS_Store
   - File otomatis dari sistem operasi macOS.
   - Tidak diperlukan dalam proyek website.

11. Format penamaan branch
Format yang disarankan adalah:
jenis/nama-perubahan

Contohnya:
feature/login

feature/katalog-produk

fix/navbar-mobile

Alasannya:
- Nama branch langsung menjelaskan tujuannya.
- Lebih mudah dibaca anggota tim.
- Memudahkan pencarian branch.
- Mengurangi nama branch yang membingungkan seperti coba, branchbaru, atau arief.

12. Peran HTML, CSS, dan JavaScript
HTML (HyperText Markup Language)
Berfungsi membuat struktur dan isi website.
Contoh:
<h1>Website Bengkel AMS</h1>
<p>Selamat datang di website kami.</p>

CSS (Cascading Style Sheets)
Berfungsi mengatur tampilan website seperti warna, ukuran, posisi, jarak, dan layout.
Contoh:
h1 {
    color: red;
}

JavaScript
Berfungsi membuat website menjadi interaktif dan dinamis.
Contohnya:
- Tombol yang dapat diklik.
- Validasi form.
- Menu yang dapat dibuka/tutup.
- Pencarian produk secara dinamis.
Singkatnya:
HTML = struktur, CSS = tampilan, JavaScript = interaksi.

13. Dua lingkungan JavaScript
JavaScript dapat dijalankan di berbagai lingkungan. Dua contoh utamanya:
1. Browser
JavaScript dapat dijalankan di browser seperti Chrome, Firefox, dan Edge.
Contohnya:
<script>
    alert("Halo!");
</script>

Browser menjalankan JavaScript untuk membuat halaman web menjadi interaktif.
2. Server menggunakan Node.js
JavaScript juga dapat dijalankan di server menggunakan Node.js.
Contohnya digunakan untuk:
- Membuat backend website.
- Membuat API.
- Mengakses database.
- Menjalankan server.
Jadi, JavaScript tidak hanya digunakan untuk tampilan website, tetapi juga dapat digunakan pada sisi server.

14. JavaScript dan ECMAScript (ES)
JavaScript adalah bahasa pemrograman yang digunakan untuk membuat aplikasi dan website menjadi interaktif.
ECMAScript (ES) adalah standar/spesifikasi yang mendefinisikan bagaimana bahasa JavaScript harus bekerja.
Sederhananya:
ECMAScript = standar bahasanya, JavaScript = implementasi bahasa tersebut.

Contoh perbedaan gaya lama dan modern:
Gaya lama:
var nama = "Arief";

console.log("Halo " + nama);

Gaya modern:
const nama = "Arief";

console.log(`Halo ${nama}`);

Pada JavaScript modern, const dan template literal (${}) membuat kode lebih mudah dibaca dan lebih aman digunakan dibandingkan pola lama tertentu.
Kesimpulan: ECMAScript terus berkembang melalui versi seperti ES5, ES6/ES2015, dan versi-versi berikutnya. JavaScript mengikuti standar ECMAScript tersebut.
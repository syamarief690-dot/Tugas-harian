1. Dua arah aliran kode: Push dan Pull
Push adalah mengirim perubahan dari komputer lokal ke GitHub.
Contoh: Setelah selesai membuat fitur baru di website, kita melakukan git add, git commit, lalu git push agar perubahan tersimpan di GitHub.
Pull adalah mengambil perubahan terbaru dari GitHub ke komputer lokal.
Contoh: Teman satu tim sudah memperbaiki style.css di GitHub. Sebelum melanjutkan pekerjaan, kita melakukan git pull agar mendapatkan versi terbaru.
Singkatnya: Local → GitHub = push
GitHub → Local = pull

2. Fungsi git push
git push digunakan untuk mengirim commit dari repository lokal ke repository GitHub.
a. Fungsi opsi -u pada git push -u origin main
Opsi -u atau --set-upstream menghubungkan branch lokal main dengan branch main di origin (GitHub).
b. Jika -u tidak digunakan pada push pertama
Kita biasanya harus menyebutkan repository dan branch secara lengkap lagi, misalnya:
git push origin main
Git belum mengetahui branch remote mana yang menjadi tujuan default.
c. Mengapa setelah -u cukup git push?
Karena hubungan antara branch lokal dan remote sudah disimpan sebagai upstream/tracking branch. Jadi Git sudah tahu bahwa main lokal harus dikirim ke origin/main.

3. Perbedaan git clone dan git init
Perintah
Fungsi
git init
Membuat repository Git baru di folder yang sudah ada
git clone
Menyalin repository Git yang sudah ada, termasuk riwayat commit
Contoh:
git init
Digunakan ketika kita mulai proyek baru dari komputer sendiri.
Sedangkan:
git clone https://github.com/andi/proyek.git
Digunakan untuk mengambil proyek yang sudah tersedia di GitHub.
Setelah git clone, tidak perlu menjalankan git init lagi karena repository hasil clone sudah otomatis memiliki konfigurasi dan riwayat Git.

4. Fungsi git pull
git pull digunakan untuk mengambil perubahan terbaru dari repository remote dan menggabungkannya ke branch lokal.
Perintah ini penting dalam kerja tim karena anggota tim bisa saja melakukan perubahan dan push ke GitHub. Dengan git pull, kita dapat bekerja menggunakan kode terbaru sehingga mengurangi kemungkinan konflik.
Dua momen yang sebaiknya melakukan git pull:
Sebelum mulai bekerja, untuk memastikan kode lokal sudah terbaru.
Sebelum melakukan push, terutama ketika anggota tim lain mungkin sudah melakukan perubahan.

5. Alur kerja harian yang direkomendasikan
Urutannya:
git pull
git status
git switch -c nama-branch
# melakukan perubahan kode
git add .
git commit -m "Deskripsi perubahan"
git push -u origin nama-branch
Penjelasan:
git pull → mengambil perubahan terbaru dari GitHub.
git status → melihat kondisi file dan perubahan yang ada.
git switch -c nama-branch → membuat branch khusus untuk pekerjaan.
Mengubah kode → mengerjakan fitur atau perbaikan.
git add . → memasukkan perubahan ke staging area.
git commit -m "..." → menyimpan perubahan ke riwayat Git dengan keterangan.
git push -u origin nama-branch → mengirim branch dan commit ke GitHub.
Jika branch sudah pernah dibuat dan sudah memiliki upstream, cukup menggunakan git push.

6. Apa itu Fork?
Fork adalah membuat salinan repository orang lain ke akun GitHub kita sendiri.
Dua situasi nyata menggunakan fork:
Ingin berkontribusi ke proyek open source tetapi tidak mempunyai izin langsung untuk melakukan push ke repository asli.
Ingin mengembangkan atau memperbaiki proyek orang lain secara terpisah sebelum mengusulkan perubahan kepada pemilik repository.
Perbedaan Fork dan Clone:
Fork → membuat salinan repository di akun GitHub kita.
Clone → mengambil repository dari GitHub ke komputer lokal.
Contoh:
Repository asli
      ↓
    Fork
      ↓
Repository di akun GitHub kita
      ↓
    Clone
      ↓
Komputer kita

7. Enam langkah kontribusi Open Source dengan Fork + Pull Request
1. Fork repository
Membuat salinan repository ke akun GitHub sendiri.
Tujuan: Agar kita bisa mengembangkan kode tanpa harus memiliki akses langsung ke repository asli.
2. Clone repository
git clone https://github.com/username/proyek.git
Tujuan: Mengambil repository hasil fork ke komputer.
3. Buat branch dan lakukan perubahan
git switch -c perbaikan-bug
Kemudian edit kode dan lakukan:
git add .
git commit -m "Memperbaiki bug"
Tujuan: Membuat perubahan secara terpisah dan terdokumentasi.
4. Push branch ke GitHub
git push -u origin perbaikan-bug
Tujuan: Mengirim perubahan dari komputer ke repository hasil fork.
5. Membuat Pull Request
Di GitHub, pilih Compare & pull request, lalu ajukan PR dari branch kita menuju repository asli.
Tujuan: Meminta pemilik atau maintainer proyek memeriksa dan mempertimbangkan perubahan kita.
6. Review dan merge
Maintainer memeriksa kode. Jika disetujui, perubahan dapat di-merge ke repository utama.
Tujuan: Memastikan perubahan yang masuk ke proyek utama sudah sesuai standar dan tidak merusak fitur lain.

8. Apa itu Pull Request?
Pull Request (PR) adalah permintaan untuk memasukkan perubahan dari satu branch ke branch/repository lain setelah kode diperiksa.
Tim profesional tidak langsung melakukan merge karena PR memberikan kesempatan untuk:
Code review — anggota tim dapat memeriksa kode.
Menemukan bug — kesalahan dapat ditemukan sebelum masuk ke main.
Diskusi — anggota tim dapat memberikan komentar atau saran.
Menjaga kualitas kode — perubahan dapat diperiksa sebelum menjadi bagian dari proyek utama.
Jadi, PR berfungsi sebagai proses pemeriksaan sebelum perubahan masuk ke kode utama.

9. Studi kasus Andi dan Budi
a. Apa yang kemungkinan terjadi ketika Budi melakukan push?
Kemungkinan besar Git akan menolak push dan menampilkan pesan seperti:
rejected
non-fast-forward
Karena branch di GitHub sudah memiliki commit baru dari Andi yang belum dimiliki Budi.
b. Mengapa terjadi?
Budi terakhir melakukan pull kemarin. Pagi ini Andi sudah melakukan push.
Akibatnya:
GitHub:
A → B → C (perubahan Andi)

Komputer Budi:
A → B
Budi mencoba melakukan push dari versi yang belum memiliki commit terbaru dari Andi. Git mencegahnya agar perubahan Andi tidak tertimpa.
c. Apa yang seharusnya dilakukan Budi?
Sebaiknya Budi melakukan:
git pull
sebelum mulai mengedit file, sehingga kode lokal sudah terbaru.
d. Urutan perintah Budi
Misalnya Budi bekerja pada branch main:
git pull
git status
# edit style.css
git add style.css
git commit -m "Memperbarui style.css"
git push
Jika git pull menghasilkan konflik, Budi harus menyelesaikan konflik tersebut terlebih dahulu sebelum melanjutkan commit dan push.

10. Studi Kasus — Alur Kerja Lengkap
Kode:
git clone https://github.com/andi/proyek.git
cd proyek
git switch -c perbaikan-bug
touch fix.js
git add fix.js
git commit -m "Memperbaiki bug pada validasi form"
git push origin perbaikan-bug
a. Apa yang dilakukan git clone?
git clone https://github.com/andi/proyek.git
Perintah tersebut mengambil repository proyek dari GitHub ke komputer lokal.
Clone juga membawa file proyek, riwayat commit, branch, dan konfigurasi remote.
b. Mengapa membuat branch perbaikan-bug?
git switch -c perbaikan-bug
Branch dibuat agar perbaikan bug dikerjakan secara terpisah dari main.
Keuntungannya:
main tetap aman.
Perubahan lebih mudah diperiksa.
Perubahan dapat diajukan melalui Pull Request.
Jika terjadi kesalahan, tidak langsung mengganggu kode utama.
c. Mengapa menggunakan git push origin perbaikan-bug?
git push origin perbaikan-bug
Perintah tersebut secara jelas mengatakan:
Kirim branch lokal perbaikan-bug ke repository remote origin.
Berbeda dengan:
git push
yang hanya dapat digunakan secara langsung jika branch tersebut sudah mempunyai upstream/tracking branch.
Pada contoh ini branch baru belum menggunakan -u, sehingga penggunaan:
git push origin perbaikan-bug
menyebutkan tujuan secara langsung.
d. Apa yang dilakukan di GitHub setelah push?
Setelah push berhasil:
Buka repository di GitHub.
GitHub biasanya menampilkan pilihan Compare & pull request.
Klik pilihan tersebut.
Pastikan branch sumber adalah perbaikan-bug.
Pilih branch tujuan, biasanya main.
Isi judul dan penjelasan perubahan.
Klik Create pull request.
Tunggu pemilik/maintainer melakukan review.
Alurnya:
Komputer
   ↓
git push
   ↓
GitHub branch perbaikan-bug
   ↓
Pull Request
   ↓
Review
   ↓
Merge ke main
e. Jika pemilik repo meminta revisi
Pengguna tidak perlu membuat Pull Request baru. Cukup tetap menggunakan branch perbaikan-bug, lakukan revisi, commit, kemudian push lagi.
Contohnya:
# edit fix.js sesuai permintaan
git add fix.js
git commit -m "Memperbaiki revisi validasi form"
git push origin perbaikan-bug
Commit baru tersebut akan otomatis muncul pada Pull Request yang sama.
Alurnya:
Review PR
   ↓
Diminta revisi
   ↓
Edit kode
   ↓
git add
   ↓
git commit
   ↓
git push
   ↓
PR diperbarui
   ↓
Review ulang
   ↓
Disetujui
   ↓
Merge ke main
Kesimpulan singkat:
push mengirim perubahan ke GitHub, pull mengambil perubahan dari GitHub, clone mengambil repository yang sudah ada, init membuat repository baru, sedangkan Fork + Branch + Pull Request merupakan alur umum untuk berkontribusi ke proyek orang lain secara aman dan terkontrol.
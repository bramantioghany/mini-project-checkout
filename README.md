# Mini Project: Sistem Checkout Produk Sederhana

Nama: Bramantio Ghany Suryoleksono  
Program: Full-Stack Web Development (Dibimbing)

## Deskripsi
Mini project ini mengimplementasikan logika checkout produk sederhana menggunakan computational thinking, flowchart, pseudocode, dan JavaScript vanilla.

Program menerima harga produk, jumlah produk, dan status member untuk menghitung subtotal, diskon, ongkos kirim, dan total pembayaran.

## Business Rules
1. Harga harus berupa angka positif.
2. Jumlah harus berupa bilangan bulat positif.
3. Member mendapatkan diskon 10% dari subtotal.
4. Non-member tidak mendapatkan diskon.
5. Gratis ongkir jika total setelah diskon minimal Rp250.000.
6. Ongkir Rp15.000 jika total setelah diskon kurang dari Rp250.000.
7. Input tidak valid menghasilkan pesan error.

## Teknologi
- JavaScript vanilla
- Node.js
- Jest
- Visual Studio Code
- draw.io

## Struktur Proyek
- `analysis.md`: problem decomposition.
- `flowchart.drawio`: flowchart yang dapat diedit.
- `flowchart.png`: hasil export flowchart.
- `pseudocode.md`: algoritma checkout.
- `checkout.js`: implementasi fungsi.
- `tests/checkout.test.js`: unit test.
- `testing.md`: dokumentasi hasil pengujian.

## Cara Menjalankan
Pastikan Node.js dan npm telah terinstal.

Jalankan contoh program menggunakan Node.js:

```bash
node main.js
```

Jalankan unit test menggunakan Jest:

```bash
npm test
```

## Function
`hitungCheckout(harga, jumlah, isMember)`

Fungsi mengembalikan object rincian checkout atau object error apabila input tidak valid.

## AI Usage Disclosure
LLM digunakan sebagai partner diskusi untuk membantu memahami problem decomposition, menyusun alternatif flowchart dan pseudocode, meninjau logika validasi, serta memberikan referensi implementasi dan strategi pengujian.

Implementasi akhir, pemahaman algoritma, verifikasi hasil, dan dokumentasi disesuaikan serta ditinjau oleh peserta.

## Testing
Dokumentasi hasil pengujian akan dilengkapi setelah unit test dijalankan.
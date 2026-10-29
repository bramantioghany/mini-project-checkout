Problem Analysis: Sistem Checkout Produk Sederhana

I. Problem Description
Program checkout menerima harga produk, jumlah produk, dan status member.
Program memvalidasi input, menghitung subtotal, diskon, ongkos kirim, dan total pembayaran.

II. Input
- `harga`: angka positif.
- `jumlah`: bilangan bulat positif.
- `isMember`: boolean (`true` untuk member, `false` untuk non-member).

III. Process
1. Memvalidasi harga dan jumlah.
2. Menghitung subtotal = harga × jumlah.
3. Menghitung diskon 10% jika member, atau 0 jika non-member.
4. Menghitung total setelah diskon.
5. Memberikan gratis ongkir jika total setelah diskon minimal Rp250.000. Jika tidak, ongkir Rp15.000.
6. Menghitung total pembayaran = total setelah diskon + ongkir.

IV. Output
- Subtotal.
- Diskon.
- Total setelah diskon.
- Ongkos kirim.
- Total pembayaran.
- Pesan error apabila input tidak valid.

V. Pattern Recognition
- Member selalu mendapatkan diskon 10% dari subtotal.
- Non-member tidak mendapatkan diskon.
- Ongkir ditentukan oleh satu batas nilai, yaitu Rp250.000 setelah diskon.

VI. Abstraction
Program hanya memerlukan harga, jumlah, dan status member untuk menentukan hasil checkout.
Informasi seperti nama produk, metode pembayaran, alamat pengiriman, dan stok tidak diperlukan dalam kasus ini.

VII. Computational Thinking
- Decomposition: membagi proses checkout menjadi beberapa tahap.
- Pattern Recognition: mengenali pola diskon dan ongkos kirim.
- Abstraction: menyederhanakan masalah ke variabel dan aturan yang relevan.
- Algorithm Design: menyusun langkah penyelesaian secara berurutan.
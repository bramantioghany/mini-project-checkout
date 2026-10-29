# Testing Documentation: Sistem Checkout Produk Sederhana

## 1. Informasi Pengujian

| Item                  |           Keterangan              |
|-----------------------|-----------------------------------|
| Program               | Sistem Checkout Produk Sederhana  |
| File yang diuji       |           `checkout.js`           |
| File pengujian        |       `tests/checkout.test.js`    |
| Testing Framework     |               Jest                |
| Runtime               |              Node.js              |
| Perintah pengujian    |            `npm test`             |

## 2. Tujuan Pengujian

Pengujian dilakukan untuk memastikan fungsi `hitungCheckout(harga, jumlah, isMember)` menghasilkan perhitungan checkout yang sesuai dengan business rules, meliputi:

1. Validasi input harga dan jumlah produk.
2. Perhitungan subtotal.
3. Penerapan diskon member sebesar 10%.
4. Penentuan ongkos kirim berdasarkan total setelah diskon.
5. Perhitungan total pembayaran.
6. Penanganan input tidak valid.

## 3. Test Scenarios

|Test |Skenario                                               | Input (harga, jumlah, isMember) | Expected Result               | Status |
|-----|-------------------------------------------------------|---------------------------------|-------------------------------|--------|
| 1.  | Member mendapatkan diskon 10%                         | (100000, 3, true)               | Total pembayaran Rp270.000    | PASS   |
| 2.  | Non-member tidak mendapatkan diskon                   | (50000, 2, false)               | Total pembayaran Rp115.000    | PASS   |
| 3.  | Total setelah diskon di bawah Rp250.000               | (100000, 2, false)              | Total pembayaran Rp215.000    | PASS   |
| 4.  | Total tepat Rp250.000                                 | (250000, 1, false)              | Total pembayaran Rp250.000    | PASS   |
| 5.  | Total di atas Rp250.000                               | (260000, 1, false)              | Total pembayaran Rp260.000    | PASS   |
| 6.  | Jumlah produk nol                                     | (100000, 0, false)              | Error: Input tidak valid      | PASS   |
| 7.  | Jumlah produk pecahan                                 | (100000, 1.5, false)            | Error: Input tidak valid      | PASS   |
| 8.  | Harga produk negatif                                  | (-100000, 1, false)             | Error: Input tidak valid      | PASS   |
| 9.  | Member tidak mendapatkan gratis ongkir setelah diskon | (250000, 1, true)               | Total pembayaran Rp240.000    | PASS   |
| 10. | Member mendapatkan gratis ongkir setelah diskon       | (300000, 1, true)               | Total pembayaran Rp270.000    | PASS   |

**Catatan:** PASS berarti hasil aktual sesuai dengan ekspektasi pengujian.
Seluruh status di atas didasarkan pada output Jest yang dilaporkan.

## 4. Detail Perhitungan Skenario

### Test 1 — Member mendapatkan diskon 10%
- Subtotal: Rp300.000
- Diskon: Rp30.000
- Total setelah diskon: Rp270.000
- Ongkir: Rp0
- Total pembayaran: Rp270.000

### Test 2 — Non-member tidak mendapatkan diskon
- Subtotal: Rp100.000
- Diskon: Rp0
- Total setelah diskon: Rp100.000
- Ongkir: Rp15.000
- Total pembayaran: Rp115.000

### Test 3 — Total di bawah batas gratis ongkir
- Subtotal: Rp200.000
- Diskon: Rp0
- Total setelah diskon: Rp200.000
- Ongkir: Rp15.000
- Total pembayaran: Rp215.000

### Test 4 — Total tepat batas gratis ongkir
- Subtotal: Rp250.000
- Diskon: Rp0
- Total setelah diskon: Rp250.000
- Ongkir: Rp0
- Total pembayaran: Rp250.000

### Test 5 — Total di atas batas gratis ongkir
- Subtotal: Rp260.000
- Diskon: Rp0
- Total setelah diskon: Rp260.000
- Ongkir: Rp0
- Total pembayaran: Rp260.000

### Test 6 — Jumlah produk nol
- Input: (100000, 0, false)
- Expected result: `{ error: "Input tidak valid" }`
- Actual result: Sesuai expected result.

### Test 7 — Jumlah produk pecahan
- Input: (100000, 1.5, false)
- Expected result: `{ error: "Input tidak valid" }`
- Actual result: Sesuai expected result.

### Test 8 — Harga produk negatif
- Input: (-100000, 1, false)
- Expected result: `{ error: "Input tidak valid" }`
- Actual result: Sesuai expected result.

### Test 9 — Member tidak mendapatkan gratis ongkir setelah diskon
- Subtotal: Rp250.000
- Diskon: Rp25.000
- Total setelah diskon: Rp225.000
- Ongkir: Rp15.000
- Total pembayaran: Rp240.000

### Test 10 — Member tidak mendapatkan gratis ongkir setelah diskon
- Subtotal: Rp300.000
- Diskon: Rp30.000
- Total setelah diskon: Rp270.000
- Ongkir: Rp0
- Total pembayaran: Rp270.000

Expected result: Sesuai dengan business rules karena total setelah diskon kurang dari Rp250.000.

## 5. Hasil Pengujian Aktual

Perintah yang dijalankan:

```bash
npm test
```

Output terminal:

```text
PASS  tests/checkout.test.js

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.696 s, estimated 1 s
Ran all test suites.
```

### Ringkasan

| Metrik             | Hasil |
|--------------------|-------|
| Total test suites  | 1     |
| Test suites passed | 1     |
| Test suites failed | 0     |
| Total test cases   | 10    |
| Test cases passed  | 10    |
| Test cases failed  | 0     |
| Snapshots          | 0     |

**Overall Result: PASS**

Seluruh 10 test case berhasil dijalankan tanpa kegagalan.

## 6. Kesimpulan

Berdasarkan hasil pengujian, fungsi `hitungCheckout()` telah memenuhi ekspektasi pada sepuluh skenario pengujian yang mencakup diskon member, transaksi non-member, batas gratis ongkir, serta validasi input tidak valid.

Test Case 9 dan 10 juga mengonfirmasi bahwa penentuan ongkos kirim dilakukan berdasarkan total setelah diskon, bukan subtotal sebelum diskon.

Dengan demikian, implementasi berhasil melewati seluruh test case yang telah dirancang.

## 7. Testing Limitations

Pengujian ini masih terbatas pada sepuluh skenario yang dipilih. Beberapa validasi tambahan yang dapat dipertimbangkan pada pengembangan berikutnya meliputi:

- Harga nol.
- Harga berupa string.
- Harga `NaN` atau `Infinity`.
- Jumlah negatif.
- Status member bukan boolean.
- Batas aman representasi angka dan presisi perhitungan.

Pengujian tambahan tersebut belum termasuk dalam sepuluh test case di atas.
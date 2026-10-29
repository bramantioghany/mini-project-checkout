/* File: tests/checkout.test.js digunakan untuk melakukan pengujian terhadap
   fungsi checkout yang ada di file checkout.js.
*/

// Melakukan import function hitungCheckout dari file checkout.js
const { hitungCheckout } = require("../checkout");

// TEST 1: Member mendapatkan diskon 10%.
test("Test 1 - Member mendapatkan diskon 10%", () => {
  const hasil = hitungCheckout(100000, 3, true);

  expect(hasil).toEqual({
    subtotal: 300000,
    diskon: 30000,
    totalSetelahDiskon: 270000,
    ongkir: 0,
    totalPembayaran: 270000
  });
});

// TEST 2: Non-member tidak mendapatkan diskon.
test("Test 2 - Non-member tidak mendapatkan diskon", () => {
  const hasil = hitungCheckout(50000, 2, false);

  expect(hasil).toEqual({
    subtotal: 100000,
    diskon: 0,
    totalSetelahDiskon: 100000,
    ongkir: 15000,
    totalPembayaran: 115000
  });
});

// TEST 3: Total setelah diskon di bawah Rp250.000.
test("Test 3 - Total di bawah batas gratis ongkir", () => {
  const hasil = hitungCheckout(100000, 2, false);

  expect(hasil).toEqual({
    subtotal: 200000,
    diskon: 0,
    totalSetelahDiskon: 200000,
    ongkir: 15000,
    totalPembayaran: 215000
  });
});

// TEST 4: Total tepat Rp250.000.
test("Test 4 - Total tepat batas gratis ongkir", () => {
  const hasil = hitungCheckout(250000, 1, false);

  expect(hasil).toEqual({
    subtotal: 250000,
    diskon: 0,
    totalSetelahDiskon: 250000,
    ongkir: 0,
    totalPembayaran: 250000
  });
});

// TEST 5: Total di atas Rp250.000.
test("Test 5 - Total di atas batas gratis ongkir", () => {
  const hasil = hitungCheckout(260000, 1, false);

  expect(hasil).toEqual({
    subtotal: 260000,
    diskon: 0,
    totalSetelahDiskon: 260000,
    ongkir: 0,
    totalPembayaran: 260000
  });
});

// TEST 6: Jumlah produk = 0.
test("Test 6 - Jumlah produk nol menghasilkan error", () => {
  const hasil = hitungCheckout(100000, 0, false);

  expect(hasil).toEqual({
    error: "Input tidak valid"
  });
});

// TEST 7: Jumlah produk berupa pecahan.
test("Test 7 - Jumlah produk pecahan menghasilkan error", () => {
  const hasil = hitungCheckout(100000, 1.5, false);

  expect(hasil).toEqual({
    error: "Input tidak valid"
  });
});

// TEST 8: Harga produk tidak valid (negatif).
test("Test 8 - Harga negatif menghasilkan error", () => {
  const hasil = hitungCheckout(-100000, 1, false);

  expect(hasil).toEqual({
    error: "Input tidak valid"
  });
});

// TEST 9: Subtotal Rp250.000 untuk member.
// Setelah diskon menjadi Rp225.000.
// Karena kurang dari Rp250.000, ongkir Rp15.000.
test("Test 9 - Member mendapat diskon sehingga tidak gratis ongkir", () => {
  const hasil = hitungCheckout(250000, 1, true);

  expect(hasil).toEqual({
    subtotal: 250000,
    diskon: 25000,
    totalSetelahDiskon: 225000,
    ongkir: 15000,
    totalPembayaran: 240000
  });
});

// TEST 10: Subtotal Rp300.000 untuk member.
// Setelah diskon menjadi Rp270.000.
// Karena lebih dari Rp250.000, ongkir gratis.
test("Test 10 - Member mendapat diskon sehingga gratis ongkir", () => {
  const hasil = hitungCheckout(300000, 1, true);

  expect(hasil).toEqual({
    subtotal: 300000,
    diskon: 30000,
    totalSetelahDiskon: 270000,
    ongkir: 0,
    totalPembayaran: 270000
  });
});